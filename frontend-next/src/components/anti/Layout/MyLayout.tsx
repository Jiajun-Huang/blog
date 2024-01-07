import { theme } from "antd";
import Layout from "antd/es/layout/layout";

interface MyLayoutProps {
  children: React.ReactNode;
}

export const MyLayout = ({ children }: MyLayoutProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  console.log(colorBgContainer);
  return <Layout style={{ background: colorBgContainer }}>{children}</Layout>;
};
