import "../../styles/About.css";
import VisionImage1 from "../../assets/visionImg.jpeg";
import VisionImage2 from "../../assets/missionImg.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

function AboutVision() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUpVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="about-vision-container"
    >
      <div className="about-vision-holder1">
        <div className="about-vision-imageContainer-1">
          <img src={VisionImage1} alt="VisionImage1" className="grid-images" />
        </div>
        <div className="about-vision-textContainer-1">
          <div className="about-story-section-title">Our Vision</div>
          <div className="about-vision-heading">
            "Leading the way in innovative food safety solutions for a safer
            world."
          </div>
          <p>
            To be the most trusted and innovative food safety organization in
            India, ensuring the highest standards of food quality and safety
            through expert-driven solutions, reliable testing, and comprehensive
            compliance support, while fostering strong relationships with the
            food industry.
          </p>
        </div>
      </div>
      <div className="about-vision-holder2">
        <div className="about-vision-textContainer-2">
          <div className="about-story-section-title">Our Mission</div>

          <div className="about-vision-heading">
            "Empowering the food industry with expert testing, compliance, and
            training services."
          </div>
          <p>
            PARIKSHAN ensures safe, high-quality food. We provide comprehensive
            services for FSSAI compliance and hygiene monitoring. Trust us for
            food safety excellence. Our experts work closely with businesses to
            maintain quality standards and protect consumer health.
          </p>
        </div>
        <div className="about-vision-imageContainer-2">
          <img
            src={VisionImage2}
            alt="VisionImage2"
            className="grid-images"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutVision;
