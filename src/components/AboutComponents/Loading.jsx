import React from "react";
import "../../styles/Loading.css";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        maxWidth: "100%",
      }}
    >
      <div className="loading-container">
        <div className="circle">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className={`dot dot-${index}`} />
          ))}
        </div>
        <div className="revolving-dot" />
      </div>
    </div>
  );
}

export default Loading;
