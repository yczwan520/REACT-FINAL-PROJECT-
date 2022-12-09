import React from "react";
import { useParams } from "react-router-dom";
import { Button, Space } from "antd";
const EventDetail = ({ data }) => {
  const { eventId } = useParams();
  const events = data.filter((events) => events.eventId === eventId);
  return (
    <div>
      <div>
        <h3>{events[0].title}</h3>
        <p>{events[0].date}</p>
        <Space wrap>
          <Button type="primary">JION THIS EVENT</Button>
          <Button type="primary">JION RATE THIS EVENT</Button>
        </Space>
      </div>
      <div>
        <p>{events[0].description}</p>
      </div>
      <div>
        <p>{events[0].date}</p>
      </div>
      <div>
      <p>{events[0].venue}</p>
      </div>
    </div>
  );
};

export default EventDetail;
