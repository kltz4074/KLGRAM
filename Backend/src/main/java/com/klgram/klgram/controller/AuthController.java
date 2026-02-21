package com.klgram.klgram.controller;

import com.klgram.klgram.dto.LoginRequest;
import com.klgram.klgram.dto.User;
import com.klgram.klgram.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        System.out.println("Username: " + loginRequest.getUsername());
        System.out.println("Password: " + loginRequest.getPassword());

        return ResponseEntity.ok("Login succes");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User regRequest) {
        System.out.println("Username: " + regRequest.getUsername());
        System.out.println("Password: " + regRequest.getPassword());
        System.out.println("Email: " + regRequest.getEmail());

        User n = new User();
        n.setUsername(regRequest.getUsername());
        n.setEmail(regRequest.getEmail());
        n.setPassword(regRequest.getPassword());
        userRepository.save(n);

        return ResponseEntity.ok("User saved!");
    }

    @GetMapping("/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
