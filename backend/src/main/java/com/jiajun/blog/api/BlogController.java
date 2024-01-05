package com.jiajun.blog.api;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jiajun.blog.model.Entity.Blog;
import com.jiajun.blog.model.Entity.User;
import com.jiajun.blog.model.dto.BlogDto;
import com.jiajun.blog.model.vo.BlogVo;
import com.jiajun.blog.service.BlogService;

import io.swagger.annotations.ApiParam;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/blog")
public class BlogController {

    @Autowired
    private BlogService blogService;

    @PostMapping(value = "/upload", consumes = { "multipart/form-data" })
    public ResponseEntity<Blog> uploadBlog(
            @RequestPart(required = false) MultipartFile[] images,
            @RequestPart MultipartFile markdown,
            @RequestPart(required = false) MultipartFile cover,
            @ApiParam() @RequestPart @Valid BlogDto blogDto,
            HttpSession session) {

        User user = (User) session.getAttribute("user");
        System.out.println("Session ID: " + session.getId());
        if (user == null) {
            return ResponseEntity.badRequest().build();
        } else {
            blogDto.setUser(user.getId());
        }
        System.out.println(blogDto);
        System.out.println(blogDto.getUri());

        blogService.uploadBlog(blogDto, markdown, cover, images, user);

        return ResponseEntity.ok().build();
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

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteBlog(@RequestParam Long id) {
        if (blogService.deleteBlog(id)) {
            return ResponseEntity.ok("success");
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("list")
    public ResponseEntity<List<BlogVo>> getAllBlog() {
        List<Blog> blogs = blogService.getAllBlogObject();
        List<BlogVo> blogVos = new ArrayList<>();
        for (Blog blog : blogs) {
            blogVos.add(blogService.blogToBlogVo(blog));
        }
        return ResponseEntity.ok(blogVos);
    }

    /**
     * Get blog resource such as images, markdown file, cover image.
     * 
     * @param uri
     * @param resourcePath
     * @return
     * @throws IOException
     */
    @GetMapping("resource")
    public ResponseEntity<Resource> getBlogResource(@RequestParam String uri,
            @RequestParam String resourcePath) throws IOException {
        Resource resource = blogService.getBlogResource(uri, resourcePath);
        if (resource == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().contentLength(resource.contentLength())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header("Content-Disposition", "inline; filename=\"" + resourcePath + "\"")
                .body(resource);
    }
}