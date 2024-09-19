import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Sidebar.css";
import { SideBarContext } from "../Context/SideBarContext";
import { useContext } from "react";
import ParikshanLogo from "../assets/parikshanFullLogo.svg";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// import Modal from "react-modal";

const NavData = [
  { title: "Home", path: "/", isNested: false },
  { title: "About", path: "/about", isNested: false },
  {
    title: "Service",
    path: "service",
    isNested: true,
    nestedItems: [
      {
        title: "Training",
        path: "/services/training",
        isNested: false,
      },
      {
        title: "Hygiene Monitoring Service",
        path: "/services/audit",
        isNested: false,
      },
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

// const serviceArr = [];

const SubNav = ({ handleItemClick, item, stepIndex, isActive }) => {
  return (
    <>
      <li
        onClick={() => handleItemClick(item, stepIndex)}
        className={isActive ? "active-tab" : ""}
        style={{
          fontFamily: "ClashDisplayRegular",
          display: "flex",
          justifyContent: "space-between",
          columnGap: "20rem",
          alignItems: "center",
          // margin: "0.75rem 0rem",
        }}
      >
        <span style={{ fontFamily: "ClashDisplayRegular" }}>{item.title}</span>
        {stepIndex > 0 && (
          <span style={{ fontFamily: "ClashDisplayRegular" }}>04</span>
        )}
      </li>
    </>
  );
};

const NavDesign = ({ handleItemClick, stepIndex, steps, step, activeTab }) => {
  return (
    <motion.div
      key={stepIndex + 1}
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ duration: 0.3 }}
      className={`step-content ${stepIndex}`}
      style={{ zIndex: steps.length - stepIndex }}
    >
      {step.heading && <div className="step-heading">{step.heading}</div>}
      <ul>
        {step.data.map((item, index) => (
          <SubNav
            key={index}
            handleItemClick={handleItemClick}
            item={item}
            stepIndex={stepIndex}
            isActive={stepIndex === 0 && activeTab === index}
          />
        ))}
      </ul>
      {/* Conditional line separator to separate Step 1 and Step 2 */}
      {stepIndex === 0 && steps.length > 1 && (
        <div className="vertical-line-separation"></div>
      )}
    </motion.div>
  );
};

const SideBar = () => {
  const navigate = useNavigate();
  // const [navDetails, setNavDetails] = useState([
  //   {
  //     title: 'home', path: '/'
  //   },
  //   {
  //     title: 'services',
  //     nestedItems: []
  //   }
  // ])
  const { isOpen, sidebarCloseHandler, initialSection } =
    useContext(SideBarContext);

  const [steps, setSteps] = useState([
    { data: NavData, index: 0, heading: "" },
  ]);
  const [activeTab, setActiveTab] = useState(null); // State for active tab

  const handleClose = () => {
    setSteps([{ data: NavData, index: 0 }]); // Reset steps to initial state
    setActiveTab(null); // Reset active tab
    sidebarCloseHandler(); // Call the context's close handler
  };

  const handleItemClick = (item, level) => {
    const newSteps = steps.slice(0, level + 1); // Keep steps up to the current level

    // Generate the new heading
    const newHeading = newSteps[level].heading
      ? `${newSteps[level].heading}/${item.title}`
      : item.title;

    // Add the clicked item's nested items if it has any
    if (item.isNested) {
      newSteps.push({
        data: item.nestedItems,
        index: level + 1,
        heading: newHeading,
      });
    } else {
      navigate(item.path);
      window.scrollTo(0, 0);
      handleClose();
      sidebarCloseHandler(); // Close the sidebar after navigation
    }

    setSteps(newSteps);

    // Update active tab if on the first step
    if (level === 0) {
      setActiveTab(newSteps[0].data.indexOf(item));
    }
  };

  React.useEffect(() => {
    if (initialSection) {
      const section = NavData.find((item) => item.title === initialSection);
      if (section) {
        handleItemClick(section, 0);
      }
    }
  }, [initialSection]);

  return (
    <>
      {isOpen && (
        <>
          <div className="overlay" onClick={handleClose} />
          <div className="sidebar">
            <div className="header">
              <div className="logo">
                <img
                  src={ParikshanLogo}
                  alt="Parkishan logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <button
                className="close-btn"
                onClick={() => {
                  handleClose();
                  sidebarCloseHandler(); // Close the sidebar after closing the menu button
                }}
              >
                <IoClose color="#A5A5A5" />
              </button>
            </div>
            <div className="steps-container">
              <AnimatePresence>
                {steps.map((step, index) => (
                  <NavDesign
                    key={index}
                    handleItemClick={handleItemClick}
                    stepIndex={index}
                    steps={steps}
                    step={step}
                    activeTab={activeTab}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SideBar;
