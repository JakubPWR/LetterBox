package services.DataImport;

import com.opencsv.CSVReader;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

@Service
public class MovieImportService {

    private final DataSource dataSource;

    @Value("${csv.file.path}")
    private String csvFilePath;

    public MovieImportService(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @PostConstruct
    public void importDataIfNeeded() {
        try (Connection connection = dataSource.getConnection()) {
            if (!isTableExists(connection, "movies")) {
                createTable(connection);
                importCsvData(connection);
                System.out.println("Table created and data imported successfully.");
            } else {
                System.out.println("Table 'movies' already exists. Skipping data import.");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private boolean isTableExists(Connection connection, String tableName) throws Exception {
        try (ResultSet rs = connection.getMetaData().getTables(null, null, tableName, null)) {
            return rs.next();
        }
    }

    private void createTable(Connection connection) throws Exception {
        String sql = """
            CREATE TABLE movies (
                posterLink VARCHAR(255),
                seriesTitle VARCHAR(255),
                releasedYear INT,
                certificate VARCHAR(50),
                runtime VARCHAR(50),
                genre VARCHAR(255),
                imdbRating DOUBLE,
                overview TEXT,
                metaScore INT,
                director VARCHAR(255),
                star1 VARCHAR(255),
                star2 VARCHAR(255),
                star3 VARCHAR(255),
                star4 VARCHAR(255),
                noOfVotes INT,
                gross DOUBLE
            )
            """;

        try (Statement stmt = connection.createStatement()) {
            stmt.execute(sql);
        }
    }

    private void importCsvData(Connection connection) throws Exception {
        String sql = "INSERT INTO movies (posterLink, seriesTitle, releasedYear, certificate, runtime, genre, imdbRating, overview, metaScore, director, star1, star2, star3, star4, noOfVotes, gross) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try (CSVReader reader = new CSVReader(new FileReader(csvFilePath));
             PreparedStatement statement = connection.prepareStatement(sql)) {

            String[] line;
            boolean isFirstLine = true;

            while ((line = reader.readNext()) != null) {
                if (isFirstLine) {
                    isFirstLine = false; // skip header row
                    continue;
                }

                statement.setString(1, line[0]);
                statement.setString(2, line[1]);
                statement.setObject(3, parseInteger(line[2]));
                statement.setString(4, line[3]);
                statement.setString(5, line[4]);
                statement.setString(6, line[5]);
                statement.setObject(7, parseDouble(line[6]));
                statement.setString(8, line[7]);
                statement.setObject(9, parseInteger(line[8]));
                statement.setString(10, line[9]);
                statement.setString(11, line[10]);
                statement.setString(12, line[11]);
                statement.setString(13, line[12]);
                statement.setString(14, line[13]);
                statement.setObject(15, parseInteger(line[14]));
                statement.setObject(16, parseDouble(line[15]));

                statement.addBatch();
            }
            statement.executeBatch();
        }
    }

    private Integer parseInteger(String value) {
        try {
            return (value == null || value.isEmpty()) ? null : Integer.parseInt(value);
        } catch (NumberFormatException e) {
            return null;
        }
    }

    private Double parseDouble(String value) {
        try {
            return (value == null || value.isEmpty()) ? null : Double.parseDouble(value);
        } catch (NumberFormatException e) {
            return null;
        }
    }
}
