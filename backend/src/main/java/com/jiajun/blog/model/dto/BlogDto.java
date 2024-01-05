package com.jiajun.blog.model.dto;

import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BlogDto {
    private String title;
    private String uri;
    private String flag;
    private Long user; // user id
    private List<Long> tags; // tag id
    private Date createTime;
    private Date updateTime;
    private Long categorie; // categorie id
    private boolean published;
    private boolean commentable;
}
