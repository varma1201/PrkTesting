import EventCalendar from "../components/EventComponents/EventCalendar";
import EventHeroComponent from "../components/EventComponents/EventHeroComponent";
import "../styles/Events.css";
import React from "react";

function EventPage() {
  return (
    <div>
      <div>
        <EventHeroComponent />
      </div>
      <div>
        <EventCalendar />
      </div>
    </div>
  );
}

export default EventPage;
