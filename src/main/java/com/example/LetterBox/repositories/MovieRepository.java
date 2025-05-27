package com.example.LetterBox.repositories;

import org.springframework.data.domain.Pageable;
import com.example.LetterBox.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.scheduling.annotation.Async;

import java.util.List;
import java.util.concurrent.CompletableFuture;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    List<Movie> findAllBy(Pageable pageable);
}
