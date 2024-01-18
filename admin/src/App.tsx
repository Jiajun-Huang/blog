import { Divider, Layout, theme } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MyMenu from "./componments/MyMenu/MyMenu";
import NewBlog from "./page/blog/NewBlog";
import ViewBlog from "./page/blog/ViewBlog";
import ViewCategory from "./page/category/ViewCatagoy";
import ViewTag from "./page/tag/ViewTag";
const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG, colorBgLayout },
  } = theme.useToken();

  return (
    <div
      style={{
        backgroundColor: colorBgLayout,
        borderRadius: borderRadiusLG,
        padding: 10,
      }}
    >
      <Layout>
        <Header style={{ background: colorBgContainer, height: "5vh" }}>
          adsfadsf
        </Header>
        <Divider style={{ margin: 0 }} />
        <Layout>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <MyMenu />
          </Sider>
          <Layout style={{ padding: "0 24px 0px" }}>
            <Content
              style={{
                padding: 24,
                margin: 10,
                height: "98vh",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route path="/blog" element={<ViewBlog />} />
                <Route path="/blog/create" element={<NewBlog />} />
                <Route path="/category" element={<ViewCategory />} />
                <Route path="/tag" element={<ViewTag />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
