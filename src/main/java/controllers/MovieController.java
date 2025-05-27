package controllers;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;

@RestController
public class MovieController {

    @Async
    @GetMapping("/movies")
    public CompletableFuture<String> getMovies() {
        return CompletableFuture.supplyAsync(() -> {
            return "List of movies";
        });
    }
}
