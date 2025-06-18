package com.example.LetterBox.repositories;

import com.example.LetterBox.entities.Movie;

import java.util.List;
import java.util.concurrent.CompletableFuture;

public interface MovieRepositoryCustom {
    CompletableFuture<List<Movie>> findMovieByTitleAsync(String title, int limit);
}
