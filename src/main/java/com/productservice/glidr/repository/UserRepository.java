package com.productservice.glidr.repository;

import com.productservice.glidr.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}
