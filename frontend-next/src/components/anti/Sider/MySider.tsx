import { theme } from "antd";
import Sider from "antd/es/layout/Sider";
import style from "./MySider.module.scss";

export const MySider = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return <Sider>{children}</Sider>;
};
