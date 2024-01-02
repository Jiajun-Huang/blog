package com.jiajun.blog.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "blog")
public class Blog {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String uri;
    private String coverPath; // cover image path
    private String contentPath; // markdown file path
    private String flag;
    private Integer views;
    private Integer likes;
    private boolean commentable; // turn on/off comment
    private boolean published; // draft or published
    private boolean deleted; // deleted or not

    @Temporal(TemporalType.TIMESTAMP)
    private Date createTime;
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateTime;

    @JsonManagedReference
    @ManyToOne
    private User user;

    @JsonManagedReference
    @ManyToOne
    private Categority categority;

    @JsonManagedReference
    @ManyToMany
    private List<Tag> tags = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "blog")
    private List<Comment> comments;

    public Blog() {
    }

    public Blog(Long id, String title, String uri, String coverPath, String contentPath, String flag, Integer views,
            Integer likes, boolean commentable, boolean published, boolean deleted, Date createTime, Date updateTime,
            User user, Categority categority, List<Tag> tags, List<Comment> comments) {
        this.id = id;
        this.title = title;
        this.uri = uri;
        this.coverPath = coverPath;
        this.contentPath = contentPath;
        this.flag = flag;
        this.views = views;
        this.likes = likes;
        this.commentable = commentable;
        this.published = published;
        this.deleted = deleted;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.user = user;
        this.categority = categority;
        this.tags = tags;
        this.comments = comments;
    }

    public Blog(String title, String uri, String coverPath, String contentPath, String flag, Integer views,
            Integer likes, boolean commentable, boolean published, boolean deleted, Date createTime, Date updateTime,
            User user, Categority categority, List<Tag> tags, List<Comment> comments) {
        this.title = title;
        this.uri = uri;
        this.coverPath = coverPath;
        this.contentPath = contentPath;
        this.flag = flag;
        this.views = views;
        this.likes = likes;
        this.commentable = commentable;
        this.published = published;
        this.deleted = deleted;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.user = user;
        this.categority = categority;
        this.tags = tags;
        this.comments = comments;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUri() {
        return this.uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getCoverPath() {
        return this.coverPath;
    }

    public void setCoverPath(String coverPath) {
        this.coverPath = coverPath;
    }

    public String getContentPath() {
        return this.contentPath;
    }

    public void setContentPath(String contentPath) {
        this.contentPath = contentPath;
    }

    public String getFlag() {
        return this.flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public Integer getViews() {
        return this.views;
    }

    public void setViews(Integer views) {
        this.views = views;
    }

    public Integer getLikes() {
        return this.likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public boolean isCommentable() {
        return this.commentable;
    }

    public boolean getCommentable() {
        return this.commentable;
    }

    public void setCommentable(boolean commentable) {
        this.commentable = commentable;
    }

    public boolean isPublished() {
        return this.published;
    }

    public boolean getPublished() {
        return this.published;
    }

    public void setPublished(boolean published) {
        this.published = published;
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

    public Date getUpdateTime() {
        return this.updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Categority getCategority() {
        return this.categority;
    }

    public void setCategority(Categority categority) {
        this.categority = categority;
    }

    public List<Tag> getTags() {
        return this.tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public List<Comment> getComments() {
        return this.comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

}
