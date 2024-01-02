package com.jiajun.blog.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jiajun.blog.model.Entity.Blog;
import com.jiajun.blog.model.Entity.Categority;
import com.jiajun.blog.model.vo.CategorityVo;
import com.jiajun.blog.repository.CategorityRepository;

@Service
public class CategorityService {
    @Autowired
    private CategorityRepository categorityRepository;

    public Categority saveCategory(Categority categority) {
        Categority updatedCategority = findByName(categority.getName());
        if (updatedCategority != null) {
            return null;
        }
        return categorityRepository.save(categority);
    }

    public Categority findByName(String name) {
        Categority categority = categorityRepository.findByName(name);
        return categority;
    }

    public Categority findById(Long id) {
        Categority categority = categorityRepository.findById(id).orElse(null);
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

    public CategorityVo categorityToCategorityVo(Categority categority) {
        if(categority == null) {
            return null;
        }
        CategorityVo categorityVo = new CategorityVo();
        categorityVo.setId(categority.getId());
        categorityVo.setName(categority.getName());
        return categorityVo;
    }

    public List<CategorityVo> categoritiesToCategorityVos(List<Categority> categorities) {
        List<CategorityVo> categorityVos = new ArrayList<>();
        for (Categority categority : categorities) {
            categorityVos.add(categorityToCategorityVo(categority));
        }
        return categorityVos;
    }

    public List<Blog> findBlogVosByCategorityId(Long id) {
        List<Blog> blogs = categorityRepository.findBlogsById(id);
        return blogs;
    }

}
