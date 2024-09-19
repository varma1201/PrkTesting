import "../styles/NavBar.css";
import Logo from "../assets/Parikshan Logo.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState, React } from "react";
import { SideBarContext } from "../Context/SideBarContext";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

function NavBar() {
  const navigate = useNavigate();
  const { sidebarOpenHandler } = useContext(SideBarContext);

  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const animationStarted = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 0) {
      if (!animationStarted.current) {
        animationStarted.current = true;
        // Animate text to disappear from right to left
        controls.start("hidden");
      }
    } else {
      if (animationStarted.current) {
        animationStarted.current = false;
        // Animate text to appear from left to right
        controls.start("visible");
      }
    }
  }, [scrollY, controls]);

  const letterVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.5,
      },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const text = "Empowering society through science...";

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div
        className={
          scrollY
            ? "navbar-container navbar-container-small"
            : "navbar-container navbar-container-large"
        }
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "#fff",
        }}
      >
        <div
          className="logo-container"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
          <motion.div
            style={{ display: "flex" }} // Flex container to align letters
            initial="visible"
            animate={controls}
            variants={containerVariants}
            className="nav-logo-text"
          >
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-block", fontFamily: "HelveticaBold" }}
                variants={letterVariants}
              >
                {letter === " " ? "\u00A0" : letter}{" "}
                {/* Add non-breaking space for spaces */}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="nav-items-container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item"
            }
            onClick={ScrollTop}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item"
            }
            onClick={ScrollTop}
          >
            About us
          </NavLink>
          <div
            className="nav-item"
            onClick={() => {
              // navigate("/services");
              sidebarOpenHandler("Service");
            }}
          >
            Services
          </div>
          <div
            className="nav-item"
            onClick={() => {
              // navigate("/fssai");
              sidebarOpenHandler();
            }}
          >
            FSSAI Related
          </div>
          <NavLink
            to="/foundersDesk"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item"
            }
            onClick={ScrollTop}
          >
            {`Founder's Desk`}
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? "nav-item-active" : "nav-item"
            }
            onClick={ScrollTop}
          >
            Careers
          </NavLink>
          <div
            className="nav-item"
            onClick={() => {
              // navigate("/events");
              sidebarOpenHandler("More");
            }}
          >
            More
          </div>
        </div>
        <button
          className="nav-contactUs-btn"
          onClick={() => {
            navigate("/contact");
            ScrollTop();
          }}
        >
          Contact Us
        </button>
      </div>
    </>
  );
}

export default NavBar;
