package com.store.BookStore.controller;

import com.store.BookStore.entity.User;
import com.store.BookStore.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        try {

            User savedUser = userService.register(user);

            // Do not send password back to frontend
            savedUser.setPassword(null);

            return ResponseEntity.ok(savedUser);

        } catch (RuntimeException e) {

            return ResponseEntity
                    .badRequest()
                    .body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {

        return userService
                .login(user.getEmail(), user.getPassword())
                .map(existingUser -> {

                    // Do not send password to frontend
                    existingUser.setPassword(null);

                    return ResponseEntity.ok(
                            Map.of(
                                    "message", "Login successful",
                                    "user", existingUser
                            )
                    );
                })
                .orElse(
                        ResponseEntity
                                .status(401)
                                .body(
                                        Map.of(
                                                "message",
                                                "Invalid email or password"
                                        )
                                )
                );
    }
}