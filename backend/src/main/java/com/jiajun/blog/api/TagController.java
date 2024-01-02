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
import com.jiajun.blog.model.Tag;
import com.jiajun.blog.service.TagService;

@RestController
@RequestMapping("/tag")
public class TagController {

    @Autowired
    TagService tagService;

    @PostMapping("/upload")
    public ResponseEntity<String> save(@RequestParam String name) {
        Tag tag = new Tag(name);
        tagService.saveTag(tag);
        return ResponseEntity.ok("success");
    }

    @PostMapping("/delete")
    public ResponseEntity<String> delete(@RequestParam Long id) {
        tagService.deleteById(id);
        return ResponseEntity.ok("success");
    }

    @GetMapping("/list")
    public ResponseEntity<List<Tag>> list() {
        return ResponseEntity.ok(tagService.findAll());
    }

    @GetMapping("/listblogs")
    public ResponseEntity<List<Blog>> listBlogs(@RequestParam Long id) {
        return ResponseEntity.ok(tagService.findBlogsById(id));
    }

}
