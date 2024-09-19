import { useEffect, useState, React } from "react";
import dayjs from "dayjs";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "../styles/MiniCal.css";

const eventsDates = [
  { date: "02", month: "Sep" },
  { date: "06", month: "Sep" },
];

function MiniCalendar({ handleSetThisMonth, handleSetTodayDate, closeCal }) {
  const [currentDay, setCurrentDay] = useState(dayjs().startOf("day"));
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    generateCalendarDays(currentDay);
  }, [currentDay]);

  const generateCalendarDays = (date) => {
    const startOfMonth = dayjs(date).startOf("month");
    const endOfMonth = dayjs(date).endOf("month");

    const days = [];
    let day = startOfMonth;

    // Add empty slots for days before the start of the month
    for (let i = 0; i < startOfMonth.day(); i++) {
      days.push(null);
    }

    // Loop from the start of the month to the end of the month
    while (day.isBefore(endOfMonth) || day.isSame(endOfMonth, "day")) {
      days.push(day);
      day = day.add(1, "day");
    }

    setCalendarDays(days);
  };

  const handleDayClick = (day) => {
    if (day) setCurrentDay(day);
  };

  const handlePrev = () => {
    setCurrentDay(currentDay.subtract(1, "month"));
  };

  const handleNext = () => {
    setCurrentDay(currentDay.add(1, "month"));
  };

  // Helper function to check if the day has an event
  const hasEvent = (day) => {
    return eventsDates.some(
      (event) =>
        event.date === day.format("DD") && event.month === day.format("MMM")
    );
  };

  return (
    <div className="side-calendar">
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "0.5rem",
            margin: "0.75rem",
            width: "100%",
          }}
        >
          <IoIosArrowBack onClick={handlePrev} />
          <div className="month-label">{currentDay.format("MMMM/YYYY")}</div>
          <IoIosArrowForward onClick={handleNext} />
          <div
            style={{
              position: "absolute",
              right: "15px",
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={closeCal}
          >
            X
          </div>
        </div>
      </div>
      <div className="day-names">
        {["S", "M", "T", "W", "T", "F", "S"].map((dayName, i) => (
          <div key={i} className="day-name">
            {dayName}
          </div>
        ))}
      </div>
      <div className="calendar-days">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${
              day && day.isSame(currentDay, "day") ? "selected-day" : ""
            } ${day && day.isSame(dayjs(), "day") ? "today" : ""}`}
            onClick={() => {
              handleDayClick(day);
              handleSetThisMonth(day.format("MMM"));
              handleSetTodayDate(day.format("DD"));
              closeCal();
            }}
          >
            {day ? day.date() : ""}
            {/* If the day has an event, render a dot */}
            {day && hasEvent(day) && <div className="event-cal-dot"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiniCalendar;
