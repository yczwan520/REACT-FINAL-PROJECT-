import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, List, Divider, Space, Button, Collapse } from "antd";
import moment from "moment";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

const { Panel } = Collapse;
const EventDetail = (props) => {
  const { eventId } = useParams();
  const events = props.data.filter((events) => events.eventId === eventId);
  const hosts = props.host.filter((hosts) => hosts.eventId === eventId);
  const currentEvent = events[0];
  const currentHost = hosts[0];
  const currentComment = events[0].comments;

  const onChange = (key) => {
    console.log(key);
  };
  const commnetData = Array.from({
    length: currentComment.length,
  }).map((_, i) => ({
    // href: 'https://ant.design',
    title: currentComment[i].name,
    avatar: currentComment[i].photoURL,
    description: currentComment[i].comment,
  }));
  // console.log(currentComment[0].photoURL);

  return (
    <div>
      <Space
        direction="vertical"
        size="small"
        style={{
          display: "flex",
        }}
      >
        <div>
          <h2>{currentEvent.title}</h2>
          <p> {moment(currentEvent.date).format("LLL")}</p>
          <Divider />
          <p>Hosted by {currentHost.name}</p>
          <Space wrap>
            <Button type="primary">JION THIS EVENT</Button>
            <Button type="primary">RATE THIS EVENT</Button>
          </Space>
        </div>
        <Divider />
        <div>
          <p>{currentEvent.description}</p>
          <Divider />
          <p> {moment(currentEvent.date).format("LLL")}</p>
          <Divider />
          <Collapse defaultActiveKey={["1"]} onChange={onChange}>
            <Panel
              showArrow={false}
              header={
                <div>
                  <p>{currentEvent.venue}</p>
                  <Button type="primary">Hide MAP</Button>
                </div>
              }
              key="2"
            >
              <p>fdfdfdf</p>
            </Panel>
          </Collapse>
          <Divider />
          {/* <div>
            const MapWithAMarker = withGoogleMap(props =>
            <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
              <Marker position={{ lat: -34.397, lng: 150.644 }} />
            </GoogleMap>
            );
            <MapWithAMarker
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div> */}
        </div>
        <div>
          <p>Chat about this event</p>
          <Divider />
          <p>{currentEvent.comments.length} comments</p>
        </div>
        <div>
          <List
            itemLayout="vertical"
            size="small"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 4,
            }}
            dataSource={commnetData}
            renderItem={(item) => (
              <List.Item key={item.title}>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </Space>
    </div>
  );
};

export default EventDetail;
