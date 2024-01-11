package com.jiajun.blog.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jiajun.blog.model.Entity.Blog;
import com.jiajun.blog.model.Entity.Tag;
import com.jiajun.blog.model.vo.TagVo;
import com.jiajun.blog.repository.TagRepository;

@Service
public class TagService {

    @Autowired
    private TagRepository tagRepository;

    public Tag createTag(Tag tag) {
        Tag savedTag = tagRepository.save(tag);
        return savedTag;
    }

    public void deleteById(Long id) {
        tagRepository.deleteById(id);
    }

    public List<Tag> findAll() {
        List<Tag> tags = tagRepository.findAll();
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

    public List<Tag> getTagsByIds(List<Long> ids) {
        List<Tag> tags = new ArrayList<>();
        for (Long id : ids) {
            Tag tag = tagRepository.findById(id).orElse(null);
            if (tag != null) {
                tags.add(tag);
            }
        }
        return tags;
    }

    public List<TagVo> tagsToTagVos(List<Tag> tags) {
        if (tags == null) {
            return null;
        }
        List<TagVo> tagVos = new ArrayList<>();
        for (Tag tag : tags) {
            TagVo tagVo = new TagVo();
            BeanUtils.copyProperties(tag, tagVo);
            tagVos.add(tagVo);
        }
        return tagVos;
    }

}
