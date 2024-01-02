package com.jiajun.blog.api;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jiajun.blog.model.User;
import com.jiajun.blog.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/admin")
public class LoginController {

    @Autowired
    private UserService userService;

    /**
     * Handles the login request and returns an HttpResponse.
     *
     * @param username the username provided by the user
     * @param password the password provided by the user
     * @param session  the HttpSession object for storing user information
     * @return an ResponseEntity object with the user information and the status
     *         code
     */
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody Map<String, String> loginRequest, HttpSession session) {
        String username = loginRequest.get("username");
        String password = loginRequest.get("password");
        User user = userService.checkUser(username, password);
        if (user != null) {
            user.setPassword(null);
            session.setAttribute("user", user); // store the user information in the session
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/logout")
    public ResponseEntity<User> logout(HttpSession session) {
        session.removeAttribute("user");
        return ResponseEntity.ok(null);
    }

    @GetMapping("/checkLogin")
    public ResponseEntity<User> loginUser(HttpSession session) {
        User user = (User) session.getAttribute("user");

        if (user != null) {
            // User is logged in, return the user information
            user.setPassword(null); // Ensure the password is not included in the response
            return ResponseEntity.ok(user);
        } else {
            // User is not logged in, return an appropriate response
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}
