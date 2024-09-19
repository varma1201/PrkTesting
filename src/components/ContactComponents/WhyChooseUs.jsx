import { useState, React } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../styles/HomePage.css";
import "../../styles/ContactPage.css";

const data = [
  {
    title: "Lorem Ipsum1",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in ",
    image:
      "https://plus.unsplash.com/premium_photo-1672116453187-3aa64afe04ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Lorem Ipsum2",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in ",
    image:
      "https://plus.unsplash.com/premium_photo-1672116453187-3aa64afe04ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Lorem Ipsum3",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in ",
    image:
      "https://plus.unsplash.com/premium_photo-1672116453187-3aa64afe04ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Lorem Ipsum del4",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in ",
    image:
      "https://plus.unsplash.com/premium_photo-1672116453187-3aa64afe04ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
];

function WhyChooseUs() {
  const [position, setPosition] = useState(0);

  const prevSlide = () => {
    setPosition((prev) => (prev === 0 ? data.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setPosition((prev) => (prev === data.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="why-us-container">
      <div className="why-us-title">Why Choose Us</div>
      <div style={{ position: "relative" }} className="why-us-monitor">
        <motion.div
          className="why-us-carousel-container"
          style={{
            display: "flex",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ x: `-${position * 33.33}%` }} // Adjust scroll position
            transition={{ duration: 0.5 }} // Smooth scrolling effect
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            {data.map((word, index) => (
              <motion.div
                key={index}
                style={{ flex: "1 0 33%", padding: "0 10px" }}
              >
                <div style={{ width: "100%" }}>
                  <img
                    src={word.image}
                    alt={word.title || "Slide Image"}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "250px",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "ClashDisplayMedium",
                    fontSize: "1.5rem",
                    paddingTop: "1rem",
                  }}
                >
                  {word.title}
                </div>
                <p style={{ fontFamily: "RalewayMedium", color: "#404040" }}>
                  {word.des}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation Buttons */}
        <div
          className="home-testimonial-catagory-btn"
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "40%",
            left: "-10px",
            zIndex: 9,
            cursor: "pointer",
            transform: "translateY(-50%)",
          }}
        >
          <FaArrowLeft color="#fff" />
        </div>
        <div
          className="home-testimonial-catagory-btn"
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "40%",
            right: "-20px",
            zIndex: 9,
            cursor: "pointer",
            transform: "translateY(-50%)",
          }}
        >
          <FaArrowRight color="#fff" />
        </div>
      </div>
      <div className="why-us-mob">
        {data.map((word, index) => (
          <div
            key={index}
            onClick={() => {
              setPosition(index);
            }}
          >
            <div className="why-us-mob-img-container">
              <img
                src={word.image}
                alt="why choose us image"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div
              style={{
                fontFamily: "ClashDisplayMedium",
                fontSize: "1.5rem",
                padding: "0.75rem 0rem",
              }}
            >
              {word.title}
            </div>
            <div style={{ fontFamily: "RalewayMedium", color: "#404040" }}>
              {word.des}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
