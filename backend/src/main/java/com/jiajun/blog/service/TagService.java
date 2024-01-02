package com.jiajun.blog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jiajun.blog.model.Blog;
import com.jiajun.blog.model.Tag;
import com.jiajun.blog.repository.TagRepository;

@Service
public class TagService {

    @Autowired
    private TagRepository tagRepository;

    public Tag saveTag(Tag tag) {
        Tag savedTag = tagRepository.save(tag);
        return savedTag;
    }

    public void deleteById(Long id) {
        tagRepository.deleteById(id);
    }

    public List<Tag> findAll() {
        Iterable<Tag> tags = tagRepository.findAll();
        return tags;
    }

    public Tag findByName(String name) {
        Tag tag = tagRepository.findByName(name);
        return tag;
    }

    public Tag findById(Long id) {
        Tag tag = tagRepository.findById(id).get();
        return tag;
    }

    public List<Blog> findBlogsById(Long id) {
        return tagRepository.findBlogsById(id);
    }


}
