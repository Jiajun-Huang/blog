package com.jiajun.blog.model;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "comment")
public class Comment {
    @Id
    @GeneratedValue
    private Long id;
    private String content;
    private boolean deleted;
    
    @Temporal(TemporalType.TIMESTAMP)
    private Date createTime;
    
    // foreign key
    
    @ManyToOne
    private User sendUser; 

    @ManyToOne
    private Blog blog;
    
    @OneToMany(mappedBy = "replyComment")
    private List<Comment> replyComments = new ArrayList<>();
    
    @ManyToOne
    private Comment replyComment; // reply comment or parent comment

    public Comment() {
    }

    public Comment(Long id, String content, boolean deleted, Date createTime, User sendUser, Blog blog, List<Comment> replyComments, Comment replyComment) {
        this.id = id;
        this.content = content;
        this.deleted = deleted;
        this.createTime = createTime;
        this.sendUser = sendUser;
        this.blog = blog;
        this.replyComments = replyComments;
        this.replyComment = replyComment;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
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

    public Date getCreateTime() {
        return this.createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public User getSendUser() {
        return this.sendUser;
    }

    public void setSendUser(User sendUser) {
        this.sendUser = sendUser;
    }

    public Blog getBlog() {
        return this.blog;
    }

    public void setBlog(Blog blog) {
        this.blog = blog;
    }

    public List<Comment> getReplyComments() {
        return this.replyComments;
    }

    public void setReplyComments(List<Comment> replyComments) {
        this.replyComments = replyComments;
    }

    public Comment getReplyComment() {
        return this.replyComment;
    }

    public void setReplyComment(Comment replyComment) {
        this.replyComment = replyComment;
    }



}
