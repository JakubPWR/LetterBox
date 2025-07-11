package com.example.LetterBox.repositories;

import com.example.LetterBox.entities.Movie;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;


import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Repository
public class MovieRepositoryCustomImpl implements MovieRepositoryCustom {

    private ExecutorService executor;
    MovieRepositoryCustomImpl(ExecutorService executorService) {
        this.executor = executorService;
    }
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public CompletableFuture<List<Movie>> findMovieByTitleAsync(String title, int limit) {
        return CompletableFuture.supplyAsync(() -> {
            TypedQuery<Movie> query = entityManager.createQuery(
                    "SELECT m FROM Movie m WHERE LOWER(m.seriesTitle) LIKE LOWER(CONCAT('%', :seriesTitle, '%'))" , Movie.class);
            query.setParameter("seriesTitle", title);
            query.setMaxResults(limit);
            return query.getResultList();
        }, executor);
    }
    @Override
    public CompletableFuture<Movie> findMovieById(Integer id)
    {
        return CompletableFuture.supplyAsync(()->{
            TypedQuery<Movie> query = entityManager.createQuery("SELECT m FROM Movie m WHERE m.id = :id", Movie.class);
            query.setParameter("id", id);
            return query.getSingleResult();
        },executor);
    }
}
