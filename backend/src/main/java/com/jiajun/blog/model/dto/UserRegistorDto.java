package com.jiajun.blog.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistorDto {
    private String username;
    private String password;
    private String nickname;
    private String email;
    private Date createTime;

}
