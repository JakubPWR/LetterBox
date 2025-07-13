package com.example.LetterBox.controllers;

import com.example.LetterBox.entities.Movie;
import com.example.LetterBox.services.MovieService;

import com.example.LetterBox.services.RecommendationService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@CrossOrigin(origins = {"http://localhost:4200","https://letterbox-production.up.railway.app"})
@RestController
public class MovieController {

    private final MovieService movieService;
    private final RecommendationService recommendationService;

    public MovieController(MovieService movieService, RecommendationService recommendationService) {
        this.movieService = movieService;
        this.recommendationService = recommendationService;
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
    @GetMapping("movie/details/{id}")
    public CompletableFuture<Movie> getMovie(@PathVariable int id) {
        return movieService.getMovieById(id);
    }
    @GetMapping("/recommend/{title}/{limit}")
    public CompletableFuture<List<Movie>> getRecommendations(@PathVariable String title, @PathVariable int limit) {
        return recommendationService.recommendByTitleAsync(title, limit);
    }
}
