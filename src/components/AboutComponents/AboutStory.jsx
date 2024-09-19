import "../../styles/About.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import scr1 from "../../assets/abScr1.jpeg";
import scr2 from "../../assets/abscr2.jpeg";
import scr3 from "../../assets/abscr3.jpeg";
import scr4 from "../../assets/abscr4.jpeg";
import scr5 from "../../assets/abscr5.jpeg";
import scr6 from "../../assets/abscr6.jpeg";
import React from "react";

const images = [
  scr2,
  scr3,
  scr1,
  scr4,
  scr5,
  scr6,
  scr2,
  scr3,
  scr1,
  scr4,
  scr5,
  scr6,
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function AboutStory() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="about-story-container">
      <div className="about-story-content-container">
        <div className="about-story-section-title">Our Story</div>
        <div className="about-story-section-heading">
          Empowering Society Through Science
        </div>
        <motion.p
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          PARIKSHAN is an active food safety organisation, led by young
          professionals with extensive wet lab experience. As a one-stop
          solution for all food safety needs, PARIKSHAN offers lab services,
          hygiene monitoring, FSSAI compliance scorecards, ISO 22000/HACCP
          certification guidance, and multi-level food safety training.
          Partnering with hotel federations, restaurant associations, and the
          catering and bakery industry, PARIKSHAN is well-connected with food
          wholesalers and retailers across India. Clients trust PARIKSHAN for
          its integrity, reliability, and NABL-accredited food laboratory
          services. With branches in Bangalore, Hyderabad, Vadodara, Coimbatore,
          Madurai, Trichy, and Cochin, PARIKSHAN is committed to ensuring food
          safety nationwide.
        </motion.p>
      </div>
      <div className="about-story-image-container">
        <div className="marquee-container">
          <ul className="marquee-up">
            {images.map((image, index) => (
              <li key={`up-${index}`} className="item">
                <img
                  src={image}
                  loading="lazy"
                  alt="scroll image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="marquee-container">
          <ul className="marquee-down">
            {images.map((image, index) => (
              <li key={`down-${index}`} className="item">
                <img
                  src={image}
                  alt="scroll image"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutStory;
