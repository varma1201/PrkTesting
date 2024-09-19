import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "../../styles/HomePage.css"; // Make sure to create and import the CSS file
import { IoArrowUpSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import home1 from "../../assets/homeHero1.jpeg";
import home2 from "../../assets/homeHero2.jpeg";
import home3 from "../../assets/homeHero3.jpeg";
import home4 from "../../assets/homehero4.jpeg";
import home5 from "../../assets/homeHero5.jpeg";

const images = [
  {
    src: home1,
    label: "Image 1",
    heading:
      "26 years of legacy, empowering the society through science and leaders in food safety. ",
    des: "Lorem ipsum dolor sit am consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    src: home2,
    label: "Image 2",
    heading:
      "26 years of legacy, empowering the society through science and leaders in food safety. ",
    des: "Lorem ipsum dolor sit am consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    src: home3,
    label: "Image 3",
    heading:
      "26 years of legacy, empowering the society through science and leaders in food safety. ",
    des: "Lorem ipsum dolor sit am consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    src: home4,
    label: "Image 4",
    heading:
      "26 years of legacy, empowering the society through science and leaders in food safety. ",
    des: "Lorem ipsum dolor sit am consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    src: home5,
    label: "Image 5",
    heading:
      "26 years of legacy, empowering the society through science and leaders in food safety. ",
    des: "Lorem ipsum dolor sit am consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HomeHero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [background, setBackground] = useState(images[0].src);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const lastUpdate = useRef(0);
  const pauseTimeoutRef = useRef(null);

  useEffect(() => {
    const duration = 3000;

    const cycleImages = (timestamp) => {
      if (isPaused) return;

      if (!lastUpdate.current) lastUpdate.current = timestamp;
      const elapsed = timestamp - lastUpdate.current;

      if (elapsed >= duration) {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % images.length;
          setBackground(images[newIndex].src);
          return newIndex;
        });
        controls
          .start({ opacity: 0, transition: { duration: 1 } })
          .then(() =>
            controls.start({ opacity: 1, transition: { duration: 1 } })
          );
        lastUpdate.current = timestamp;
      }

      requestAnimationFrame(cycleImages);
    };

    requestAnimationFrame(cycleImages);

    return () => {
      lastUpdate.current = 0;
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [controls, isPaused]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setBackground(images[index].src);
    controls
      .start({ opacity: 0, transition: { duration: 1 } })
      .then(() => controls.start({ opacity: 1, transition: { duration: 1 } }));

    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Lazy load background images
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => setLoadedImage(background);
  }, [background]);

  return (
    <div className="slider-container">
      <motion.div
        className="background-image"
        animate={controls}
        key={loadedImage}
        style={{
          backgroundImage: loadedImage ? `url(${loadedImage})` : "none",
        }}
      />
      <div className="blur-overlay" />
      <div className="home-hero-item-container">
        <div className="hero-slider-heading-container">
          <div className="hero-title-heading-container">
            <div className="hero-title-heading-dot"></div>
            <div className="hero-title-heading">About Parikshan</div>
          </div>
          <motion.div className="hero-slider-heading">
            {images[currentIndex].heading}
          </motion.div>
        </div>
        <div id="slider">
          {images.map((image, index) => (
            <motion.label
              key={index}
              className="slide"
              style={{
                backgroundImage: `url(${image.src})`,
                width:
                  index === currentIndex
                    ? "100%"
                    : Math.abs(index - currentIndex) === 1
                    ? "85%"
                    : "70%",
              }}
              initial={{ opacity: index === currentIndex ? 1 : 0.5 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0.5,
                transform:
                  index === currentIndex
                    ? "translate3d(0,0,0)"
                    : `translate3d(${(index - currentIndex) * 15}%,0,-${
                        100 + Math.abs(index - currentIndex) * 100
                      }px)`,
              }}
              transition={{ duration: 0.8 }}
            />
          ))}
        </div>
        <div className="hero-slider-des-container">
          <motion.div
            key={`heading-${currentIndex}`}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-slider-des"
          >
            {images[currentIndex].des}
          </motion.div>
          <div
            className="hero-learn-more-container"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/single-event");
            }}
          >
            <div className="hero-learn-more-btn">Learn More</div>
            <div className="hero-learn-more-arr-container">
              <IoArrowUpSharp className="hero-learn-more-arr" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-dots-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`pointer hero-dot ${
              index === currentIndex ? "hero-active" : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHero;
