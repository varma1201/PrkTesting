import { useState, useRef, useEffect, React } from "react";
import { motion, useAnimation } from "framer-motion";
import "../../styles/Events.css";
import { IoArrowUpSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Idpellentesque Lorem ipsum dolor sit amet consectetur.",
    date: "30/7/2024",
    img: "https://images.unsplash.com/photo-1721062621903-d9ceeb5c3ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum1",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Idpellentesque Lorem ipsum dolor sit amet consectetur.",
    date: "30/7/2024",
    img: "https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Lorem Ipsum3",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Idpellentesque Lorem ipsum dolor sit amet consectetur.",
    date: "30/7/2024",
    img: "https://images.unsplash.com/photo-1721062621903-d9ceeb5c3ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum4",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Idpellentesque Lorem ipsum dolor sit amet consectetur.",
    date: "30/7/2024",
    img: "https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  exit: { x: -100, opacity: 0, transition: { duration: 0.8 } },
};

function EventHeroComponent() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastUpdate = useRef(0);
  const controls = useAnimation();

  useEffect(() => {
    const duration = 3000; // Duration of each image display in milliseconds

    const cycleImages = (timestamp) => {
      if (!lastUpdate.current) lastUpdate.current = timestamp;
      const elapsed = timestamp - lastUpdate.current;

      if (elapsed >= duration) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
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

    // Cleanup function
    return () => {
      lastUpdate.current = 0;
    };
  }, [controls]);

  return (
    <motion.div
      className="event-hero-container"
      animate={controls}
      key={currentIndex} // Ensures the component updates when currentIndex changes
    >
      <div className="event-hero-content-holder">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="event-heroheading"
        >
          {data[currentIndex].title}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="event-hero-date"
        >
          {data[currentIndex].date}
        </motion.div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {data[currentIndex].des}
        </motion.p>
        <div
          className="learn-more-container"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/single-event");
          }}
        >
          <div className="learn-more-btn">Learn More</div>
          <div className="learn-more-arr-container">
            <IoArrowUpSharp className="learn-more-arr" />
          </div>
        </div>
        <div className="events-dots-container">
          {data.map((_, index) => (
            <div
              key={index}
              className={`event-dot ${
                index === currentIndex ? "event-active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="events-dots-container-mob">
        {data.map((_, index) => (
          <div
            key={index}
            className={`event-dot ${
              index === currentIndex ? "event-active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="event-hero-image-holder">
        <motion.img
          src={data[currentIndex].img}
          alt={`Image ${currentIndex}`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={slideVariants}
          key={currentIndex}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </motion.div>
  );
}

export default EventHeroComponent;
