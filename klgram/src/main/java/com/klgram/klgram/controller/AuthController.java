package com.klgram.klgram.controller;

import com.klgram.klgram.dto.LoginRequest;
import com.klgram.klgram.dto.RegisterRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        System.out.println("Username: " + loginRequest.getUsername());
        System.out.println("Password: " + loginRequest.getPassword());

        return ResponseEntity.ok("Login succes");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest regRequest) {
        System.out.println("Username: " + regRequest.getUsername());
        System.out.println("Password: " + regRequest.getPassword());
        System.out.println("Email: " + regRequest.getEmail());

        return ResponseEntity.ok("Login succes");
    }
}
