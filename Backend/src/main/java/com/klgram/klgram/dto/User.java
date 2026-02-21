package com.klgram.klgram.dto;

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private @Nullable Integer id;

    private String userusername;
    private String password;
    private String email;

    public Integer GetID() {
        return id;
    }

    public void SetID(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return userusername;
    }

    public void setUsername(String username) {
        this.userusername = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
