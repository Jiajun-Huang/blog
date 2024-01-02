package com.jiajun.blog.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "user")
public class User {
    private enum Role {
        ADMIN, USER
    }

    @Id
    @GeneratedValue
    private Long id;
    private String username; // use username to login
    private String nickname; // show nickname
    private String avatar; // avatar url
    private String email; // email
    @JsonIgnore
    private Role role; // role
    private boolean deleted; // logical delete
    @JsonIgnore
    private String password; // password
    @Temporal(TemporalType.TIMESTAMP)
    private Date createTime; // create time
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateTime; // last login or update profile time

    // foreign key
    @JsonBackReference
    @OneToMany(mappedBy = "sendUser")
    private List<Comment> comments = new ArrayList<>();

    @JsonBackReference
    @OneToMany(mappedBy = "user")
    private List<Blog> blogs = new ArrayList<>();

    public User() {
    }

    public User(Long id, String username, String nickname, String avatar, String email, Role role, boolean deleted,
            String password, Date createTime, Date updateTime, List<Comment> comments, List<Blog> blogs) {
        this.id = id;
        this.username = username;
        this.nickname = nickname;
        this.avatar = avatar;
        this.email = email;
        this.role = role;
        this.deleted = deleted;
        this.password = password;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.comments = comments;
        this.blogs = blogs;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getNickname() {
        return this.nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getAvatar() {
        return this.avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return this.role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public boolean isDeleted() {
        return this.deleted;
    }

    public boolean getDeleted() {
        return this.deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getCreateTime() {
        return this.createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return this.updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public List<Comment> getComments() {
        return this.comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Blog> getBlogs() {
        return this.blogs;
    }

    public void setBlogs(List<Blog> blogs) {
        this.blogs = blogs;
    }

    public boolean isAdmin() {
        return this.role == Role.ADMIN;
    }
}
