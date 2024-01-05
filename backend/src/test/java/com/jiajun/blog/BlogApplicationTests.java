package com.jiajun.blog;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.jiajun.blog.model.Entity.Blog;
import com.jiajun.blog.model.Entity.Categority;
import com.jiajun.blog.model.Entity.Tag;
import com.jiajun.blog.model.Entity.User;
import com.jiajun.blog.model.dto.BlogDto;
import com.jiajun.blog.service.BlogService;

@SpringBootTest
class BlogApplicationTests {

	@Autowired
	BlogService blogService;

	@Test
	void contextLoads() {

		User user = new User();
		user.setId(1L);
		user.setUsername("jiajun");
		List<Tag> tags = new ArrayList<>();
		Tag tag = new Tag();
		tag.setId(1L);
		tag.setName("tag1");
		tags.add(tag);

		Categority categority = new Categority();
		categority.setId(1L);
		categority.setName("categority1");

		Blog blog = new Blog(1l, "title", "uri", "coverPath", "contentPath", "flag", 1, 1, true, true, true, new Date(),
				new Date(), user, categority, tags, null);
		BlogDto blogMetaDto = new BlogDto();

		BeanUtils.copyProperties(blog, blogMetaDto);
		System.out.println(blogMetaDto);

	}

}
