/* eslint-disable react/jsx-no-undef */
"use client";

import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Form, Input, Upload } from "antd";

import MarkDown from "@/component/Markdown/Markdown";
import { useEffect, useState } from "react";

import {
  getBlogByUriRequest,
  getBlogContentDownloadLink,
  uploadBlogRequest,
} from "@/request/blog";
import { Blog } from "@/type/Blog";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";

const onSubmit = async (values: any) => {
  console.log(values);

  const images: File[] = values?.files?.fileList.map(
    (file: any) => file.originFileObj
  );
  const markdown: File = new File([text], "markdown.md");
  const cover: File = images[0];
  const title: String = values["title"];
  const uri: String = values["uri"];
  const tags: any = [];
  const createTime: any = values["createTime"].toDate();
  const categories: any = undefined;
  const published: Boolean = values["published"];
  const commentable: Boolean = values["commentable"];

  console.log({
    images,
    markdown,
    cover,
    title,
    uri,
    tags,
    createTime,
    categories,
    published,
    commentable,
  });
  await uploadBlogRequest(
    images,
    markdown,
    cover,
    uri,
    title,
    tags,
    createTime,
    categories,
    published,
    commentable
  );
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
