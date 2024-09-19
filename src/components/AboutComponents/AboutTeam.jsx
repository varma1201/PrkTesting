import "../../styles/About.css";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, React } from "react";
import CustomCursor from "../CustomCursor";
import TeamMember1 from "../../assets/Saranya.png";
import TeamMember2 from "../../assets/veena.png";
import TeamMember3 from "../../assets/mansi.png";
import TeamMember4 from "../../assets/praveen.png";

const teamData = [
  {
    name: "Ms Saranya Gayathri",
    des: "Managing Director",
    image: TeamMember1,
  },
  {
    name: "Ms Veena Murali",
    des: "Operations Director",
    image: TeamMember2,
  },
  {
    name: "Ms Mansi Thakar",
    des: "Lab Director",
    image: TeamMember3,
  },
  {
    name: "Mr Praveen Andrews",
    des: "Technical Director",
    image: TeamMember4,
  },
];
function AboutTeam() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const [cursorVisible, setCursorVisible] = useState(false);
  return (
    <div className="about-team-container">
      <div className="about-team-title">Our Team</div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="about-team-heading"
      >
        Collaborating for success, committed to excellence.
      </motion.div>
      <div className="about-team-data-container">
        {teamData.map((eachMember, i) => (
          // <div key={i} className="about-team-card">
          //   <div style={{ position: "relative", width: "100%" }}>
          //     <div
          //       className={`about-team-image-container hover-component ${
          //         cursorVisible ? "hide-default-cursor" : ""
          //       }`}
          //       onMouseEnter={() => setCursorVisible(true)}
          //       onMouseLeave={() => setCursorVisible(false)}
          //     >
          //       <CustomCursor isVisible={cursorVisible} text={"View Profile"} />
          //       <img
          //         src={eachMember.image}
          //         alt=""
          //         style={{
          //           width: "100%",
          //           height: "100%",
          //           objectFit: "cover",
          //           borderRadius: "1rem",
          //         }}
          //       />
          //     </div>
          //     <div className="about-team-details">
          //       <div className="about-team-name">{eachMember.name}</div>
          //       <div style={{ color: "#fff" }}>{eachMember.des}</div>
          //       <FaLinkedin className="about-team-icon" />
          //     </div>
          //   </div>
          // </div>
          <div key={i}>
            <div>
              <div
                style={{ position: "relative", width: "100%" }}
                className={`about-team-image-container hover-component ${
                  cursorVisible ? "hide-default-cursor" : ""
                }`}
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
              >
                <CustomCursor isVisible={cursorVisible} text={"View Profile"} />
                <img
                  src={eachMember.image}
                  alt="member image"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
                <div className="about-team-details">
                  <div style={{ padding: "0.5rem" }}>
                    <div className="about-team-name">{eachMember.name}</div>
                    <div style={{ color: "#fff" }}>{eachMember.des}</div>
                  </div>
                  <FaLinkedin className="about-team-icon" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutTeam;
