import React from "react";

import "./EventList.css";

export default function EventList({ events, handleDeleteEventClick }) {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{event.eventName}</h2>
          <ul>
            <li>Occurs On: {event.eventDate}</li>
            <li>
              Location:{" "}
              {event.eventLocation.charAt(0).toUpperCase() +
                event.eventLocation.slice(1)}
            </li>
          </ul>
          <button onClick={() => handleDeleteEventClick(event.eventId)}>
            Delete Event
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
