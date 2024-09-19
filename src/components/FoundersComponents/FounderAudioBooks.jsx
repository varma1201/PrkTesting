import { useRef, useState, useEffect, React } from "react";
import "../../styles/Founder.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPauseCircleFill } from "react-icons/bs";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import AudioMoniterLogo from "../../assets/audioMonLogo.svg";
import AudioWaveform from "../AudioWaveform";
import CustomCursor from "../CustomCursor";

const audioData = [
  {
    title: "Food Testing Importance",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
    audioUrl:
      "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
  },
  {
    title: "Food Testing Importance 2",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
    audioUrl:
      "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
  },
  {
    title: "Food Testing Importance 3",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
    audioUrl:
      "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
  },
  {
    title: "Food Testing Importance 4",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
    audioUrl:
      "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
  },
];

function FounderAudioBooks() {
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  // const audioUrl =
  //   "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  // for carousel

  const [activeIndex, setActiveIndex] = useState(0); // Track which card is in view
  const eventRefs = useRef([]); // Store refs to all event cards

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
      const prevItem = eventRefs.current[activeIndex - 1];

      const container = document.querySelector(".founder-audio-book-container");
      const containerWidth = container.clientWidth;
      const itemWidth = prevItem.clientWidth;
      const offsetLeft = prevItem.offsetLeft;

      // Scroll the container so that the item is in the center
      container.scrollTo({
        left: offsetLeft - containerWidth / 2 + itemWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (activeIndex < audioData.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
      const nextItem = eventRefs.current[activeIndex + 1];

      const container = document.querySelector(".founder-audio-book-container");
      const containerWidth = container.clientWidth;
      const itemWidth = nextItem.clientWidth;
      const offsetLeft = nextItem.offsetLeft;

      // Scroll the container so that the item is in the center
      container.scrollTo({
        left: offsetLeft - containerWidth / 2 + itemWidth / 2,
        behavior: "smooth",
      });
    }
  };

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

  const [activeMobIndex, setActiveMobIndex] = useState(0); // Track which card is in view
  const eventMobRefs = useRef([]); // Store refs to all event cards

  const handleMobPrev = () => {
    if (activeMobIndex > 0) {
      setActiveMobIndex((prevIndex) => prevIndex - 1); // Update activeIndex
      eventMobRefs.current[activeMobIndex - 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handleMobNext = () => {
    if (activeMobIndex < audioData.length - 1) {
      setActiveMobIndex((prevIndex) => prevIndex + 1); // Update activeIndex
      eventMobRefs.current[activeMobIndex + 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = eventMobRefs.current.indexOf(entry.target);
            setActiveMobIndex(index); // Set the active index when the card is in view
          }
        });
      },
      {
        root: null, // null means the viewport
        threshold: 0.5, // 50% of the card must be in view to consider it visible
      }
    );

    // Observe all event cards
    eventMobRefs.current.forEach((event) => {
      if (event) observer.observe(event);
    });

    return () => {
      // Clean up observer on unmount
      eventMobRefs.current.forEach((event) => {
        if (event) observer.unobserve(event);
      });
    };
  }, []);

  // Scroll to the selected event on dot click
  const handleDotClick = (index) => {
    setActiveIndex(index); // Set the active index
    eventRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  // audio controls

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // dragging container
  const scrollableDivRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.clientX);
      setScrollLeft(scrollableDivRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        const scrollX = scrollLeft + (startX - e.clientX);
        scrollableDivRef.current.scrollLeft = scrollX;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const container = scrollableDivRef.current;

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <div style={{ padding: "5rem 0rem" }}>
      <div className="founder-audio-control-container">
        <div className="founder-title">{"Founder's Audio Books"}</div>
        <div className="founder-audio-control-monitor">
          <div onClick={handlePrev} className="founder-audio-contro-btn">
            <FaArrowLeftLong color="#625EC8" />
          </div>
          <div onClick={handleNext} className="founder-audio-contro-btn">
            <FaArrowRightLong color="#625EC8" />
          </div>
        </div>
      </div>
      <div
        className="founder-audio-book-container"
        ref={scrollableDivRef}
        onMouseEnter={() => setCursorVisible(true)}
        onMouseLeave={() => setCursorVisible(false)}
        // className={`founder-audio-book-container hover-component ${
        //   cursorVisible ? "hide-default-cursor" : ""
        // }`}
      >
        {/* <CustomCursor isVisible={cursorVisible} text={"Drag"} /> */}
        {audioData.map((data, index) => (
          <div
            key={index}
            ref={(el) => (eventRefs.current[index] = el)}
            // style={{ width: "fit-content" }}
            className="founder-audio-book-item"
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="audiobook-monitor-content-container">
                <div className="audio-book-title" draggable="false">
                  {data.title}
                </div>
                <div className="audio-book-des">{data.des}</div>
              </div>
              <div
                style={{ height: "5rem", width: "1px", background: "#e5e5e5" }}
              ></div>
              <div
                className={`audio-book-play-container ${
                  activeIndex === index ? "scale-active" : ""
                }`}
              >
                <audio
                  ref={audioRef}
                  src="https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
                />
                <div
                  onClick={handlePlayPause}
                  className="audio-book-card-control pointer"
                >
                  {isPlaying ? (
                    <BsPauseCircleFill color="#625EC8" fontSize="30px" />
                  ) : (
                    <FaCirclePlay color="#625EC8" fontSize="30px" />
                  )}
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src={AudioMoniterLogo} alt="audio logo" />
                </div>
                <div className="audio-book-card-time">1:32 mintues</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="audio-carousel-dots">
        {audioData.map((_, idx) => (
          <span
            key={idx}
            className={`audio-dot ${activeIndex === idx ? "audio-active" : ""}`}
            // style={{
            //   backgroundColor: "#000",
            //   width: "10px",
            //   height: "10px",
            //   margin: "2px",
            // }}
            onClick={() => handleDotClick(idx)}
          ></span>
        ))}
      </div>
      <div className="founder-audio-book-container-mobile">
        {audioData.map((data, index) => (
          <div
            ref={(el) => (eventMobRefs.current[index] = el)}
            key={index}
            className="founder-audio-card-mobile"
          >
            <div className="mobile-play-contaier">
              {/* <WaveSurferComponent
                audioUrl={
                  "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
                }
              /> */}
              <AudioWaveform
                blobURL={
                  "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3"
                }
              />
            </div>
            <div>
              <div className="audio-book-title">{data.title}</div>
              <p className="audio-book-des">{data.des}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="founder-audio-control-mob">
        <div onClick={handleMobPrev} className="founder-audio-contro-btn">
          <FaArrowLeftLong color="#625EC8" />
        </div>
        <div onClick={handleMobNext} className="founder-audio-contro-btn">
          <FaArrowRightLong color="#625EC8" />
        </div>
      </div>
    </div>
  );
}

export default FounderAudioBooks;
