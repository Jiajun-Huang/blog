package com.jiajun.blog.model.vo;

import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BlogVo {
    private Long id;
    private String title;
    private String uri;
    private String coverPath;
    private String contentPath;
    private String flag;
    private Integer views;
    private Integer likes;
    private UserVo user;
    private List<TagVo> tags;
    private Date createTime;
    private Date updateTime;
    private CategorityVo categorie;
    private boolean published;
    private boolean commentable;
}
