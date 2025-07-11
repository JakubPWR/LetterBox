package com.example.LetterBox.services;

import com.example.LetterBox.entities.Movie;

import java.util.List;
import java.util.concurrent.CompletableFuture;

public interface RecommendationService {
    public CompletableFuture<List<Movie>> recommendByTitleAsync(String title, int limit);
}
