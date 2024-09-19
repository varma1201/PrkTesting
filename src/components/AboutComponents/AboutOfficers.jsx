import "../../styles/About.css";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, React } from "react";
import CustomCursor from "../CustomCursor";
import ofr1 from "../../assets/off1.png";
import ofr2 from "../../assets/off2.png";
import ofr3 from "../../assets/off3.png";
import ofr4 from "../../assets/off4.png";
import ofr5 from "../../assets/off5.png";

const officerData = [
  {
    name: "Ms Kartika",
    des: "General Manager",
    image: ofr1,
  },
  {
    name: "Ms Dhivya Baskaran",
    des: "Training Head",
    image: ofr2,
  },
  {
    name: "Ms Sandhya",
    des: "Regional Manager Marketing",
    image: ofr3,
  },
  {
    name: "Ms Meena",
    des: "Zonal Head Operations",
    image: ofr4,
  },
  {
    name: "Ms Naren",
    des: "Marketing and Business Relationship Manager.",
    image: ofr5,
  },
];

function AboutOfficers() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [hoverText, setHoverText] = useState("");

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <div className="about-officers-container">
      <div className="about-officer-title">Our Officers</div>
      <motion.p
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.8 }}
        className="about-officer-heading"
      >
        Committed to Excellence in Every Duty
      </motion.p>
      <div className="about-officer-card-container">
        {officerData.map((officer, index) => (
          <div className="about-officer-block" key={index}>
            <div
              // className="about-officer-image-container"
              className={`about-officer-image-container hover-component ${
                cursorVisible ? "hide-default-cursor" : ""
              }`}
              // className="hover-component"
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
            >
              <CustomCursor isVisible={cursorVisible} text={"View Profile"} />
              <img
                src={officer.image}
                alt="officer image"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="about-officer-text-container">
              <div>
                <div className="about-officer-name">{officer.name}</div>
                <div>{officer.des}</div>
              </div>
              <div>
                <FaLinkedin style={{ color: "#625EC8", fontSize: "1.75rem" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutOfficers;
