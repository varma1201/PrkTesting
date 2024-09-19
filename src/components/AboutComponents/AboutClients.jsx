import "../../styles/About.css";
import Marquee from "react-fast-marquee";
import Image1 from "../../assets/image 59.svg";
import Image2 from "../../assets/123 1.svg";
import Image3 from "../../assets/image 68.svg";
import Image4 from "../../assets/image 62.svg";
import Image5 from "../../assets/image 63.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const Logos = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image2,
  Image3,
  Image4,
  Image5,
];

function AboutClients() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="about-clients-container">
      <div className="about-story-section-title">Our Clients</div>
      <div className="about-clients-content">
        <p className="about-clients-heading">Buildiung Success Together</p>
        <motion.p
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
          nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id
          pellentesque in eu quis non mauris mus proin.
        </motion.p>
      </div>
      <div>
        <Marquee
          style={{ overflow: "hidden", background: "#fff" }}
          //   gradient={true}
          speed={120}
          pauseOnHover={true}
        >
          {Logos.map((eachLogo, i) => (
            <div key={i} className="partner-logo-styles">
              <img
                src={eachLogo}
                alt="client logo"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default AboutClients;
