package com.jiajun.blog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jiajun.blog.model.Blog;
import com.jiajun.blog.model.Categority;
import com.jiajun.blog.repository.CategorityRepository;

@Service
public class CategorityService {
    @Autowired
    private CategorityRepository categorityRepository;

    public Categority saveCategory(Categority categority) {
        Categority savedCategority = categorityRepository.save(categority);
        return savedCategority;
    }

    public Categority findByName(String name) {
        Categority categority = categorityRepository.findByName(name);
        return categority;
    }

    public Categority findById(Long id) {
        Categority categority = categorityRepository.findById(id).get();
        return categority;
    }

    public void deleteById(Long id) {
        categorityRepository.deleteById(id);
    }

    public Categority updateCategory(Categority categority) {
        // make sure the categority exists
        Categority updatedCategority = findById(categority.getId());
        if (updatedCategority == null) {
            return null;
        }
        return categorityRepository.save(categority);
    }

    public List<Categority> findAll() {
        List<Categority> categorities = categorityRepository.findAll();
        return categorities;
    }

    public List<Blog> findBlogsById(Long id) {
        return categorityRepository.findBlogsById(id);
    }

}
