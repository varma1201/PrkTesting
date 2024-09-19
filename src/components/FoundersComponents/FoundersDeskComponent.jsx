import { IoArrowUpSharp } from "react-icons/io5";
import "../../styles/Founder.css";
import { useEffect, useState, React } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const founderData = [
  {
    title: "Food Safety First: The Power of First",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar",
    img: "https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "Safe Bites: The Role of Testing",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar",
    img: "https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "Pure Plates: Food Testing Insights",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar",
    img: "https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "Tested to Taste: Ensuring Safety",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar",
    img: "https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "Tested to Taste: Ensuring Safety1",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar",
    img: "https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "Pure Plates: Food Testing Insights1",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar",
    img: "https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "Tested to Taste: Ensuring Safety1",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar",
    img: "https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    title: "Tested to Taste: Ensuring Last",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in crasnisl ac vitae tortor non. Sed pulvinar",
    img: "https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
];

const carouselVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

function FoundersDeskComponent() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // Initialize animation state
    controls.start("visible");
  }, [controls]);

  const handleScroll = (direction) => {
    const newIndex = Math.max(
      0,
      Math.min(founderData.length - 5, currentIndex + direction)
    );
    setCurrentIndex(newIndex);
    controls.start("visible");
  };

  const tabSlideIncrement = () => {
    if (slideIndex < founderData.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };
  const tabSlideDecrement = () => {
    if (slideIndex >= 1) {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className="founder-desk-container">
      <div className="founder-title hidden-monitor">Founders Desk</div>
      <div className="founder-desk-holder">
        <div className="founder-desk-details-container">
          <div className="founder-desk-details-content">
            <div className="founder-title hidden-mobile">Founders Desk</div>
            <div className="founder-desk-details-heading">
              {founderData[slideIndex]?.title || "No Title"}
            </div>
            <p>{founderData[slideIndex]?.des || "No Description"}</p>
            {/* Enable Later */}

            {/* <div className="learn-more-container">
              <div className="learn-more-btn">Learn More</div>
              <div className="learn-more-arr-container">
                <IoArrowUpSharp className="learn-more-arr" />
              </div>
            </div> */}
            <div className="tab-buttons">
              <IoIosArrowDropleftCircle
                onClick={tabSlideDecrement}
                style={{ fontSize: "30px", color: "#625EC8" }}
              />

              <IoIosArrowDroprightCircle
                onClick={tabSlideIncrement}
                style={{ fontSize: "30px", color: "#625EC8" }}
              />
            </div>
          </div>
          <div className="founder-desk-details-image">
            <IoIosArrowDropleftCircle
              style={{
                fontSize: "40px",
                color: "#625EC8",
                cursor: "pointer",
                position: "absolute",
                left: "-5%",
                backgroundColor: "#fff",
                borderRadius: "50%",
                transform: "translateY(-50%)",
              }}
              className="fmdr-desk-mobile-btn-left"
              onClick={tabSlideDecrement}
            />
            <img
              src={founderData[slideIndex]?.img || "defaultImage.jpg"}
              alt={founderData[slideIndex]?.title || "Default Title"}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <IoIosArrowDroprightCircle
              style={{
                fontSize: "40px",
                color: "#625EC8",
                cursor: "pointer",
                position: "absolute",
                right: "-5%",
                backgroundColor: "#fff",
                borderRadius: "50%",
                transform: "translateY(-50%)",
              }}
              className="fmdr-desk-mobile-btn-right"
              onClick={tabSlideIncrement}
            />
          </div>
        </div>
        <div className="founder-desk-details-switch">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={carouselVariants}
            transition={{ duration: 0.5 }}
          >
            {founderData
              .slice(currentIndex, currentIndex + 5)
              .map((item, i) => (
                <div key={i}>
                  <p
                    className={
                      i === slideIndex - currentIndex ? "founder-active" : ""
                    }
                    style={{
                      padding: "1.25rem 0rem",
                      fontFamily: "ClashDisplayMedium",
                      cursor: "pointer",
                    }}
                    onClick={() => setSlideIndex(currentIndex + i)}
                  >
                    {item.title}
                  </p>
                  <div className="founder-line-separator" />
                </div>
              ))}
          </motion.div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "2.5rem 0rem",
              marginLeft: "1rem",
            }}
          >
            <div>
              <IoIosArrowDropupCircle
                onClick={() => handleScroll(-1)}
                style={{
                  fontSize: "25px",
                  color: "#625EC8",
                  cursor: "pointer",
                }}
                disabled={currentIndex === 0}
              />
            </div>
            <div>
              <IoIosArrowDropdownCircle
                onClick={() => handleScroll(1)}
                style={{
                  fontSize: "25px",
                  color: "#625EC8",
                  cursor: "pointer",
                }}
                disabled={currentIndex >= founderData.length - 5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoundersDeskComponent;
