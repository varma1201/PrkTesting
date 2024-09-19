import React from "react";
import Error from "../assets/errorLogo.svg";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100%",
        flexDirection: "column",
      }}
    >
      <div>
        <img
          src={Error}
          alt="logo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <p style={{ textAlign: "center", fontFamily: "RalewaySemibold" }}>
        Page you requested couldnot be found
      </p>
      <button
        style={{
          padding: "1rem 1.5rem",
          borderRadius: "5px",
          color: "#625EC8",
          backgroundColor: "#f3f2ff",
          border: "2px solid #625EC8",
          fontFamily: "RalewaySemibold",
        }}
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ErrorPage;
