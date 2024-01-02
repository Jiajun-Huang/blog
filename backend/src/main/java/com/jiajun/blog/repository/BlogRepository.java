package com.jiajun.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jiajun.blog.model.Blog;

public interface BlogRepository extends JpaRepository<Blog, Long> {
    Blog findByUri(String uri);
}
