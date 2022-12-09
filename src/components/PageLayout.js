import React, { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./PageLayout.css";
import Events from "./Events/EventsPage";
import Profile from "./Profile/Profile";
import { Layout, Menu } from "antd";
import { Outlet, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import EventDetail from "./Events/EventDetail/EventsDetail";
const { Header, Sider, Content } = Layout;
const PageLayout = ({ data }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="container">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>Event</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>Create Event</span>
              <Link to="/create" />
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>Profile</span>
              <Link to="/profile" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/" element={<Events />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/events/:eventId"
                element={<EventDetail data={data} />}
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>
      {/* <Outlet /> */}
    </div>
  );
};
export default PageLayout;
