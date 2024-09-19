import "../styles/MobileNav.css";
import { IoClose } from "react-icons/io5";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import parikshanLogo from "../assets/parikshanFullLogo.svg";
import { useEffect, useState, React } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NavData = [
  { title: "Home", path: "/", isNested: false },
  { title: "About", path: "/about", isNested: false },
  {
    title: "Service",
    path: "service",
    isNested: true,
    nestedItems: [
      { title: "Training", path: "/services/training", isNested: false },
      { title: "Audit", path: "/services/audit", isNested: false },
      { title: "Testing", path: "/services/testing", isNested: false },
      { title: "Consulting", path: "/services/consulting", isNested: false },
    ],
  },
  {
    title: "FSSAI Related",
    path: "/fssai",
    isNested: false,
  },

  { title: "Founders desk", path: "/foundersDesk", isNested: false },
  { title: "Careers", path: "/careers", isNested: false },
  {
    title: "More",
    path: "More",
    isNested: true,
    nestedItems: [
      { title: "Resources", path: "/resources", isNested: false },
      { title: "Events", path: "/events", isNested: false },
      { title: "Reach Us", path: "/contact", isNested: false },
    ],
  },
];

function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);
  const [navStack, setNavStack] = useState([]);
  const navigate = useNavigate();

  const showMenuToggle = () => {
    setShowMenu(!showMenu);
    window.scrollTo(0, 0);
    if (!showMenu) {
      setNavStack([]); // Reset stack when closing the main menu
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  const handleNavClick = (eachNav) => {
    if (eachNav.isNested) {
      setNavStack([...navStack, eachNav]);
    } else {
      // Navigate to route
      console.log(`Navigating to ${eachNav.path}`);
      navigate(eachNav.path);
      window.scrollTo(0, 0);
      setShowMenu(false); // Close the menu after navigation
    }
  };

  const handleBackClick = () => {
    setNavStack(navStack.slice(0, -1));
  };

  const currentNavItems = navStack.length
    ? navStack[navStack.length - 1].nestedItems
    : NavData;

  const previousNav = navStack.length ? navStack[navStack.length - 1].path : "";

  return (
    <div
      className={
        showMenu ? "mobile-nav-container-active" : "mobile-nav-container"
      }
    >
      <div className="mobile-nav-header">
        <div className="logo-container">
          <img
            src={parikshanLogo}
            alt="parikshan logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div>
          {showMenu ? (
            <IoClose color="#A5A5A5" fontSize={30} onClick={showMenuToggle} />
          ) : (
            <HiMiniBars3BottomRight fontSize={30} onClick={showMenuToggle} />
          )}
        </div>
      </div>

      <div>
        {showMenu && (
          <div>
            {navStack.length > 0 && (
              <div className="back-button" onClick={handleBackClick}>
                <FaArrowLeftLong />
                <span>{previousNav}</span>
              </div>
            )}
            {currentNavItems.map((eachNav, i) => (
              <MainNav
                key={i}
                eachNav={eachNav}
                onClick={() => handleNavClick(eachNav)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileNav;

const MainNav = ({ eachNav, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className="main-nav-item-container">
        <div className="main-nav-item">{eachNav.title}</div>
        <div>{eachNav.isNested ? eachNav.nestedItems.length : ""}</div>
      </div>
      <div className="mobile-nav-line-seperation" />
    </div>
  );
};
