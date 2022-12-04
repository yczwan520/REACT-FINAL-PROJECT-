// import React, { useState } from "react";
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import "./App.css";
// import EventsPage from "./components/Events/EventsPage";
// import { Layout, Menu } from "antd";
// const { Header, Sider, Content } = Layout;
// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   return (
//     <div className="container">
//       <Layout>
//         <Sider trigger={null} collapsible collapsed={collapsed}>
//           <div className="logo" />
//           <Menu
//             theme="dark"
//             mode="inline"
//             defaultSelectedKeys={["1"]}
//             items={[
//               {
//                 key: "1",
//                 icon: <UserOutlined />,
//                 label: "Events",
//               },
//               {
//                 key: "2",
//                 icon: <VideoCameraOutlined />,
//                 label: "Create Event",
//               },
//               {
//                 key: "3",
//                 icon: <UploadOutlined />,
//                 label: "Profile",
//               },
//             ]}
//           />
//         </Sider>
//         <Layout className="site-layout">
//           <Header
//             className="site-layout-background"
//             style={{
//               padding: 0,
//             }}
//           >
//             {React.createElement(
//               collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
//               {
//                 className: "trigger",
//                 onClick: () => setCollapsed(!collapsed),
//               }
//             )}
//           </Header>
//           <Content
//             className="site-layout-background"
//             style={{
//               margin: "24px 16px",
//               padding: 24,
//               minHeight: 280,
//             }}
//           >
//             <EventsPage />
//           </Content>
//         </Layout>
//       </Layout>
//     </div>
//   );
// };
// export default App;

import React from "react";
import PageLayout from "./components/PageLayout";

const App = () => {
  return (
    <div className="App">
      <PageLayout />
    </div>
  );
};

export default App;
