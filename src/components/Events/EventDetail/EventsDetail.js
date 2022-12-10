import React from "react";
import { useParams } from "react-router-dom";
const EventDetail = ({ data }) => {
  const { eventId } = useParams();
  const events = data.filter((events) => events.eventId === eventId);
  const currentEvent = events[0];
  return (
    <div>
      <div>
        <h2>{currentEvent.title}</h2>
      </div>
      <p>{currentEvent.description}</p>
    </div>
  );
};

export default EventDetail;
