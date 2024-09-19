import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, React, lazy, Suspense } from "react";
// import VideoPlayer from "../VideoPlayer";
const VideoPlayer = lazy(() => import("../VideoPlayer"));
import Loading from "../AboutComponents/Loading";

const testimonialVideos = [
  {
    video: "https://www.youtube.com/watch?v=pbHHPkOwPnk",
    text: "lorem ipsum dolor",
  },
  {
    video: "https://www.youtube.com/watch?v=rT72RIWGzHg",
    text: "lorem ipsum dolor",
  },
  {
    video: "https://www.youtube.com/watch?v=q1FkO9-swIU&t=53s",
    text: "lorem ipsum dolor",
  },
  {
    video: "https://www.youtube.com/watch?v=ae1XBJt0dKQ",
    text: "lorem ipsum dolor",
  },
  {
    video: "https://www.youtube.com/watch?v=iK9yUA8lPLo",
    text: "lorem ipsum dolor",
  },
];

const topics = ["Testing", "Audit", "consulting", "Training", "Something"];

const carouselVariants = {
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

function HomeTestimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // for carousel

  const [position, setPosition] = useState(0);

  const nextSlide = () => {
    setPosition((prev) => (prev + 1) % (topics.length - 3));
  };

  const prevSlide = () => {
    setPosition(
      (prev) => (prev - 1 + (topics.length - 3)) % (topics.length - 3)
    );
  };

  const getYouTubeEmbedUrl = (url) => {
    const videoId =
      new URL(url).searchParams.get("v") || url.split("/").pop().split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="home-testimonial-container">
      <div className="home-testimonial-heading">Testimonials</div>
      <div className="home-testimonial-content-container">
        <div className="home-testimonial-title">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="home-testimonial-title-content"
          >
            Hear it from our business partners
          </motion.div>
        </div>
        <motion.p
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="home-testimonial-content"
        >
          In this client testimonial video, discover how our comprehensive
          one-stop service—covering testing, training, and auditing—transformed
          their business. Our client shares how our expert guidance helped them
          enhance their quality systems, streamline operations, and achieve
          higher standards. From rigorous testing to tailored training programs
          and thorough audits, our end-to-end solutions empowered them to
          improve product quality, increase efficiency, and boost overall
          business performance. Hear firsthand how our support made a lasting
          impact on their success.
        </motion.p>
      </div>
      <div className="home-testimonials-desktop">
        <motion.div
          variants={carouselVariants}
          initial="exit"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="home-testimonial-stack"
        >
          <div className="home-testimonial-catagory-btn" onClick={prevSlide}>
            <FaArrowLeft color="#fff" />
          </div>

          {topics.slice(position, position + 4).map((word, index) => (
            <motion.div key={index} className="testimonial-tab-titles">
              {word}
            </motion.div>
          ))}
          <div className="home-testimonial-catagory-btn" onClick={nextSlide}>
            <FaArrowRight color="#fff" />
          </div>
        </motion.div>
        <div className="desktop-testimonial-video-container">
          {testimonialVideos.map((video, index) => (
            <div key={index} className="desktop-testimonial-video">
              <Suspense fallback={<Loading />}>
                <VideoPlayer url={video.video} />
              </Suspense>
              {/* <VideoPlayer url={video.video} /> */}
              <div>{video.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="home-testimonial-mobile">
        <div className="home-testimonial-mobile-stack">
          <div className="testimonial-tab-titles">Testing</div>
          <div className="testimonial-tab-titles">Audit</div>
          <div className="testimonial-tab-titles">Consulting</div>
          <div className="testimonial-tab-titles">Training</div>
        </div>
        <div className="home-testimonial-mobile-video-stack">
          {testimonialVideos.map((video, index) => (
            <div key={index} className="home-testimonial-mobile-video">
              {/* <iframe
                width="100%"
                className="testimonial-video-player"
                src={getYouTubeEmbedUrl(video.video)}
                title={`YouTube video player ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" */}
              <Suspense fallback={<Loading />}>
                <VideoPlayer url={video.video} />
              </Suspense>
              {/* <VideoPlayer url={video.video} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonials;
