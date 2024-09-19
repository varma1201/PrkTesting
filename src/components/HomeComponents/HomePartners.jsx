import React from "react";
import Image1 from "../../assets/homeSvg1.svg";
import Image2 from "../../assets/HomeSvg2.svg";
import Image3 from "../../assets/HomeSvg3.svg";
import Image4 from "../../assets/HomeSvg4.svg";
import Image5 from "../../assets/HomeSvg5.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Logos = [Image1, Image2, Image3, Image4, Image5];

function HomePartners() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="home-partners-container">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="home-service-heading"
        style={{ textAlign: "center" }}
      >
        Our Partners
      </motion.div>
      <motion.p
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="home-partner-subheading"
      >
        {`"Show me your friends I will tell you what you are"`}
      </motion.p>
      <motion.p
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="home-partner-content"
        style={{ padding: "0rem 1rem" }}
      >
        16 Description Know our partners and you will know why we are the
        leaders
      </motion.p>
      <div>
        <div className="home-partner-logo-container">
          {Logos.map((eachLogo, i) => (
            <div key={i}>
              <img
                src={eachLogo}
                alt="partner logo"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePartners;
