import { IoArrowUpSharp } from "react-icons/io5";
import "../../styles/Events.css";
import { useState, React } from "react";
import CustomCursor from "../CustomCursor";
import { useNavigate } from "react-router-dom";
const data = [
  { title: "International Culinary Symposium", date: "26/07/2024" },
  { title: "International Culinary Symposium", date: "26/07/2024" },
  { title: "International Culinary Symposium", date: "26/07/2024" },
  { title: "International Culinary Symposium", date: "26/07/2024" },
  { title: "International Culinary Symposium", date: "26/07/2024" },
  { title: "International Culinary Symposium", date: "26/07/2024" },
];

function SingleEventComponent() {
  const [cursorVisible, setCursorVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="more-event-container">
      <div className="event-title">More Events</div>
      <div className="more-events-card-container">
        {data.map((event, index) => (
          <div key={index} className="event-calendar-card">
            <div
              className={`event-cal-card-img-container hover-component ${
                cursorVisible ? "hide-default-cursor" : ""
              }`}
              style={{ width: "100%" }}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              onClick={() => {
                navigate("/single-event");
                scrollTo(0, 0);
              }}
            >
              <CustomCursor isVisible={cursorVisible} text={"Know more"} />
              <img
                src="https://images.unsplash.com/photo-1719937206098-236a481a2b6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"
                alt="event image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem 0rem",
              }}
            >
              <div>
                <div className="event-calendar-heading">{event.title}</div>
                <div className="event-calendar-date">{event.date}</div>
              </div>
              <div className="learn-more-arr-container">
                <IoArrowUpSharp className="learn-more-arr" />
              </div>
            </div>
            <div className="event-line-seperator" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleEventComponent;
