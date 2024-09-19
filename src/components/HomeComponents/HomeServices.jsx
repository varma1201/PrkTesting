import "../../styles/HomePage.css";
import ServiceImg from "../../assets/homeServiceImg.png";
import { useTransform, useViewportScroll, motion } from "framer-motion";
import { IoArrowUpSharp } from "react-icons/io5";
import { useState, useEffect, React } from "react";
import CustomCursor from "../CustomCursor";
import { useNavigate } from "react-router-dom";

const ServiceData = [
  {
    title: "Training",
    path: "/services/training",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non mauris purus",
    img: ServiceImg,
  },
  {
    title: "Testing",
    path: "/services/testing",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non mauris purus",
    img: ServiceImg,
  },
  {
    title: "Hygiene Monitoring Service",
    path: "/services/audit",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non mauris purus",
    img: ServiceImg,
  },
  {
    title: "Consulting",
    path: "/services/consulting",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non mauris purus",
    img: ServiceImg,
  },
];

function HomeServices() {
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();

  // Custom cursor state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [hoverText, setHoverText] = useState("");

  const yTransform = useTransform(scrollY, [0, 500], [0, -100]); // Adjust scroll range

  // Track mouse movement for the custom cursor
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <>
      {/* Services Section */}
      <div className="home-component-container">
        <div
          className="home-service-heading"
          style={{
            position: "relative",
            // zIndex: 9999,
            // top: "0",
            padding: "5rem 0rem",
            // backgroundColor: "#fff",
          }}
        >
          Our Services
        </div>
        {ServiceData.map((eachService, i) => (
          <div className="home-service-block" key={i}>
            <motion.div
              className={
                // i > 0
                "home-service-text-container home-serv-tab-mar-top"
              }
              //     : "home-service-text-container"
              // }
              style={{ y: yTransform }} // Sticky text effect
            >
              <div className="home-service-title">{eachService.title}</div>
              <p>{eachService.des}</p>
              <div
                className="learn-more-container"
                onClick={() => {
                  navigate(eachService.path);
                  scrollTo(0, 0);
                }}
              >
                <div className="learn-more-btn">Learn More</div>
                <div className="learn-more-arr-container">
                  <IoArrowUpSharp className="learn-more-arr" />
                </div>
              </div>
            </motion.div>

            {/* Image with hover text change */}
            <div
              // className="home-service-img-container"
              className={`home-service-img-container ${
                cursorVisible ? "hide-default-cursor" : ""
              }`}
              // ref={elementRef}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              onClick={() => {
                navigate(eachService.path);
                scrollTo(0, 0);
              }}
              // onMouseOut={() => setCursorVisible(false)}
            >
              <CustomCursor isVisible={cursorVisible} text={"Know more"} />
              <img
                src={eachService.img}
                alt={eachService.title}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  position: "relative",
                  zIndex: 40,
                }}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeServices;
