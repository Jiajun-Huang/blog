/* eslint-disable react/jsx-no-undef */
"use client";

import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Upload,
} from "antd";

import MarkDown from "@/component/Markdown/Markdown";
// import {
//   getBlogByUriRequest,
//   getBlogContentDownloadLink,
//   uploadBlogRequest,
// } from "@/request/blog";
import { BlogDto } from "@/generated-sources/openapi";
import {
  BlogControllerApi,
  UploadBlogRequest,
} from "@/generated-sources/openapi/apis/BlogControllerApi";
import {
  getBlogByUriRequest,
  getBlogContentDownloadLink,
} from "@/request/blog";
import { Blog } from "@/type/Blog";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const onSubmit = async (values: any) => {
  const blog_api = new BlogControllerApi();

  const blogDto: BlogDto = {
    title: values.title,
    uri: values.uri,
    createTime: values.createTime,
    published: values.published,
    commentable: values.commentable,
  };

  const markdown = new Blob([values.content]);
  const files: Blob[] = values.files.fileList.map(
    (file: any) => file.originFileObj
  );
  const request: UploadBlogRequest = {
    blogDto: blogDto,
    markdown: markdown,
    images: files,
    cover: files[0],
  };
  console.log(files[0]);
  console.log(request);
  blog_api.uploadBlog(request).then((data) => {
    console.log(data);
  });
};
export default function Page() {
  const [text, setText] = useState("");
  const param = useSearchParams();
  const blog = param.get("blog");
  const [form] = Form.useForm();
  const initialValues = {
    title: "...",
    uri: "...",
    createTime: dayjs(Date.now()),
    published: true,
    commentable: true,
    content: "something",
  };
  useEffect(() => {
    if (blog !== null) {
      // get the blog from backend
      let blogData: Blog | undefined = undefined;
      getBlogByUriRequest(blog).then((data) => {
        initialValues.title = data.title;
        initialValues.uri = data.uri;
        initialValues.createTime = dayjs(data.createTime);
        initialValues.published = data.published;
        initialValues.commentable = data.commentable;
        blogData = data as Blog;
        const url = getBlogContentDownloadLink(blogData);
        fetch(url)
          .then((res) => res.text())
          .then((data) => {
            initialValues.content = data;
            setText(data);
            form.setFieldsValue(initialValues);
          });
      });
    }
  }, []);

  const onTextChange = (e: any) => {
    setText(e.target.value as string);
  };

  const urlTransform = (blogUri: string, url: string) => {
    // if url is start with http or https
    // return url
    // else
    // return url with prefix
    if (url.startsWith("http") || url.startsWith("https")) {
      return url;
    } else {
      const prefix = `${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/file/download`;
      // find the file name from url
      const fileName = blogUri + "/" + url;
      const newUrl = `${prefix}?path=${encodeURIComponent(fileName)}`;
      console.log(fileName, newUrl);
      return newUrl;
    }
  };
  // use data is in
  return (
    <Form onFinish={onSubmit} initialValues={initialValues} form={form}>
      <Form.Item label="title" name="title">
        <Input />
      </Form.Item>
      <Form.Item label="uri" name="uri">
        <Input />
      </Form.Item>
      <Form.Item label="Crate Time" name="createTime">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Cate" name="categoriy">
        <Select
          
        />
      </Form.Item>
      <Form.Item label="Publish" name="published" valuePropName="checked">
        <Checkbox />
      </Form.Item>
      <Form.Item label="Commentable" name="commentable" valuePropName="checked">
        <Checkbox />
      </Form.Item>
      <Form.Item label="content" name="content">
        <Input.TextArea onChange={onTextChange} name="content" />
      </Form.Item>
      <MarkDown
        urlTransform={urlTransform.bind(null, form.getFieldValue(["uri"]))}
      >
        {text}
      </MarkDown>
      <Form.Item label="files" name="files">
        <Upload directory>
          <Button icon={<UploadOutlined />}>Upload Directory</Button>
        </Upload>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
