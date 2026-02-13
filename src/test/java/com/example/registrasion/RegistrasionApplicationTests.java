package com.example.registrasion;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootTest
class RegistrasionApplicationTests {

    @Test
    void contextLoads() {
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello world!";
    }

}
