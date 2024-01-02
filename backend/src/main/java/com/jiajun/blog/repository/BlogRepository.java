package com.jiajun.blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jiajun.blog.model.Entity.Blog;

public interface BlogRepository extends JpaRepository<Blog, Long> {

    Blog findByUri(String uri);

    // do not select comments
    @Query(value = "SELECT id, title, uri, coverPath, contentPath, flag, views, likes, commentable, published, deleted, createTime, updateTime, user, categority, tags FROM blog WHERE deleted = false AND published = true", nativeQuery = true)
    List<Blog> getAllBlogsWithOutComments();

}
