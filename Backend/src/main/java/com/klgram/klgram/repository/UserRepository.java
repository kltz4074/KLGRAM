package com.klgram.klgram.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klgram.klgram.dto.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> { }
