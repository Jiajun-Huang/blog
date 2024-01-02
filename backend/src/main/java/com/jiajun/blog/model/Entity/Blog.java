package com.jiajun.blog.model.Entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Data
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

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createTime;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.TIMESTAMP)
    private Date updateTime;

    @JsonBackReference
    @ManyToOne
    private User user;

    @JsonBackReference
    @ManyToOne
    private Categority categority;

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

    public Blog(String title, String uri, List<Tag> tagList, Categority categority, User user, Date createTime,
            boolean published, boolean commentable) {
        new Blog(title, uri, null, null, null, 0, 0, commentable, published, false, createTime, null, user, categority,
                tagList, null);
    }

    public Blog(String title, String uri, String coverPath, String contentPath, List<Tag> tagList,
            Categority categority, User user, Date createTime,
            boolean published, boolean commentable) {
        new Blog(title, uri, coverPath, contentPath, null, 0, 0, commentable, published, false, createTime,
                createTime, user,
                categority,
                tagList, null);
    }
}
