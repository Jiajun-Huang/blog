package com.jiajun.blog.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jiajun.blog.model.Entity.User;
import com.jiajun.blog.model.dto.UserLoginDto;
import com.jiajun.blog.model.dto.UserRegistorDto;
import com.jiajun.blog.model.vo.UserVo;
import com.jiajun.blog.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/user")
public class UserController {

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
    public ResponseEntity<UserVo> login(@RequestBody UserLoginDto userDto,
            HttpSession session) {
        User user = userService.checkUser(userDto.getUsername(), userDto.getPassword());
        if (user != null) {
            session.setAttribute("user", user); // store the user information in the session
            System.out.println("Session ID: " + session.getId());
            UserVo userVo = userService.userToUserVo(user);
            User user1 = (User) session.getAttribute("user");
            return ResponseEntity.ok(userVo);
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
    public ResponseEntity<UserVo> checkLogin(HttpSession session) {

        User user = (User) session.getAttribute("user");
        System.out.println("Session ID: " + session.getId());
        if (user != null) {
            UserVo userVo = userService.userToUserVo(user);
            return ResponseEntity.ok(userVo);
        } else {
            // User is not logged in, return an appropriate response
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRegistorDto userDto) {
        User user = userService.register(userDto);
        if (user != null) {
            return ResponseEntity.ok("success");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping("/changeAvatar")
    public ResponseEntity<String> changeAvatar(@RequestParam MultipartFile avatar, HttpSession session) {
        // User user = (User) session.getAttribute("user");
        // if (user == null) {
        // return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        // }
        // user.setAvatar(avatar);
        // userService.updateUser(user);
        return ResponseEntity.ok("success");
    }

}
