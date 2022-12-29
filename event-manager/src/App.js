import { useState, React } from "react";
import EventList from "./components/EventList";
import EventSubmissionForm from "./components/EventSubmissionForm";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";

import "./App.css";

export default function App() {
  const appTitle = "Events Manager";

  const [showEventSubmissionModal, setShowEventSubmissionModal] =
    useState(false);

  const [events, setEvents] = useState([
    {
      eventDate: "01/01/2023",
      eventId: 1,
      eventLocation: "manchester",
      eventName: "Mario's Birthday Bash",
    },
    {
      eventDate: "01/02/2023",
      eventId: 2,
      eventLocation: "online",
      eventName: "Bowser's Live Stream",
    },
    {
      eventDate: "01/03/2023",
      eventId: 3,
      eventLocation: "cardiff",
      eventName: "Race on Moo Moo Farm",
    },
  ]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
  };

  const handleDeleteEventClick = (eventId) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return eventId !== event.eventId;
      });
    });
  };

  return (
    <div className="App">
      <NavBar>
        <div className="navbar-title">Events Manager</div>
        <div className="navbar-button">
          <button onClick={() => setShowEventSubmissionModal(true)}>
            Add Event
          </button>
        </div>
      </NavBar>
      <EventList
        events={events}
        handleDeleteEventClick={handleDeleteEventClick}
      />

      {showEventSubmissionModal && (
        <Modal setShowEventSubmissionModal={setShowEventSubmissionModal}>
          <EventSubmissionForm
            addEvent={addEvent}
            setShowEventSubmissionModal={setShowEventSubmissionModal}
          />
        </Modal>
      )}
    </div>
  );
}
