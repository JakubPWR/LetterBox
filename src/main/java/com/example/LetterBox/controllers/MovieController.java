package com.example.LetterBox.controllers;
import com.example.LetterBox.entities.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.LetterBox.repositories.MovieRepository;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@RestController
public class MovieController {
    MovieRepository movieRepository;

    @Autowired
    MovieController(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @GetMapping("/")
    public String home() {
        return "Welcome to LetterBox!";
    }

    @GetMapping("/movies")
    public List<Movie> getMovies() {
        return movieRepository.findAllBy(PageRequest.of(0, 15));
    }

}
