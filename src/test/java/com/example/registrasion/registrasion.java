package com.example.registrasion;

import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class registrasion {

    @GetMapping("/")
    public String getData() {
        return " TEXT FROM BACKEND!";
    }

    public static void main(String[] args) {
        SpringApplication.run(registrasion.class, args);
    }
}