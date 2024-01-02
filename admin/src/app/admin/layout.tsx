"use client";

import { User } from "@/generated-sources/openapi";
import { checkLoginRequest } from "@/request/login";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "home", <PieChartOutlined />),
  getItem("Blogs", "blogs", <DesktopOutlined />, [
    getItem("List", "blogs-list"),
    getItem("Create", "blogs-create"),
  ]),
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState<User>();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();

  // check login status if not login go to login page
  useEffect(() => {
    checkLoginRequest().then((data) => {
      console.log(pathname);
      if (data === null) {
        router.replace("/");
      } else {
        setUser(data);
      }
    });
  }, []);

  // go to the page
  const onClick: MenuProps["onClick"] = (e) => {
    const route: string = `/admin/${e.keyPath.reverse().join("/")}`;
    router.replace(route, {
      scroll: false,
    });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ padding: 0, background: colorBgContainer }} />
      <Layout>
        <Layout>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              defaultSelectedKeys={["home"]}
              selectedKeys={pathname.split("/").slice(1)}
              mode="inline"
              items={items}
              onClick={onClick}
            />
          </Sider>
          <Layout>
            <Content style={{ margin: "16px" }}>
              <div
                style={{
                  padding: 24,
                }}
              >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Jiajun Huang</Footer>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
}
