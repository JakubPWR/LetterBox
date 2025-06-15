package com.example.LetterBox.repositories;

import com.example.LetterBox.entities.Movie;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long>, MovieRepositoryCustom {

    List<Movie> findAllBy(Pageable pageable);

    Movie findByTitleIgnoreCase(String title);
}
