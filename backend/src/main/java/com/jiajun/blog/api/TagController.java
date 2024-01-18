package com.jiajun.blog.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jiajun.blog.model.Entity.Tag;
import com.jiajun.blog.model.vo.BlogVo;
import com.jiajun.blog.model.vo.TagVo;
import com.jiajun.blog.service.BlogService;
import com.jiajun.blog.service.TagService;

@RestController
@RequestMapping("/tag")
public class TagController {

    @Autowired
    TagService tagService;

    @Autowired
    BlogService blogService;

    @PostMapping("/upload")
    public ResponseEntity<String> createTag(@RequestParam String name) {
        Tag tag = new Tag(name);
        if (tagService.findByName(name) != null) {
            return ResponseEntity.badRequest().body("tag already exists");
        }
        tagService.createTag(tag);
        return ResponseEntity.ok("success");
    }

    @PostMapping("/delete/id")
    public ResponseEntity<String> deleteTagById(@RequestParam Long id) {
        tagService.deleteById(id);
        return ResponseEntity.ok("success");
    }

    @PostMapping("/delete/name")
    public ResponseEntity<String> deleteTagByName(@RequestParam String name) {
        Tag tag = tagService.findByName(name);
        if (tag == null) {
            return ResponseEntity.badRequest().body("tag not exists");
        }
        tagService.deleteById(tag.getId());
        return ResponseEntity.ok("success");
    }

    @GetMapping("/list")
    public ResponseEntity<List<TagVo>> listAllTags() {
        return ResponseEntity.ok(tagService.tagsToTagVos(tagService.findAll()));
    }

    @GetMapping("/listblogs")
    public ResponseEntity<List<BlogVo>> listBlogsWithTagId(@RequestParam Long id) {
        return ResponseEntity.ok(blogService.blogsToBlogVos(tagService.findBlogsById(id)));
    }

}
