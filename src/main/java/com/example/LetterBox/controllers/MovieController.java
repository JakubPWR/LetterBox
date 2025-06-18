package com.example.LetterBox.controllers;

import com.example.LetterBox.entities.Movie;
import com.example.LetterBox.services.MovieService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/")
    public String home() {
        return "Welcome to LetterBox!";
    }

    @GetMapping("/movies/{pageNumber}")
    public List<Movie> getMovies(@PathVariable int pageNumber) {
        return movieService.getMoviesByPage(pageNumber);
    }

    @GetMapping("movie/name/{name}/{limit}")
    public CompletableFuture<List<Movie>> getMoviesByName(@PathVariable String name, @PathVariable int limit) {
        return movieService.getMovieByNameAsync(name,limit);
    }
}
