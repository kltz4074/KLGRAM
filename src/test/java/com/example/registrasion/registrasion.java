package com.example.registrasion;

import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class registrasion {

    @GetMapping("/data")
    public String getData() {
        return " <h1> big text </h1>";
    }

    public static void main(String[] args) {
        SpringApplication.run(registrasion.class, args);
    }
}