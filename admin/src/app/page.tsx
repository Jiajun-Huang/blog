"use client";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { loginRequest } from "../request/login";

export default function Login() {
  const router = useRouter();

  const onSubmit = async (values: any) => {
    const { username, password } = values;
    const res = await loginRequest(username, password);
    console.log(res);
    if (res !== null) {
      router.push("/admin/home");
    }
  };

  return (
    <main>
      <div>
        <h1>Admin Login</h1>
        <Form onFinish={onSubmit}>
          <Form.Item rules={[{ required: true }]} name="username">
            <Input
              size="large"
              placeholder="large size"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="password">
            <Input
              size="large"
              placeholder="default size"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onSubmit={onSubmit}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
}
