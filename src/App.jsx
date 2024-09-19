import { Route, Routes } from "react-router-dom";

import WebsiteLayout from "./components/layouts/WebsiteLayout";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ServicePage from "./pages/ServicePage";
// import CareerPage from "./pages/CareerPage";
// import FSSAIRelated from "./pages/FSSAIRelated";
// import FounderDesk from "./pages/FounderDesk";
// import BlogPage from "./pages/BlogPage";
// import EventPage from "./pages/EventPage";
// import SingleEvent from "./pages/SingleEvent";
// import ResourcePage from "./pages/ResourcePage";
// import ContactPage from "./pages/ContactPage";
// import SideBar from "./components/SideBar";
import { IoMdArrowRoundUp } from "react-icons/io";
import { useEffect, useState, Suspense, lazy, React } from "react";
import "../src/App.css";
import ErrorPage from "./components/ErrorPage";
import Loading from "./components/AboutComponents/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
const FSSAIRelated = lazy(() => import("./pages/FSSAIRelated"));
const FounderDesk = lazy(() => import("./pages/FounderDesk"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const EventPage = lazy(() => import("./pages/EventPage"));
const SingleEvent = lazy(() => import("./pages/SingleEvent"));
const ResourcePage = lazy(() => import("./pages/ResourcePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const SideBar = lazy(() => import("./components/SideBar"));

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      // Adjust the value based on when you want the button to appear
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showScroll > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            zIndex: 99,
            background: "#625ec8",
            borderRadius: "50%",
            width: "3rem",
            height: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <IoMdArrowRoundUp
            style={{
              color: "#fff",
              fontSize: 35,
              padding: "0px",
            }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        </div>
      )}
      <SideBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <WebsiteLayout>
                <HomePage />
              </WebsiteLayout>
            }
          />
          <Route
            path="/about"
            element={
              <WebsiteLayout>
                <AboutPage />
              </WebsiteLayout>
            }
          />
          <Route
            path="/services/:itemKey"
            element={
              <WebsiteLayout>
                <ServicePage />
              </WebsiteLayout>
            }
          />
          <Route
            path="/careers"
            element={
              <WebsiteLayout>
                <CareerPage />
              </WebsiteLayout>
            }
          />
          <Route
            path="/foundersDesk"
            element={
              <WebsiteLayout>
                <FounderDesk />
              </WebsiteLayout>
            }
          />
          <Route
            path="/fssai"
            element={
              <WebsiteLayout>
                <FSSAIRelated />
              </WebsiteLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <WebsiteLayout>
                <BlogPage />
              </WebsiteLayout>
            }
          />
          <Route
            path="/events"
            element={
              <WebsiteLayout>
                <EventPage />
              </WebsiteLayout>
            }
          />
          <Route
            path="/single-event"
            element={
              <WebsiteLayout>
                <SingleEvent />
              </WebsiteLayout>
            }
          />
          <Route
            path="/resources"
            element={
              <WebsiteLayout>
                <ResourcePage />
              </WebsiteLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <WebsiteLayout>
                <ContactPage />
              </WebsiteLayout>
            }
          />{" "}
          <Route
            path="/*"
            element={
              <WebsiteLayout>
                <ErrorPage />
              </WebsiteLayout>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
