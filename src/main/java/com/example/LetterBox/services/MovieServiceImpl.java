package com.example.LetterBox.services;

import com.example.LetterBox.entities.Movie;
import com.example.LetterBox.repositories.MovieRepository;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@Service
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;

    public MovieServiceImpl(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public List<Movie> getMoviesByPage(int page) {
        return movieRepository.findAll(PageRequest.of(page, 15)).getContent();
    }

    @Override
    public Movie getMovieByName(String name) {
        return movieRepository.findByTitleIgnoreCase(name);
    }

    @Override
    public CompletableFuture<List<Movie>> getMovieByNameAsync(String movieName) {
        return movieRepository.findMovieByTitleAsync(movieName);
    }
}
