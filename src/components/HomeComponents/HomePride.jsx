import TestLogo from "../../assets/testtube.svg";
import LightLogo from "../../assets/light.svg";
import HatLogo from "../../assets/eduHat.svg";
import DocLog from "../../assets/Doc.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import React from "react";
function HomePride() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is in the viewport
    triggerOnce: true, // Only trigger once
  });
  return (
    <div className="home-pride-container">
      <motion.p
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="home-pride-hero-text"
      >
        The Champion is known by numbers
      </motion.p>
      <div className="home-pride-number-container">
        <div className="home-pride-number-holder">
          <div className="home-pride-number">
            {inView && (
              <CountUp
                className="home-pride-number"
                start={100000}
                end={125682}
                duration={1}
                separator=","
              />
            )}
          </div>
          <div className="home-pride-text-container">
            <img src={TestLogo} alt="TestLogo" loading="lazy" />
            <p className="home-pride-text">Testing</p>
          </div>
        </div>
        <div className="home-pride-number-holder">
          <div className="home-pride-number">
            {" "}
            {inView && (
              <CountUp
                className="home-pride-number"
                start={10000}
                end={101124}
                duration={1}
                separator=","
              />
            )}
          </div>
          <div className="home-pride-text-container">
            <img src={DocLog} alt="DocLog" loading="lazy" />
            <p className="home-pride-text">Audit</p>
          </div>
        </div>
        <div className="home-pride-number-holder">
          <div className="home-pride-number">
            {" "}
            {inView && (
              <CountUp
                className="home-pride-number"
                start={1000}
                end={32691}
                duration={1}
                separator=","
              />
            )}
          </div>
          <div className="home-pride-text-container">
            <img src={LightLogo} alt="LightLogo" loading="lazy" />
            <p className="home-pride-text">Consultency</p>
          </div>
        </div>
        <div className="home-pride-number-holder">
          <div className="home-pride-number">
            {" "}
            {inView && (
              <CountUp
                className="home-pride-number"
                start={1000}
                end={43584}
                duration={1}
                separator=","
              />
            )}
          </div>
          <div className="home-pride-text-container">
            <img src={HatLogo} alt="HatLogo" loading="lazy" />
            <p className="home-pride-text">Training</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePride;
