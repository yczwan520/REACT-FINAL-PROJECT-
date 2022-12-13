import React from "react";
import "./EventsPage.css";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import { EventsPage, HostsPage } from "../../Api/EventsApi";
import { useState, useEffect } from "react";
import { Calendar } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const Events = (props) => {
  // const [data, setData] = useState("");
  const [date, setDate] = useState("");
  // const [host, setHost] = useState("");

  const handleDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  // const fetchEvents = async () => {
  //   try {
  //     const data = await EventsPage();
  //     setData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchHost = async () => {
  //   try {
  //     const host = await HostsPage();
  //     setHost(host);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchEvents();
  //   fetchHost();
  // }, []);
  const data = props.data;
  const host = props.host;
  const allData = Array.from({
    length: data.length,
  }).map((_, i) => ({
    title: data[i].title,
    avatar: host[0].photoUrl,
    content: data[i].description,
    eventId: data[i].eventId,
  }));
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div class="events_container">
      <List
        className="list"
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={allData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]} //点赞截图
            extra={<img width={272} alt="logo" src="/images/travel.jpg" />} //右边照片
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<Link to={`/events/${item.eventId}`}>{item.title}</Link>}
              description={item.description}
            />
            {item.content}
          </List.Item> //标题，描述和内容
        )}
      />
      <Calendar
        className="calendar"
        fullscreen={false}
        onChange={handleDateChange}
        onPanelChange={(date, mode) => {
          console.log(date, mode);
        }}
      />
    </div>
  );
};
export default Events;
