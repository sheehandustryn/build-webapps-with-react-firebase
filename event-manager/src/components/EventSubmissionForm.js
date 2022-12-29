import { useState, React } from "react";

import "./EventSubmissionForm.css";

export default function NewEventForm({
  addEvent,
  setShowEventSubmissionModal,
}) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("manchester");

  const resetEventSubmissionForm = () => {
    setEventName("");
    setEventDate("");
  };

  const handleEventSubmissionFormSubmit = (e) => {
    e.preventDefault();

    const event = {
      eventName: eventName,
      eventDate: eventDate,
      eventLocation: eventLocation,
      eventId: Math.floor(Math.random() * 10000),
    };

    addEvent(event);
    resetEventSubmissionForm();
    setShowEventSubmissionModal(false);
  };

  return (
    <form
      className="event-submission-form"
      onSubmit={handleEventSubmissionFormSubmit}
    >
      <label>
        <span>Name:</span>
        <input
          type="text"
          onChange={(e) => setEventName(e.target.value)}
          value={eventName}
        />
      </label>
      <label>
        <span>Date:</span>
        <input
          type="date"
          onChange={(e) => setEventDate(e.target.value)}
          value={eventDate}
        />
      </label>
      <label>
        <span>Location:</span>
        <select onChange={(e) => setEventLocation(e.target.value)}>
          <option value="manchester">Manchester</option>
          <option value="london">London</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
