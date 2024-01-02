package com.jiajun.blog.model.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String username;
    private String nickname;
    private String avatar;
    private String email;
    private String role;
    private Date createTime;
    private Date updateTime;
}
