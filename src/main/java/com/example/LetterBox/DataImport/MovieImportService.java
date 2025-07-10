package com.example.LetterBox.DataImport;

import com.opencsv.CSVReader;
import com.example.LetterBox.entities.Movie;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import com.example.LetterBox.repositories.MovieRepository;

import java.io.FileReader;

@Service
public class MovieImportService {

    @Value("${csv.file.path}")
    private String csvFilePath;

    private final MovieRepository movieRepository;

    public MovieImportService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @PostConstruct
    public void importData() {
        try (CSVReader reader = new CSVReader(new FileReader(csvFilePath))) {
            String[] line;
            boolean isFirstLine = true;

//            movieRepository.deleteAll();
//            System.out.println("Existing movies cleared from the database.");

            if (movieRepository.count() > 0) {
                System.out.println("Movies already exist in the database. Import aborted.");
                return;
            }


            while ((line = reader.readNext()) != null) {
                if (isFirstLine) {
                    isFirstLine = false; // skip header
                    continue;
                }

                Movie movie = new Movie();
                movie.setPosterLink(line[0]);
                movie.setSeriesTitle(line[1]);
                movie.setReleasedYear(parseInteger(line[2]));
                movie.setCertificate(line[3]);
                movie.setRuntime(line[4]);
                movie.setGenre(line[5]);
                movie.setImdbRating(parseDouble(line[6]));
                movie.setOverview(line[7]);
                movie.setMetaScore(parseInteger(line[8]));
                movie.setDirector(line[9]);
                movie.setStar1(line[10]);
                movie.setStar2(line[11]);
                movie.setStar3(line[12]);
                movie.setStar4(line[13]);
                movie.setNoOfVotes(parseInteger(line[14]));
                movie.setGross(parseDouble(line[15]));

                movieRepository.save(movie);
            }
        } catch (Exception e) {
            e.printStackTrace();
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
            return (value == null || value.isEmpty()) ? null : Double.parseDouble(value.replace(",", "").replace("$", ""));
        } catch (NumberFormatException e) {
            return null;
        }
    }
}

