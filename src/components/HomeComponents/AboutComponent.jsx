import AboutImage from "../../assets/aboutImg.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoArrowUpSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import React from "react";

function AboutComponent() {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  // const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="home-component-container about-container">
        <div className="home-about-heading">About us</div>
        <div className="home-about-content-container">
          <div className="home-about-text">
            <div className="home-about-heading-text">
              Great Vision Leads to Noble Deeds
            </div>
            <motion.p
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Parikshan is a pioneering and highly accomplished organization in
              the field of food safety services in India since 1998. With our
              integrated food safety management services and a centralized NABL
              accredited laboratory, we provide our clients with the critical
              knowledge, technical support, and expertise they need regarding
              quality, systems, standards, and regulations in the food industry.
            </motion.p>

            <div
              className="learn-more-container"
              onClick={() => {
                navigate("/about");
                scrollTo(0, 0);
              }}
            >
              <div className="learn-more-btn">Learn More</div>
              <div className="learn-more-arr-container">
                <IoArrowUpSharp className="learn-more-arr" />
              </div>
            </div>
          </div>
          <div className="home-about-img">
            <div
              className="home-about-img-container"
              style={{ position: "relative" }}
            >
              <img
                src={AboutImage}
                alt="AboutImage"
                loading="lazy"
                className="home-about-image-holder"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
