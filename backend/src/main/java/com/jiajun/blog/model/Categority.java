package com.jiajun.blog.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "categority")
public class Categority {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    // foreign key
    @OneToMany(mappedBy = "categority")
    private List<Blog> blogs; // one categority has many blogs




    public Categority(Long id, String name, List<Blog> blogs) {
        this.id = id;
        this.name = name;
        this.blogs = blogs;
    }
    

    public Categority() {
    }


    public Categority(String name2) {
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Blog> getBlogs() {
        return this.blogs;
    }

    public void setBlogs(List<Blog> blogs) {
        this.blogs = blogs;
    }
    

}
