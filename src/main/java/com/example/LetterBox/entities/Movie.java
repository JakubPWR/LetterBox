package com.example.LetterBox.entities;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "movies")
@Getter
@Setter
@NoArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String posterLink;
    private String seriesTitle;
    private Integer releasedYear;
    private String certificate;
    private String runtime;
    private String genre;
    private Double imdbRating;

    @Column(columnDefinition = "TEXT")
    private String overview;

    private Integer metaScore;
    private String director;
    private String star1;
    private String star2;
    private String star3;
    private String star4;
    private Integer noOfVotes;
    private Double gross;
}
