package com.example.LetterBox.services;

import com.example.LetterBox.entities.Movie;
import com.example.LetterBox.repositories.MovieRepositoryCustom;
import com.example.LetterBox.repositories.MovieRepositoryCustomImpl;
import lombok.RequiredArgsConstructor;
import org.apache.commons.text.similarity.CosineSimilarity;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

@Service
public class RecommendationServiceImpl implements RecommendationService {
    private final CosineSimilarity cosineUtil = new CosineSimilarity();
    private final MovieRepositoryCustom movieRepo;
    private final MovieService movieService;

    public RecommendationServiceImpl(@Qualifier("movieRepositoryCustomImpl") MovieRepositoryCustom movieRepo, MovieService movieService) {
        this.movieRepo = movieRepo;
        this.movieService = movieService;
    }

    @Override
    public CompletableFuture<List<Movie>> recommendByTitleAsync(String title, int limit) {
        return movieRepo.findMovieByTitleAsync(title, 1)
                .thenCompose(list -> {
                    if (list.isEmpty()) return CompletableFuture.completedFuture(Collections.emptyList());
                    Movie base = list.get(0);
                    return movieService.getAllMoviesAsync()
                            .thenApply(allMovies -> recommendSimilar(base, allMovies, limit));
                });
    }

    private List<Movie> recommendSimilar(Movie base, List<Movie> movies, int limit) {
        Map<Movie, Double> scored = new HashMap<>();

        Map<CharSequence, Integer> baseVec = textToVector(base.getOverview());

        for (Movie m : movies) {
            if (m.getId().equals(base.getId())) continue;

            double score = calculateScore(base, m);
            Map<CharSequence, Integer> mv = textToVector(m.getOverview());
            double sim = cosineUtil.cosineSimilarity(baseVec, mv);

            scored.put(m, score + sim);
        }

        return scored.entrySet().stream()
                .sorted(Map.Entry.<Movie, Double>comparingByValue().reversed())
                .limit(limit)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
    }

    private double calculateScore(Movie a, Movie b) {
        double score = 0.0;

        if (a.getGenre() != null && b.getGenre() != null) {
            Set<String> baseGenres = split(a.getGenre());
            for (String g : baseGenres) {
                if (split(b.getGenre()).contains(g)) score += 1.0;
            }
        }

        if (a.getReleasedYear() != null && b.getReleasedYear() != null) {
            int diff = Math.abs(a.getReleasedYear() - b.getReleasedYear());
            if (diff == 0) score += 0.5;
            else if (diff <= 3) score += 0.25;
        }

        if (a.getDirector() != null && a.getDirector().equalsIgnoreCase(b.getDirector())) {
            score += 0.5;
        }

        Set<String> baseStars = new HashSet<>(Arrays.asList(
                a.getStar1(), a.getStar2(), a.getStar3(), a.getStar4()
        ));
        baseStars.removeIf(Objects::isNull);

        for (String star : baseStars) {
            if (star.isEmpty()) continue;
            for (String otherStar : Arrays.asList(b.getStar1(), b.getStar2(), b.getStar3(), b.getStar4())) {
                if (star.equalsIgnoreCase(Optional.ofNullable(otherStar).orElse(""))) {
                    score += 0.25;
                    break;
                }
            }
        }

        if (b.getImdbRating() != null) {
            double r = b.getImdbRating();
            if (r >= 8.0) score += 1.0;
            else if (r >= 7.0) score += 0.5;
            else if (r >= 6.0) score += 0.25;
        }

        return score;
    }

    private Set<String> split(String s) {
        return Arrays.stream(s.split(","))
                .map(String::trim)
                .filter(t -> !t.isEmpty())
                .map(String::toLowerCase)
                .collect(Collectors.toSet());
    }

    private Map<CharSequence, Integer> textToVector(String text) {
        Map<CharSequence, Integer> freq = new HashMap<>();
        if (text == null || text.isEmpty()) return freq;
        String[] words = text.toLowerCase().split("\\W+");
        for (String w : words) {
            if (w.isEmpty()) continue;
            freq.merge(w, 1, Integer::sum);
        }
        return freq;
    }
}
