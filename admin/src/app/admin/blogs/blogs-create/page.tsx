/* eslint-disable react/jsx-no-undef */
"use client";

import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Form, Input, Upload } from "antd";

import MarkDown from "@/component/Markdown/Markdown";
import { useState } from "react";

import { uploadBlogRequest } from "@/request/blog";

export default function Page() {
  const [text, setText] = useState("");

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
    const createTime: any = values["create-time"].toDate();
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

  const onTextChange = (e: any) => {
    setText(e.target.value as string);
  };

  const urlTransform = (url: string) => {
    // if url is start with http or https
    // return url
    // else
    // return url with prefix
    if (url.startsWith("http") || url.startsWith("https")) {
      return url;
    } else {
      const prefix = `${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/file/download/`;
      // find the file name from url
      const para = url.split("/");
      let fileName: string;
      if (para.length === 0) {
        fileName = url;
      } else {
        fileName = para[para.length - 1]; // get the last element
      }
      const newUrl = `${prefix}?path=${encodeURIComponent(fileName)}`;
      return newUrl;
    }
  };
  // use data is in session
  //
  return (
    <Form onFinish={onSubmit}>
      <Form.Item label="title" name="title">
        <Input />
      </Form.Item>
      <Form.Item label="uri" name="uri">
        <Input />
      </Form.Item>
      <Form.Item label="Crate Time" name="create-time">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Publish" name="published" valuePropName="checked">
        <Checkbox />
      </Form.Item>
      <Form.Item label="Commentable" name="commentable" valuePropName="checked">
        <Checkbox />
      </Form.Item>
      <Form.Item label="content" name="content">
        <Input.TextArea onChange={onTextChange} />
      </Form.Item>
      <MarkDown urlTransform={urlTransform}>{text}</MarkDown>
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
