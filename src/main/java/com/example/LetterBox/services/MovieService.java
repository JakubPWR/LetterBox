package com.example.LetterBox.services;

import com.example.LetterBox.entities.Movie;

import java.util.List;
import java.util.concurrent.CompletableFuture;

public interface MovieService {
    List<Movie> getMoviesByPage(int page);

    Movie getMovieByName(String name);

    CompletableFuture<List<Movie>> getMovieByNameAsync(String movieName);
}
