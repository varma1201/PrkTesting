import "../../styles/Events.css";
import { FaCalendar } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoArrowUpSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState, React } from "react";
import MiniCalendar from "../MiniCalendar";
import CustomCursor from "../CustomCursor";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const data = [
  { title: "International Culinary Symposium", date: "26/07/2024" },
  { title: "International Culinary Symposium", date: "26/07/2024" },
  { title: "International Culinary Symposium", date: "26/07/2024" },
  { title: "International Culinary Symposium", date: "26/07/2024" },
  { title: "International Culinary Symposium", date: "26/07/2024" },
  { title: "International Culinary Symposium", date: "26/07/2024" },
];

function EventCalendar() {
  const navigate = useNavigate();
  const [switchOpen, setOpen] = useState(true);
  const [showMiniCal, setShowMiniCal] = useState(false);

  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <div className="event-calendar-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 0rem",
        }}
      >
        <div className="event-page-calendar-switch">
          <div
            className={
              switchOpen
                ? "event-calender-switch-active"
                : "event-page-calendar-switch-item"
            }
            onClick={() => setOpen(true)}
          >
            Open Calendar
          </div>
          <div
            className={
              switchOpen
                ? "event-page-calendar-switch-item"
                : "event-calender-switch-active"
            }
            onClick={() => setOpen(false)}
          >
            Close Calendar
          </div>
        </div>
        <div className="event-page-calendar-icon-container">
          <div className="event-page-calendar-inp-container">
            <CiSearch />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              style={{ height: "80%", border: "none", outline: "none" }}
            />
          </div>
          <div className="event-page-calendar-icon">
            <FaCalendar
              color="#fff"
              // onClick={() => setShowMiniCal(!showMiniCal)}
            />
            {showMiniCal && (
              <div className="cal-chart-container">
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider> */}
                <MiniCalendar />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="event-line-seperator" />
      <div className="event-calendar-card-container">
        {data.map((event, index) => (
          <div key={index} className="event-calendar-card">
            <div
              style={{ width: "100%" }}
              className={`event-cal-card-img-container hover-component ${
                cursorVisible ? "hide-default-cursor" : ""
              }`}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              onClick={() => {
                navigate("/single-event");
                scrollTo(0, 0);
              }}
            >
              <CustomCursor isVisible={cursorVisible} text={"View Event"} />
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
                // alignItems: "center",
                margin: "1rem 0rem",
              }}
              onClick={() => {
                navigate("/single-event");
                window.scrollTo(0, 0);
              }}
            >
              <div>
                <div className="event-calendar-heading">{event.title}</div>
                <div className="event-calendar-date">{event.date}</div>
              </div>
              <div>
                <div className="learn-more-arr-container">
                  <IoArrowUpSharp className="learn-more-arr" />
                </div>
              </div>
            </div>
            <div className="event-line-seperator" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalendar;
