import { Popconfirm, Space, Table } from "antd";
import { useQuery } from "react-query";
import { createTag, deleteTag, listTags } from "../../api/Request";
import InputButtomUpload from "../../componments/InputButtomUpload/InputButtomUpload";

const columns = [
  {
    title: "Catetory",
    dataIndex: "name",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Popconfirm
          title="Delete the Tag"
          description="Are you sure to delete this Tag"
          okText="Yes"
          cancelText="No"
          onConfirm={() => removeData(record.name)}
        >
          <a>Delete</a>
        </Popconfirm>
        <a>Edit</a>
      </Space>
    ),
  },
];

const getData = async () => {
  const res = await listTags();
  console.log(res);
  return res;
};

const removeData = (name: string) => {
  const res = deleteTag(name).then((res) => {
    console.log(res);
  });
};

const addData = async (name: string) => {
  const res = await createTag(name);
  return res.raw.ok;
};

const ViewTag = () => {
  const { data, status } = useQuery("blog", getData);

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (status === "error") {
    return <div>error</div>;
  }
  return (
    <div>
      <InputButtomUpload placeholder="add new" uploadRequest={addData} />
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ViewTag;
