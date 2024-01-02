package com.jiajun.blog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jiajun.blog.model.User;
import com.jiajun.blog.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * check if the user exists and the password is correct
     * 
     * @param username
     * @param hashedPassword
     * @return User or null
     */
    public User checkUser(String username, String password) {

        User user = userRepository.findByUsernameAndPassword(username, password);
        return user;
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    
}
