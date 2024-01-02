package com.jiajun.blog.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.jiajun.blog.model.Blog;
import com.jiajun.blog.repository.BlogRepository;

@Service
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private FileService fileService;

    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public List<Blog> getAllBlogObject() {
        return blogRepository.findAll();
    }

    public void saveBlog(Blog blog, MultipartFile markdown, MultipartFile cover,
            MultipartFile[] images) throws IOException {
        fileService.uploadFile(markdown, blog.getUri()); // upload markdown
        fileService.uploadFile(cover, blog.getUri()); // upload cover
        for (MultipartFile image : images) {
            fileService.uploadFile(image, blog.getUri()); // upload images
        }

        String contentPath = blog.getUri() + "/" + markdown.getOriginalFilename();
        String coverPath = blog.getUri() + "/" + cover.getOriginalFilename();
        blog.setContentPath(contentPath);
        blog.setCoverPath(coverPath);
        blogRepository.save(blog);
    }

    public void updateBlog(Blog blog, MultipartFile markdown, MultipartFile cover,
            MultipartFile[] images) {

    }

    public void deleteBlog(Long id) {
    }

    public Blog getBlogById(Long id) {
        return blogRepository.findById(id).orElse(null);
    }

    public Blog getBlogByUri(String uri) {
        return blogRepository.findByUri(uri);
    }
}
