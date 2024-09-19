import { useEffect, useRef, useState, React, lazy, Suspense } from "react";
import "../../styles/About.css";
import Modal from "react-modal";
import CustomCursor from "../CustomCursor";
// import VideoPlayer from "../VideoPlayer";
const VideoPlayer = lazy(() => import("../VideoPlayer"));
import Loading from "./Loading";

const Images = [
  "https://images.unsplash.com/photo-1723214433305-edb702c864aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723214433305-edb702c864aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723214433305-edb702c864aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723214433305-edb702c864aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723214433305-edb702c864aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723214433305-edb702c864aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723214433305-edb702c864aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723214433305-edb702c864aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723214433305-edb702c864aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

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

function AboutGallery() {
  const getYouTubeEmbedUrl = (url) => {
    const videoId =
      new URL(url).searchParams.get("v") || url.split("/").pop().split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const [showVideos, setShowVideos] = useState(false);
  const [activeTab, setActiveTab] = useState("Photos");

  const photosSectionRef = useRef(null);
  const videosSectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab("Videos");
        } else {
          setActiveTab("Photos");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    if (videosSectionRef.current) {
      observer.observe(videosSectionRef.current);
    }

    return () => {
      if (videosSectionRef.current) {
        observer.unobserve(videosSectionRef.current);
      }
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Photos" && photosSectionRef.current) {
      photosSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (tab === "Videos" && videosSectionRef.current) {
      videosSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showAllVideos, setShowAllVideos] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);

  const closeAllImagesVideos = () => {
    setShowAllVideos(false);
    setShowAllImages(false);
  };

  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <div className="about-gallery-container" style={{ position: "relative" }}>
      <div className="about-gallery-title" style={{ padding: "2rem 0rem" }}>
        Parikshan Gallery
      </div>
      <div className="about-gallery-option-container">
        <div className="about-gallery-options">
          <div className="line-seperator" />
          <div
            className={`about-gallery-option-style ${
              activeTab === "Photos" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Photos")}
          >
            Photos
          </div>
          <div className="line-seperator" />
          <div
            className={`about-gallery-option-style ${
              activeTab === "Videos" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Videos")}
          >
            Videos
          </div>
          <div className="line-seperator" />
        </div>

        <div
          style={{
            marginLeft: "20%",
            width: "80%",
          }}
        >
          <div
            className="about-gallery-deatails"
            style={{ width: "100%" }}
            ref={photosSectionRef}
          >
            {Images.map((image, i) => (
              <div
                key={i}
                // className="about-gallery-image-container"
                className={`about-gallery-image-container hover-component ${
                  cursorVisible ? "hide-default-cursor" : ""
                }`}
                onMouseEnter={() => setCursorVisible(true)}
                onMouseLeave={() => setCursorVisible(false)}
              >
                <CustomCursor isVisible={cursorVisible} text={"View"} />
                <img
                  src={image}
                  alt="gallery images"
                  loading="lazy"
                  className="about-gallery-image"
                />
              </div>
            ))}
          </div>
          <div className="about-video-seperation">
            <div className="about-video-line" />
            <div style={{ fontFamily: "ClashDisplayMedium", color: "#A4A4A4" }}>
              Videos
            </div>
            <div className="about-video-line" />
          </div>
          <div className="desktop-about-video-container" ref={videosSectionRef}>
            {testimonialVideos.map((video, index) => (
              <div key={index} className="desktop-about-video">
                <div>
                  <Suspense fallback={<Loading />}>
                    <VideoPlayer url={video.video} />
                  </Suspense>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-gallery-option-mob">
        <div
          style={{ display: "flex", columnGap: "0.5rem", alignItems: "center" }}
        >
          <div
            onClick={() => setShowVideos(false)}
            className={
              showVideos ? "about-gal-mob-tab" : "about-gal-mob-tab-active"
            }
          >
            Photos
          </div>
          <div
            onClick={() => setShowVideos(true)}
            className={
              showVideos ? "about-gal-mob-tab-active" : "about-gal-mob-tab"
            }
          >
            Videos
          </div>
        </div>
        <div>
          {!showVideos ? (
            <>
              <div className="about-gallery-deatails-mob">
                {Images.slice(0, 4).map((image, i) => (
                  <div key={i} className="about-gallery-image-container">
                    <img
                      src={image}
                      loading="lazy"
                      alt="galley image"
                      className="about-gallery-image"
                    />
                  </div>
                ))}
              </div>
              <div
                style={{ textAlign: "end", color: "#625ec8", fontWeight: 600 }}
                onClick={() => setShowAllImages(true)}
              >
                see all +
              </div>
              <Modal
                isOpen={showAllImages}
                onRequestClose={closeAllImagesVideos}
                className="about-my-modal-content"
                overlayClassName="about-my-modal-overlay"
              >
                <div
                  style={{
                    overflowY: "scroll",
                    maxHeight: "95%",
                    padding: "0px",
                  }}
                  className="about-gallery-deatails-mob"
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        fontFamily: "ClashDisplayMedium",
                        color: "#625EC8",
                        fontSize: "1.25rem",
                      }}
                    >
                      Photos
                    </div>
                    <div onClick={() => setShowAllImages(false)}>X</div>
                  </div>
                  {Images.map((image, i) => (
                    <div key={i} className="about-gallery-image-container">
                      <img
                        src={image}
                        loading="lazy"
                        alt="gallery image"
                        className="about-gallery-image"
                      />
                    </div>
                  ))}
                </div>
              </Modal>
            </>
          ) : (
            <>
              <div className="about-gallery-deatails-mob">
                {testimonialVideos.slice(0, 4).map((video, index) => (
                  <div key={index} className="desktop-about-video">
                    <Suspense fallback={<Loading />}>
                      <VideoPlayer url={video.video} />
                    </Suspense>
                  </div>
                ))}
              </div>
              <div
                style={{
                  textAlign: "end",
                  color: "#625ec8",
                  fontWeight: 600,
                }}
                onClick={() => setShowAllVideos(true)}
              >
                see all +
              </div>
              <Modal
                isOpen={showAllVideos}
                className="about-my-modal-content"
                overlayClassName="about-my-modal-overlay"
                onRequestClose={closeAllImagesVideos}
              >
                <div
                  style={{
                    overflowY: "scroll",
                    maxHeight: "95%",
                    padding: "0px",
                  }}
                  className="about-gallery-deatails-mob"
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        fontFamily: "ClashDisplayMedium",
                        color: "#625EC8",
                        fontSize: "1.25rem",
                      }}
                    >
                      Videos
                    </div>
                    <div
                      onClick={() => setShowAllVideos(false)}
                      style={{ fontWeight: "600" }}
                    >
                      X
                    </div>
                  </div>
                  {testimonialVideos.map((video, index) => (
                    <div key={index} className="desktop-about-video">
                      {/* <iframe
                        width="100%"
                        height="250"
                        src={getYouTubeEmbedUrl(video.video)}
                        title={`YouTube video player ${index}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: "5px" }}
                      /> */}
                      <Suspense fallback={<Loading />}>
                        <VideoPlayer url={video.video} />
                      </Suspense>
                    </div>
                  ))}
                </div>
              </Modal>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutGallery;
