import { Button, Card, Space, Tag } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { listBlogs } from "../../api/Request";

const fetchBlog = async () => {
  const res = await listBlogs();

  const data = res.map((item) => ({
    key: item.id,
    title: item.title,
    crateTime: item.createTime,
    catagory: item.categorie?.name ?? "",
    tags: item.tags
      ? item.tags.filter((tag) => tag.name).map((tag) => tag.name as string)
      : [""],
  }));

  return data;
};

type DataType = {
  key: React.Key;
  title: string | undefined;
  crateTime: Date | undefined;
  catagory: string | undefined;
  tags: string[] | undefined;
};

const columns: ColumnsType<DataType> = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Crate Time",
    dataIndex: "crateTime",
    key: "createTime",
    render: (date: Date) => new Date(date).toLocaleDateString(),
  },
  {
    title: "Catagory",
    dataIndex: "catagory",
    key: "catagory",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags?.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const ViewBlog = () => {
  const { data, status } = useQuery("blog", fetchBlog);
  const navagate = useNavigate();

  const onClick = () => {
    navagate("/blog/create");
  };

  console.log(data);
  if (status === "loading") {
    return <div>loading...</div>;
  }

  return (
    <>
      <Card onClick={onClick}>
        {" "}
        <Button type="primary">Crate new</Button>
      </Card>
      <Table columns={columns} dataSource={data} />;
    </>
  );
};

export default ViewBlog;
