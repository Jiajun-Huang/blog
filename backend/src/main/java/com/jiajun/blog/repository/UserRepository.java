package com.jiajun.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jiajun.blog.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsernameAndPassword(String username, String hashedPassword);
}
