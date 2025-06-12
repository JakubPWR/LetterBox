package com.example.LetterBox.controllers;
import com.example.LetterBox.entities.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.LetterBox.repositories.MovieRepository;

import java.util.List;
import java.util.concurrent.CompletableFuture;
@CrossOrigin(origins = "http://localhost:4200")
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

    @GetMapping("/movies/{pageNumber}")
    public List<Movie> getMovies(@PathVariable int pageNumber) {
        List<Movie> movies = movieRepository.findAll(PageRequest.of(pageNumber, 15)).getContent();
        return movies;
    }

}
