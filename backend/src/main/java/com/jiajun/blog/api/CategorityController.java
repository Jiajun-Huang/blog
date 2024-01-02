package com.jiajun.blog.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jiajun.blog.model.Blog;
import com.jiajun.blog.model.Categority;
import com.jiajun.blog.service.CategorityService;

@RestController
@RequestMapping("/categority")
public class CategorityController {

    @Autowired
    CategorityService categorityService;

    @PostMapping("/upload")
    public ResponseEntity<String> save(@RequestParam String name) {
        Categority categority = new Categority(name);
        categorityService.saveCategory(categority);
        if (categorityService.saveCategory(categority) == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok("success");
    }

    @PostMapping("/delete")
    public ResponseEntity<String> delete(@RequestParam Long id) {
        categorityService.deleteById(id);
        return ResponseEntity.ok("success");
    }

    @GetMapping("/list")
    public ResponseEntity<List<Categority>> list() {
        return ResponseEntity.ok(categorityService.findAll());
    }

    @GetMapping("/listblogs")
    public ResponseEntity<List<Blog>> listBlogs(@RequestParam Long id) {
        return ResponseEntity.ok(categorityService.findBlogsById(id));
    }

}
