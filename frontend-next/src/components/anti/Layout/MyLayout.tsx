import { theme } from "antd";
import Layout from "antd/es/layout/layout";

export const MyLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  console.log(colorBgContainer);
  return <Layout style={{ background: colorBgContainer }}>{children}</Layout>;
};
