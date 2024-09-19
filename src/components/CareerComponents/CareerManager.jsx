import "../../styles/Career.css";
import React from "react";

function CareerManager({ manager }) {
  return (
    <div className="career-manager-card">
      <div style={{ width: "100%" }}>
        <img
          src="https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D"
          alt="career image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
            userSelect: "none",
          }}
        />
      </div>
      <div
        style={{
          fontFamily: "ClashDisplayMedium",
          fontSize: "1.5rem",
          padding: "0.75rem 0rem",
          userSelect: "none",
        }}
      >
        {manager.title}
      </div>
      <div style={{ userSelect: "none" }}>{manager.des}</div>
    </div>
  );
}

export default CareerManager;
