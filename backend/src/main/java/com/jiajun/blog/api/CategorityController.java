package com.jiajun.blog.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jiajun.blog.model.Entity.Categority;
import com.jiajun.blog.model.vo.BlogVo;
import com.jiajun.blog.model.vo.CategorityVo;
import com.jiajun.blog.service.BlogService;
import com.jiajun.blog.service.CategorityService;

@RestController
@RequestMapping("/categority")
public class CategorityController {

    @Autowired
    CategorityService categorityService;

    @Autowired
    BlogService blogService;

    @PostMapping("/upload")
    public ResponseEntity<String> createCategory(@RequestParam String name) {
        if (categorityService.findByName(name) != null) {
            return ResponseEntity.badRequest().body("categority already exists");
        }
        Categority categority = new Categority(name);
        categorityService.createCategory(categority);
        return ResponseEntity.ok("success");
    }

    @PostMapping("/delete")
    public ResponseEntity<String> deleteCategoryByName(@RequestParam String name) {
        Categority categority = categorityService.findByName(name);
        if (categority == null) {
            return ResponseEntity.badRequest().body("categority not exists");
        }
        categorityService.deleteCategory(categority);
        return ResponseEntity.ok("success");
    }

    @GetMapping("/list")
    public ResponseEntity<List<CategorityVo>> listCategory() {
        List<CategorityVo> categorityVos = new ArrayList<>();
        List<Categority> categorities = categorityService.findAll();
        for (Categority categority : categorities) {
            categorityVos.add(categorityService.categorityToCategorityVo(categority));
        }

        return ResponseEntity.ok(categorityVos);
    }

    @GetMapping("/listblogs")
    public ResponseEntity<List<BlogVo>> listBlogsWithCategory(@RequestParam String name) {
        Categority categority = categorityService.findByName(name);
        if (categority == null) {
            return ResponseEntity.badRequest().body(null);
        }
        List<BlogVo> blogVos = new ArrayList<>();
        List<BlogVo> blogs = blogService.findBlogsByCategorityId(categority.getId());
        for (BlogVo blog : blogs) {
            blogVos.add(blogService.blogToBlogVo(blog));
        }
        return ResponseEntity.ok(blogVos);
    }

}
