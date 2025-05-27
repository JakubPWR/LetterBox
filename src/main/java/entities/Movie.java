package entities;
import jakarta.persistence.*;

@Entity
@Table(name = "movies")
public class Movie {
    private String posterLink;
    private String seriesTitle;
    private Integer releasedYear;
    private String certificate;
    private String runtime;
    private String genre;
    private Double imdbRating;
    private String overview;
    private Integer metaScore;
    private String director;
    private String star1;
    private String star2;
    private String star3;
    private String star4;
    private Integer noOfVotes;
    private Double gross;
    @Id
    private Long id;

    // Constructors
    public Movie() {}

    public Movie(String posterLink, String seriesTitle, Integer releasedYear, String certificate,
                 String runtime, String genre, Double imdbRating, String overview, Integer metaScore,
                 String director, String star1, String star2, String star3, String star4,
                 Integer noOfVotes, Double gross) {
        this.posterLink = posterLink;
        this.seriesTitle = seriesTitle;
        this.releasedYear = releasedYear;
        this.certificate = certificate;
        this.runtime = runtime;
        this.genre = genre;
        this.imdbRating = imdbRating;
        this.overview = overview;
        this.metaScore = metaScore;
        this.director = director;
        this.star1 = star1;
        this.star2 = star2;
        this.star3 = star3;
        this.star4 = star4;
        this.noOfVotes = noOfVotes;
        this.gross = gross;
    }

    // Getters and setters
    public String getPosterLink() {
        return posterLink;
    }

    public void setPosterLink(String posterLink) {
        this.posterLink = posterLink;
    }

    public String getSeriesTitle() {
        return seriesTitle;
    }

    public void setSeriesTitle(String seriesTitle) {
        this.seriesTitle = seriesTitle;
    }

    public Integer getReleasedYear() {
        return releasedYear;
    }

    public void setReleasedYear(Integer releasedYear) {
        this.releasedYear = releasedYear;
    }

    public String getCertificate() {
        return certificate;
    }

    public void setCertificate(String certificate) {
        this.certificate = certificate;
    }

    public String getRuntime() {
        return runtime;
    }

    public void setRuntime(String runtime) {
        this.runtime = runtime;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Double getImdbRating() {
        return imdbRating;
    }

    public void setImdbRating(Double imdbRating) {
        this.imdbRating = imdbRating;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public Integer getMetaScore() {
        return metaScore;
    }

    public void setMetaScore(Integer metaScore) {
        this.metaScore = metaScore;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getStar1() {
        return star1;
    }

    public void setStar1(String star1) {
        this.star1 = star1;
    }

    public String getStar2() {
        return star2;
    }

    public void setStar2(String star2) {
        this.star2 = star2;
    }

    public String getStar3() {
        return star3;
    }

    public void setStar3(String star3) {
        this.star3 = star3;
    }

    public String getStar4() {
        return star4;
    }

    public void setStar4(String star4) {
        this.star4 = star4;
    }

    public Integer getNoOfVotes() {
        return noOfVotes;
    }

    public void setNoOfVotes(Integer noOfVotes) {
        this.noOfVotes = noOfVotes;
    }

    public Double getGross() {
        return gross;
    }

    public void setGross(Double gross) {
        this.gross = gross;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
