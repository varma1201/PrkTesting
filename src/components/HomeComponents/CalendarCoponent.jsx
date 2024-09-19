import "../../styles/HomePage.css";
import { IoCalendarClear } from "react-icons/io5";
import { addDays, format } from "date-fns";
import { useEffect, useRef, useState, React } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoArrowUpSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import NoEvents from "../../assets/Calendar-bro 1.svg";
import MiniCalendar from "../MiniCalendar";
import CustomCursor from "../CustomCursor";
import { useNavigate } from "react-router-dom";
// import CustomCursor from "../CustomCursor";

const slides = [
  {
    date: "02",
    month: "Sep",
    events: [
      {
        text: "Slide 1 Text",
        date: "2024-08-05",
        title: "Advance Catering",
        des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta",
        time: "Time - 9:00 AM to 10:00 AM.",
        location:
          "Location A-7, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032 ",
        image:
          "https://plus.unsplash.com/premium_photo-1723300354426-e8c90954f6d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "Slide 2 Text",
        title: "Slide 2 Title",
        des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta",
        time: "Time - 11:00 AM to 12:00 PM.",
        location:
          "Location A-7, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032 ",
        image:
          "https://images.unsplash.com/photo-1723766700475-3f8f1d3c0c1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    date: "06",
    month: "Sep",
    events: [
      {
        text: "Slide 1 Text",
        date: "2024-08-05",
        title: "Advance Catering",
        des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta",
        time: "Time - 9:00 AM to 10:00 AM.",
        location:
          "Location A-7, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032 ",
        image:
          "https://plus.unsplash.com/premium_photo-1723300354426-e8c90954f6d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "Slide 2 Text",
        title: "Slide 2 Title",
        des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta",
        time: "Time - 11:00 AM to 12:00 PM.",
        location:
          "Location A-7, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032 ",
        image:
          "https://images.unsplash.com/photo-1723766700475-3f8f1d3c0c1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

function CalendarCoponent() {
  const navigate = useNavigate();
  const [switchOpen, setOpen] = useState(true);
  const [showMiniCal, setShowMiniCal] = useState(false);
  const closeCal = () => {
    setShowMiniCal(false);
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevClick = () => {
    setCurrentDate(addDays(currentDate, -5));
  };

  const handleNextClick = () => {
    setCurrentDate(addDays(currentDate, 5));
  };

  const generateDateArray = (startDate) => {
    const dateArray = [];
    for (let i = 0; i < 5; i++) {
      const date = addDays(startDate, i);
      dateArray.push({
        date: format(date, "dd"),
        month: format(date, "MMM"),
      });
    }
    return dateArray;
  };

  const dates = generateDateArray(currentDate);
  const [todayDate, setTodayDate] = useState(format(new Date(), "dd"));
  const [thisMonth, setThisMonth] = useState(format(new Date(), "MMM"));

  const handleSetTodayDate = (value) => {
    setTodayDate(value);
  };
  const handleSetThisMonth = (value) => {
    setThisMonth(value);
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const [position, setPosition] = useState(0);
  const controls = useAnimation();

  const nextSlide = () => {
    setPosition((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setPosition((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const filteredSlides = slides.filter(
    (slide) => slide.date === todayDate && slide.month === thisMonth
  );

  const [activeIndex, setActiveIndex] = useState(0); // Track which card is in view
  const eventRefs = useRef([]); // Store refs to all event cards

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = eventRefs.current.indexOf(entry.target);
            setActiveIndex(index); // Set the active index when the card is in view
          }
        });
      },
      {
        root: null, // null means the viewport
        threshold: 0.5, // 50% of the card must be in view to consider it visible
      }
    );

    // Observe all event cards
    eventRefs.current.forEach((event) => {
      if (event) observer.observe(event);
    });

    return () => {
      // Clean up observer on unmount
      eventRefs.current.forEach((event) => {
        if (event) observer.unobserve(event);
      });
    };
  }, []);

  // Scroll to the selected event on dot click
  const handleDotClick = (index) => {
    eventRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  //curser styles
  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <div className="home-component-container">
      <div className="switch-dates-Container">
        <div className="calendar-switch-holder">
          <div className="calendar-switch-container">
            <div
              className={
                switchOpen ? "calendar-switch-active" : "calendar-switch"
              }
              onClick={() => setOpen(true)}
            >
              Open Calendar
            </div>
            <div
              className={
                switchOpen ? "calendar-switch" : "calendar-switch-active"
              }
              onClick={() => setOpen(false)}
            >
              Close Calendar
            </div>
          </div>
        </div>
        <div className="mobile-home-cal">
          <div style={{ position: "relative" }} className="pointer">
            <IoCalendarClear
              color="#625EC8"
              onClick={() => setShowMiniCal(!showMiniCal)}
            />
            {showMiniCal && (
              <div className="cal-chart-container">
                <MiniCalendar
                  handleSetThisMonth={handleSetThisMonth}
                  handleSetTodayDate={handleSetTodayDate}
                  closeCal={closeCal}
                />
              </div>
            )}
          </div>
        </div>
        <div className="dates-calendar-container">
          <div className="calender-dates-holder">
            <IoIosArrowBack
              onClick={handlePrevClick}
              color="#625EC8"
              className="pointer"
            />
            <div
              style={{
                display: "flex",
                columnGap: "1rem",
                // justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {dates.map((date, index) => (
                <div
                  key={index}
                  className="date-container pointer"
                  style={
                    todayDate == date.date
                      ? { backgroundColor: "#F3F2FF" }
                      : { backgroundColor: "#FFF" }
                  }
                  // style={{ backgroundColor: "#F3F2FF" }}
                >
                  {/* {console.log(date)} */}
                  <div
                    className="calendar-date-text"
                    style={
                      todayDate == date.date
                        ? {
                            // fontSize: "20px",
                            fontFamily: "ClashDisplayMedium",
                            color: "#625EC8",
                          }
                        : {
                            // fontSize: "20px",
                            fontFamily: "ClashDisplayMedium",
                            color: "#8DA0B1",
                          }
                    }
                    onClick={() => {
                      setTodayDate(date.date);
                      setThisMonth(date.month);
                      console.log(todayDate);
                      console.log(thisMonth);
                    }}
                  >
                    {date.date}
                  </div>
                  {todayDate == date.date && (
                    <div className="calendar-day-text">{date.month}</div>
                  )}
                </div>
              ))}
            </div>
            <IoIosArrowForward
              className="pointer"
              onClick={handleNextClick}
              color="#625EC8"
              // style={{ fontSize: "30px" }}
            />

            <div style={{ position: "relative" }} className="pointer">
              <IoCalendarClear
                color="#625EC8"
                onClick={() => setShowMiniCal(!showMiniCal)}
              />
              {showMiniCal && (
                <div className="cal-chart-container">
                  <MiniCalendar
                    handleSetThisMonth={handleSetThisMonth}
                    handleSetTodayDate={handleSetTodayDate}
                    closeCal={closeCal}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {filteredSlides.length > 0 ? (
        <>
          {filteredSlides.map((eachslide, i) => (
            <>
              <div
                key={i}
                className="event-details-container mobile-tab-hidden"
              >
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeUpVariants}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="event-text-holder"
                >
                  <motion.div className="text" animate={controls}>
                    {/* {slides[position].text} */}
                    <div>
                      <h2>{eachslide.events[position].title}</h2>
                      <p style={{ width: "90%" }}>
                        {eachslide.events[position].des}
                      </p>
                      <p style={{ fontFamily: "RalewaySemiBold" }}>
                        {eachslide.events[position].time}
                      </p>
                      <p style={{ fontFamily: "RalewaySemiBold" }}>
                        {eachslide.events[position].location}
                      </p>
                      <div
                        className="learn-more-container"
                        onClick={() => {
                          window.scrollTo(0, 0);
                          navigate("/single-event");
                        }}
                      >
                        <div className="learn-more-btn">Learn More</div>
                        <div className="learn-more-arr-container">
                          <IoArrowUpSharp className="learn-more-arr" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                <div className="event-img-holder">
                  <div className="carousel">
                    <button className="nav-button prev" onClick={prevSlide}>
                      <FaArrowLeftLong color="#fff" />
                    </button>
                    <div
                      // className="carousel-image-holder"
                      style={{ maxWidth: "100%" }}
                      onMouseEnter={() => setCursorVisible(true)}
                      onMouseLeave={() => setCursorVisible(false)}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        navigate("/single-event");
                      }}
                      className={`carousel-image-holder hover-component ${
                        cursorVisible ? "hide-default-cursor" : ""
                      }`}
                    >
                      {" "}
                      <CustomCursor
                        isVisible={cursorVisible}
                        text={"Learn more"}
                      />
                      <img
                        src={eachslide.events[position].image}
                        alt={`Slide ${position + 1}`}
                        loading="lazy"
                      />
                    </div>
                    <button className="nav-button next" onClick={nextSlide}>
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
                <div className="home-cal-dot-container">
                  {eachslide.events.map((_, m) => (
                    <div
                      key={m}
                      className={
                        position === m
                          ? "home-cal-dots-active"
                          : "home-cal-dots"
                      }
                      onClick={() => setPosition(m)}
                    ></div>
                  ))}
                </div>
              </div>
            </>
          ))}
          {filteredSlides.map((eachSlide, j) => (
            <div key={j} style={{ position: "relative" }}>
              <div className="home-event-card-container-mob">
                {eachSlide.events.map((eachEvent, k) => (
                  <div
                    key={k}
                    className="home-cal-mob"
                    ref={(el) => (eventRefs.current[k] = el)} // Store ref for each event
                  >
                    <div className="event-text-holder">
                      <div className="text">
                        <div>
                          <h2>{eachEvent.title}</h2>
                          <p style={{ width: "90%" }}>{eachEvent.des}</p>
                          <p style={{ fontFamily: "RalewaySemiBold" }}>
                            {eachEvent.time}
                          </p>
                          <p style={{ fontFamily: "RalewaySemiBold" }}>
                            {eachEvent.location}
                          </p>
                          <div
                            className="learn-more-container"
                            onClick={() => {
                              window.scrollTo(0, 0);
                              navigate("/single-event");
                            }}
                          >
                            <div className="learn-more-btn">Learn More</div>
                            <div className="learn-more-arr-container">
                              <IoArrowUpSharp className="learn-more-arr" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="event-img-holder">
                      <div className="carousel">
                        <div
                          className="carousel-image-holder"
                          style={{ maxWidth: "100%" }}
                        >
                          <img
                            src={eachEvent.image}
                            alt={`Slide ${k + 1}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="home-mob-cal-dots-container">
                {eachSlide.events.map((_, m) => (
                  <div
                    key={m}
                    className={`home-mob-cal-dots ${
                      activeIndex === m ? "active" : ""
                    }`}
                    onClick={() => handleDotClick(m)}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="event-details-container">
          <div className="event-text-holder">
            {/* {slides[position].text} */}
            <div className="home-cal-noEvent">No Events</div>
          </div>
          <div className="event-img-holder">
            <div className="carousel">
              <div
                className="carousel-image-holder"
                style={{ maxWidth: "100%" }}
              >
                <img
                  src={NoEvents}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarCoponent;
