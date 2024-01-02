package com.jiajun.blog.api;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jiajun.blog.model.Blog;
import com.jiajun.blog.model.User;
import com.jiajun.blog.service.BlogService;
import com.jiajun.blog.service.TagService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/blog")
public class BlogController {

    @Autowired
    private BlogService blogService;


    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(
            @RequestParam MultipartFile[] images,
            @RequestParam MultipartFile markdown,
            @RequestParam MultipartFile cover,
            @RequestParam String title,
            @RequestParam String uri,
            // @RequestParam List<Tag> tags,
            @RequestParam Date createdTime,
            // @RequestParam Categority categorie,
            @RequestParam boolean published,
            @RequestParam boolean commentable,
            HttpSession session) throws IOException {

        User user = (User) session.getAttribute("user");
        // if (user == null || !user.isAdmin()) {
        // return ResponseEntity.status(403).build();
        // }

        Blog blog = new Blog(title, uri, null, null, null, 0, 0, commentable, published, false,
                createdTime,
                null, user, null, null, null);

        blogService.saveBlog(blog, markdown, cover, images);
        return null;
    }

    @GetMapping("/get")
    public ResponseEntity<Blog> getBlog(
            @RequestParam(required = false) String uri,
            @RequestParam(required = false) Long id) {

        Blog blog = null;
        if (uri != null) {
            blog = blogService.getBlogByUri(uri);
        } else if (id != null) {
            blog = blogService.getBlogById(id);
        }

        if (blog == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(blog);

    }

    @PostMapping("/update")
    public ResponseEntity<String> uploadFile() {
        return null;
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteBlog() {
        return null;
    }

    @GetMapping("list")
    public ResponseEntity<List<Blog>> getAllBlog() {
        List<Blog> blogs = blogService.getAllBlogObject();
        return ResponseEntity.ok(blogs);
    }

    @GetMapping("content")
    public ResponseEntity<Blog> getBlogContent() {
        return null;
    }

    @GetMapping("cover")
    public ResponseEntity<Blog> getBlogCover() {
        return null;
    }

}
