package com.store.BookStore;

import com.store.BookStore.entity.Book;
import com.store.BookStore.repository.BookRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initializeBooks(BookRepository bookRepository) {

        return args -> {

            if (bookRepository.count() == 0) {

                bookRepository.save(
                    new Book(
                        null,
                        "The Alchemist",
                        "Paulo Coelho",
                        "Fiction",
                        399,
                        "A story about following your dreams and discovering your purpose.",
                        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e"
                    )
                );

                bookRepository.save(
                    new Book(
                        null,
                        "Atomic Habits",
                        "James Clear",
                        "Self Help",
                        499,
                        "A practical guide to building good habits and breaking bad ones.",
                        "https://images.unsplash.com/photo-1512820790803-83ca734da794"
                    )
                );

                bookRepository.save(
                    new Book(
                        null,
                        "Clean Code",
                        "Robert C. Martin",
                        "Programming",
                        699,
                        "A guide to writing clean, readable and maintainable software.",
                        "https://images.unsplash.com/photo-1532012197267-da84d127e765"
                    )
                );

                bookRepository.save(
                    new Book(
                        null,
                        "Think Like a Monk",
                        "Jay Shetty",
                        "Self Help",
                        450,
                        "Lessons for finding peace, purpose and a meaningful life.",
                        "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                    )
                );

                System.out.println("Sample books added successfully!");
            }
        };
    }
}