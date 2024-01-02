package com.jiajun.blog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jiajun.blog.model.Entity.User;
import com.jiajun.blog.model.dto.UserDto;
import com.jiajun.blog.model.dto.UserRegistorDto;
import com.jiajun.blog.model.vo.UserVo;
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

    public UserDto getUserDtoById(Long id) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return null;
        }
        UserDto userDto = new UserDto();
        userDto.setUsername(user.getUsername());
        userDto.setAvatar(user.getAvatar());
        userDto.setEmail(user.getEmail());
        userDto.setNickname(user.getNickname());
        // userDto.setRole(user.getRole());

        return userDto;
    }

    public UserVo userToUserVo(User user) {
        UserVo userVo = new UserVo();
        userVo.setId(user.getId());
        userVo.setUsername(user.getUsername());
        userVo.setNickname(user.getNickname());
        userVo.setAvatar(user.getAvatar());
        userVo.setEmail(user.getEmail());
        userVo.setCreateTime(user.getCreateTime());
        userVo.setUpdateTime(user.getUpdateTime());
        // userVo.setRole(user.getRole());
        return userVo;
    }

    public User register(UserRegistorDto userDto) {
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setNickname(userDto.getNickname());
        user.setEmail(userDto.getEmail());
        user.setCreateTime(userDto.getCreateTime());
        user.setUpdateTime(userDto.getCreateTime());
        user.setDeleted(false);
        user.setAvatar("default.jpg");
        // user.setRole("user");

        return userRepository.save(user);
    }

}
