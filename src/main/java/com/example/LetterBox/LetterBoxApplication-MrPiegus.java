package com.example.LetterBox;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class LetterBoxApplication {

	public static void main(String[] args) {
		SpringApplication.run(LetterBoxApplication.class, args);
	}

}
