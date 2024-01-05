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
    public ResponseEntity<String> save(@RequestParam String name) {
        if (categorityService.findByName(name) != null) {
            return ResponseEntity.badRequest().body("categority already exists");
        }
        Categority categority = new Categority(name);
        categorityService.saveCategory(categority);
        return ResponseEntity.ok("success");
    }

    @PostMapping("/delete")
    public ResponseEntity<String> delete(@RequestParam Long id) {
        if (categorityService.findById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok("success");
    }

    @GetMapping("/list")
    public ResponseEntity<List<CategorityVo>> list() {
        List<CategorityVo> categorityVos = new ArrayList<>();
        List<Categority> categorities = categorityService.findAll();
        for (Categority categority : categorities) {
            categorityVos.add(categorityService.categorityToCategorityVo(categority));
        }

        return ResponseEntity.ok(categorityVos);
    }

    @GetMapping("/listblogs")
    public ResponseEntity<List<BlogVo>> listBlogs(@RequestParam Long id) {
        return ResponseEntity.ok(blogService.blogsToBlogVos(categorityService.findBlogsById(id)));
    }

}
