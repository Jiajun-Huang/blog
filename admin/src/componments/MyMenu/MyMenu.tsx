import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const items1: MenuProps["items"] = [
  { key: "blog", label: "Blogs" },
  { key: "tag", label: "Tags" },
  { key: "category", label: "Categories" },
];

const MyMenu = () => {
  const navigate = useNavigate();

  const onClick = ({ item, key, keyPath, domEvent }: any) => {
    navigate(`/${key}`);
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
      items={items1}
      onClick={onClick}
    />
  );
};

export default MyMenu;
