"use client";

import { listAllBlogsRequest } from "@/request/blog";
import { Blog } from "@/type/Blog";
import { Space, Table } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const deleteOnclick = () => {
    console.log("delete");
  };

  const editOnclick = () => {
    console.log("edit");
  };

  useEffect(() => {
    listAllBlogsRequest().then((data: Blog[]) => {
      data.forEach((blog) => {
        blog.createTime = new Date(blog.createTime);
      });
      console.log(data);
      setBlogs(data);
    });
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Create Time",
      dataIndex: "createTime",
      render(date: Date) {
        return date.toLocaleString();
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link href={`blogs-create?blog=${record.uri}`} onClick={editOnclick}>
            Edit
          </Link>
          <a onClick={deleteOnclick}>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={blogs} />;
}
