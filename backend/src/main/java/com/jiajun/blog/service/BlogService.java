package com.jiajun.blog.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.jiajun.blog.model.Entity.Blog;
import com.jiajun.blog.model.Entity.Categority;
import com.jiajun.blog.model.Entity.Tag;
import com.jiajun.blog.model.Entity.User;
import com.jiajun.blog.model.dto.BlogDto;
import com.jiajun.blog.model.vo.BlogVo;
import com.jiajun.blog.repository.BlogRepository;

@Service
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private FileService fileService;

    @Autowired
    private TagService tagService;

    @Autowired
    private CategorityService categorityService;

    @Autowired
    private UserService userService;

    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public List<Blog> getAllBlogObject() {
        return blogRepository.findAll();
    }

    public void saveBlog(Blog blog, MultipartFile markdown, MultipartFile cover,
            MultipartFile[] images) {
        fileService.uploadFile(markdown, blog.getUri()); // upload markdown
        fileService.uploadFile(cover, blog.getUri()); // upload cover

        String contentPath = blog.getUri() + "/" + markdown.getOriginalFilename();
        String coverPath = cover != null ? blog.getUri() + "/" + cover.getOriginalFilename() : null;
        blog.setContentPath(contentPath);
        blog.setCoverPath(coverPath);

        blogRepository.save(blog);

        if (images == null) {
            return;
        }
        for (MultipartFile image : images) {
            fileService.uploadFile(image, blog.getUri()); // upload images
        }
    }

    public void updateBlog(Blog blog, MultipartFile markdown, MultipartFile cover,
            MultipartFile[] images) {

    }

    public boolean deleteBlog(Long id) {
        Blog blog = blogRepository.findById(id).orElse(null);
        if (blog != null) {
            fileService.deleteFile(blog.getUri()); // assume that blog resource is stored in a directory named by its
                                                   // uri
            blogRepository.deleteById(id);
            return true;

        } else {
            return false;
        }

    }

    public Blog getBlogById(Long id) {
        return blogRepository.findById(id).orElse(null);
    }

    public Blog getBlogByUri(String uri) {
        return blogRepository.findByUri(uri);
    }

    public List<Tag> getTagsByIds(List<Long> ids) {
        return tagService.getTagsByIds(ids);
    }

    public Categority getCategorityById(Long id) {
        return categorityService.findById(id);
    }

    public Resource getBlogResource(String uri, String contentPath) {
        return fileService.loadFileAsResource(uri + "/" + contentPath);
    }

    public Blog blogDtoToBlog(BlogDto blogDto, String coverPath, String contentPath) {
        Blog blog = new Blog();

        blog.setTitle(blogDto.getTitle());
        blog.setUri(blogDto.getUri());
        blog.setCoverPath(coverPath);
        blog.setContentPath(contentPath);
        blog.setFlag(blogDto.getFlag());
        blog.setViews(0);
        blog.setLikes(0);
        blog.setCommentable(blogDto.isCommentable());
        blog.setPublished(blogDto.isPublished());
        blog.setDeleted(false);
        blog.setCreateTime(blogDto.getCreateTime());
        blog.setUpdateTime(blogDto.getUpdateTime());

        if (blogDto.getUser() != null)
            blog.setUser(userService.getUserById(blogDto.getUser()));
        if (blogDto.getCategorie() != null)
            blog.setCategority(categorityService.findById(blogDto.getCategorie()));
        if (blogDto.getTags() != null)
            blog.setTags(tagService.getTagsByIds(blogDto.getTags()));

        // blog.setComments(null);
        return blog;
    }

    public BlogVo blogToBlogVo(Blog blog) {
        BlogVo blogVo = new BlogVo();
        blogVo.setId(blog.getId());
        blogVo.setTitle(blog.getTitle());
        blogVo.setUri(blog.getUri());
        blogVo.setCoverPath(blog.getCoverPath());
        blogVo.setContentPath(blog.getContentPath());
        blogVo.setFlag(blog.getFlag());
        blogVo.setViews(blog.getViews());
        blogVo.setLikes(blog.getLikes());
        blogVo.setCommentable(blog.isCommentable());
        blogVo.setPublished(blog.isPublished());
        blogVo.setCreateTime(blog.getCreateTime());
        blogVo.setUpdateTime(blog.getUpdateTime());

        if (blog.getUser() != null)
            blogVo.setUser(userService.userToUserVo(blog.getUser()));
        if (blog.getCategority() != null)
            blogVo.setCategorie(categorityService.categorityToCategorityVo(blog.getCategority()));
        if (blog.getTags() != null)
            blogVo.setTags(tagService.tagsToTagVos(blog.getTags())); // Change this line

        return blogVo;
    }

    public List<BlogVo> blogsToBlogVos(List<Blog> blogs) {
        List<BlogVo> blogVos = new ArrayList<>();
        for (Blog blog : blogs) {
            blogVos.add(blogToBlogVo(blog));
        }
        return blogVos;
    }

    public boolean uploadBlog(BlogDto blogDto, MultipartFile markdown, MultipartFile cover, MultipartFile[] images,
            User user) {

        String uri = blogDto.getUri();
        if (blogRepository.findByUri(uri) != null) {
            // overwrite
            Blog blog = blogRepository.findByUri(uri);
            
        }

        String coverPath = cover == null ? null : uri + "/" + cover.getOriginalFilename();
        String contentPath = uri + "/" + markdown.getOriginalFilename();

        Blog blog = blogDtoToBlog(blogDto, coverPath, contentPath);
        saveBlog(blog, markdown, cover, images);
        return true;

    }

    public List<BlogVo> findBlogsByCategorityId(Long id) {
        return null;
    }

}
