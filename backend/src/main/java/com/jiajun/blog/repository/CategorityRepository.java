
package com.jiajun.blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jiajun.blog.model.Blog;
import com.jiajun.blog.model.Categority;

public interface CategorityRepository extends JpaRepository<Categority, Long> {
    Categority findByName(String name);

    List<Blog> findBlogsById(Long id);
}