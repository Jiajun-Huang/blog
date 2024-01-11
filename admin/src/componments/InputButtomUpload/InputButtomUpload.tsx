import { Button, Input, Space, message } from "antd";
import { useState } from "react";

interface InputProps {
  placeholder: string;
  uploadRequest: (values: string) => Promise<boolean>;
}

const InputButtomUpload = ({ placeholder, uploadRequest }: InputProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [values, setValues] = useState("");
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Successfully uploaded",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "This is an error",
    });
  };

  const onSubmit = () => {
    uploadRequest(values).then((res) => {
      if (res) {
        success();
        window.location.reload();
      } else {
        error();
      }
    });
  };

  return (
    <Space.Compact style={{ width: "100%" }}>
      {contextHolder}
      <Input
        placeholder={placeholder}
        onChange={(values) => setValues(values.target.value)}
      />
      <Button type="primary" onClick={onSubmit}>
        Submit
      </Button>
    </Space.Compact>
  );
};

export default InputButtomUpload;
