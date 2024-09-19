import FounderAudioBooks from "../components/FoundersComponents/FounderAudioBooks";
import FounderBlog from "../components/FoundersComponents/FounderBlog";
import FoundersDeskComponent from "../components/FoundersComponents/FoundersDeskComponent";
import "../styles/Founder.css";
import React from "react";

function FounderDesk() {
  return (
    <div>
      <div className="founder-hero-section">
        <div className="founder-image-container">
          <img
            src="https://images.unsplash.com/photo-1722342617984-7d1525a4f94e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D"
            alt="founder image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="founders-hero-content-container">
          <div className="founder-title">Our Founder</div>
          <div className="founder-name">Dr.Pasupathi</div>
          <div className="founder-hero-heading">
            A relentless pursuit of excellence and innovation in every test we
            conduct.
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
            nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae.
            Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
            nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae.{" "}
          </p>
        </div>
      </div>
      <div>
        <FoundersDeskComponent />
      </div>
      <div>{/* <FounderBook /> */}</div>
      <div>
        <FounderAudioBooks />
      </div>
      <div>
        <FounderBlog />
      </div>
    </div>
  );
}

export default FounderDesk;
