import React from "react";
import { useParams } from "react-router-dom";
const EventDetail = ({ data }) => {
  const { eventId } = useParams();
  const events = data.filter((events) => events.eventId === eventId);
  return (
    <div>
      <div></div>
      <p>{events[0].description}</p>
    </div>
  );
};

export default EventDetail;
