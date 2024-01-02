package com.jiajun.blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jiajun.blog.model.Blog;
import com.jiajun.blog.model.Tag;

public interface TagRepository extends JpaRepository<Tag, Long> {
    Tag findByName(String name);

    List<Blog> findBlogsById(Long id);
}
