import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Select, Upload, UploadFile } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { useQueries } from "react-query";
import { createBlog, listCategories, listTags } from "../../api/Request";
import { BlogDto } from "../../api/openapi";
import MarkDown from "../../componments/Markdown/Markdown";
const dateFormat = "YYYY/MM/DD";

const cateFetch = async () => {
  const res = await listCategories();
  return res;
};

const tagFetch = async () => {
  const res = await listTags();
  return res;
};

export default function NewBlog() {
  const [title, setTitle] = useState(""); // title
  const [uri, setUri] = useState(""); // uri

  const [content, setContent] = useState(""); // mrakdown content
  const [tags, setTags] = useState<number[]>(); // tags init onload
  const [catagory, setCatagory] = useState<number>(); // catagory init onload
  const [upImages, setImages] = useState<UploadFile<any>[]>([]); // images
  const [commontable, setCommontable] = useState(false); // commontable
  const [published, setPublished] = useState(false); // published

  const [cateQuery, tagQuery] = useQueries([
    {
      queryKey: "cate",
      queryFn: cateFetch,
    },
    {
      queryKey: "tag",
      queryFn: tagFetch,
    },
  ]);

  if (cateQuery.isLoading || tagQuery.isLoading) {
    return <div>loading</div>;
  }

  if (cateQuery.isError || tagQuery.isError) {
    return <div>error</div>;
  }
  const cateData = cateQuery.data;
  const tagData = tagQuery.data;
  const submit = async () => {
    const blog: BlogDto = {
      title: title,
      uri: uri,
      categorie: catagory,
      tags: tags,
      createTime: dayjs().toDate(),
    };

    const markdown: Blob = new Blob([content], { type: "text/markdown" });
    const images: Blob[] = upImages.map((item) => item.originFileObj as Blob);

    const success = await createBlog({ blog, markdown, images });

    if (success) {
      console.log("success");
    }
  };
  return (
    <div>
      <Input
        addonBefore="Title"
        placeholder="title of blog"
        onChange={(value) => setTitle(value.target.value)}
      />
      <Input
        addonBefore="Uri"
        placeholder="uri"
        onChange={(value) => setUri(value.target.value)}
      />
      <Input addonBefore="Date" defaultValue={dayjs().toISOString()} disabled />
      <Select
        style={{ width: "100%" }}
        placeholder="Catagory"
        options={cateData?.map((item) => ({
          label: item.name,
          value: item.id,
        }))}
        onChange={(value) => setCatagory(value)}
      />
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Tags"
        options={tagData?.map((item) => ({
          label: item.name,
          value: item.id,
        }))}
        onChange={(value) => {
          setTags(value);
        }}
      />

      <Checkbox onChange={(value) => setCommontable(value.target.value)}>
        Commontable
      </Checkbox>
      <Checkbox onChange={(value) => setPublished(value.target.value)}>
        Published
      </Checkbox>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Input.TextArea
            rows={4}
            onChange={(value) => setContent(value.target.textContent || "")}
          />
        </div>
        <div style={{ width: "50%", border: 10 }}>
          <MarkDown>{content}</MarkDown>
        </div>
      </div>
      <Upload
        beforeUpload={() => false}
        multiple
        action={""}
        onChange={(value) => setImages(value.fileList)}
      >
        <Button icon={<UploadOutlined />}>Upload Directory</Button>
      </Upload>
      <Button type="primary" onClick={submit}>
        Save
      </Button>
    </div>
  );
}
