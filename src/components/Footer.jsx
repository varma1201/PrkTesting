import "../styles/Footer.css";
import Logo from "../assets/parikshanFullLogo.svg";
import Arr from "../assets/rightArr.svg";
import Qr from "../assets/callQr.png";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState, React, lazy, Suspense } from "react";
// import VideoPlayer from /;
import { useNavigate } from "react-router-dom";
import Insta from "../assets/instaLogo.svg";
import FbLogo from "../assets/fblogo.svg";
import YTLogo from "../assets/ytLogo.svg";
import LinkedIn from "../assets/linkLogo.svg";
import XLogo from "../assets/XLogo.svg";
import Loading from "./AboutComponents/Loading";

const VideoPlayer = lazy(() => import("./VideoPlayer"));

function Footer() {
  const [showCompany, setShowCompany] = useState(false);
  const [showService, setShowService] = useState(false);
  // const [showFSE, setShowFSE] = useState(false);
  const [showFounderDesk, setShowFounderDesk] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="footer-container">
        <div className="footer-logo-container">
          <img
            src={Logo}
            alt="footer logo"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="footer-details-container">
          <div>
            <div
              className="footer-letstalk-container pointer"
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
            >
              <div>{`Let's Talk`}</div>
              <div className="footer-letstalk-arr-container">
                <img src={Arr} alt="" />
              </div>
            </div>
            <div
              className="clashDisplay-font"
              style={{ padding: "0.5rem 0rem" }}
            >
              <a
                href={`mailto:${"contactusparikshar@gmail.com"}`}
                className="clashDisplay-font"
              >
                contactusparikshar@gmail.com
              </a>
            </div>
            <div className="clashDisplay-font">
              <a href={`tel:${6784673839}`} className="clashDisplay-font">
                +91 6784673839
              </a>
            </div>
          </div>

          <div className="address-container">
            <div className="footer-headings">Address</div>
            <a
              href="https://maps.app.goo.gl/VdN3qgGBxGGQ3rND6"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p className="clashDisplay-font footer-address-details">
                  A-7, Thiru Vi Ka Industrial Estate,
                </p>
                <p className="clashDisplay-font footer-address-details">
                  SIDCO Industrial Estate, Guindy, Chennai,
                </p>
                <p className="clashDisplay-font footer-address-details">
                  Tamil Nadu 600032
                </p>
              </div>
            </a>
          </div>
          <div className="QR-container">
            <div className="Qr-card">
              <img
                src={Qr}
                alt="Qr reader"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div
              className="footer-headings"
              style={{ display: "flex", alignItems: "end" }}
            >
              Scan This For More Info
            </div>
          </div>
        </div>
        <div className="footer-line-seperator" />
        <div className="footer-nav-container">
          <div className="footer-nav-holder">
            <div className="footer-nav-item-container">
              <div
                className="footer-headings"
                onClick={() => setShowCompany(!showCompany)}
              >
                <span>Company</span>
                {showCompany ? (
                  <IoIosArrowUp className="monitor-hidden" />
                ) : (
                  <IoIosArrowDown
                    className="monitor-hidden"
                    // onClick={() => setShowCompany(true)}
                  />
                )}
              </div>
              <div className={showCompany ? "footer-items" : "hidden"}>
                <div
                  className="footer-sub-items pointer"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 0);
                  }}
                >
                  Home
                </div>
                <div
                  className="footer-sub-items pointer"
                  onClick={() => {
                    navigate("/about");
                    window.scrollTo(0, 0);
                  }}
                >
                  About Us
                </div>
                <div
                  className="footer-sub-items pointer"
                  onClick={() => {
                    navigate("/careers");
                    window.scrollTo(0, 0);
                  }}
                >
                  Careers
                </div>
                <div
                  className="footer-sub-items pointer"
                  onClick={() => {
                    navigate("/events");
                    window.scrollTo(0, 0);
                  }}
                >
                  Events
                </div>
              </div>
            </div>
            <div className="footer-line-seperator monitor-hidden" />
            <div className="footer-nav-item-container">
              <div
                className="footer-headings"
                onClick={() => setShowService(!showService)}
              >
                <span>Services</span>
                {showService ? (
                  <IoIosArrowUp
                    className="monitor-hidden"
                    onClick={() => setShowService(false)}
                  />
                ) : (
                  <IoIosArrowDown
                    className="monitor-hidden"
                    onClick={() => setShowService(true)}
                  />
                )}
              </div>
              <div className={showService ? "footer-items" : "hidden"}>
                <div
                  className="footer-sub-items pointer"
                  onClick={() => {
                    navigate("/services/testing");
                    window.scrollTo(0, 0);
                  }}
                >
                  Testing
                </div>
                <div
                  className="footer-sub-items pointer"
                  onClick={() => {
                    navigate("/services/audit");
                    window.scrollTo(0, 0);
                  }}
                >
                  Hygiene Monitoring Service
                </div>
                <div
                  className="footer-sub-items pointer"
                  onClick={() => {
                    navigate("/services/consulting");
                    window.scrollTo(0, 0);
                  }}
                >
                  Consultancy
                </div>
                <div
                  className="footer-sub-items pointer"
                  onClick={() => {
                    navigate("/services/training");
                    window.scrollTo(0, 0);
                  }}
                >
                  Training
                </div>
              </div>
            </div>
            {/* <div className="footer-line-seperator monitor-hidden" /> */}
            {/* <div className="footer-nav-item-container">
              <div
                className="footer-headings"
                onClick={() => setShowFSE(!showFSE)}
              >
                <span>FSE & Spl</span>
                {showFSE ? (
                  <IoIosArrowUp
                    className="monitor-hidden"
                    onClick={() => setShowFSE(false)}
                  />
                ) : (
                  <IoIosArrowDown
                    className="monitor-hidden"
                    onClick={() => setShowFSE(true)}
                  />
                )}
              </div>
              <div className={showFSE ? "footer-items" : "hidden"}>
                <div className="footer-sub-items">
                  Register for colour mixing
                </div>
                <div className="footer-sub-items">Adulteration</div>
                <div className="footer-sub-items">Oil - TPC trans fat</div>
                <div className="footer-sub-items">
                  Enquiry form - Automated answers
                </div>
                <div className="footer-sub-items">Toll free number</div>
                <div className="footer-sub-items">FAQ’s</div>
              </div>
            </div> */}
            <div className="footer-line-seperator monitor-hidden" />
            <div className="footer-nav-item-container">
              <div
                className="footer-headings"
                onClick={() => setShowFounderDesk(!showFounderDesk)}
              >
                <span>Founders Desk</span>
                {showFounderDesk ? (
                  <IoIosArrowUp
                    className="monitor-hidden"
                    onClick={() => setShowFounderDesk(false)}
                  />
                ) : (
                  <IoIosArrowDown
                    className="monitor-hidden"
                    onClick={() => setShowFounderDesk(true)}
                  />
                )}
              </div>
              <div className={showFounderDesk ? "footer-items" : "hidden"}>
                <div
                  className="footer-sub-items pointer"
                  onClick={() => {
                    navigate("/foundersDesk");
                    window.scrollTo(0, 0);
                  }}
                >
                  Founder Desk
                </div>
                {/* <div className="footer-sub-items">Blogs</div> */}
              </div>
            </div>
            <div className="footer-line-seperator monitor-hidden" />
          </div>
          <div className="footer-video-container">
            <Suspense fallback={<Loading />}>
              <VideoPlayer
                url={"https://www.youtube.com/watch?v=pbHHPkOwPnk"}
              />
            </Suspense>
          </div>
        </div>
        <div className="footer-line-seperator-dashed" />
        <div className="footer-line-seperator" />
        <div className="footer-copyright-container">
          <div>
            <div>
              ©Copyright <b>Parikshan</b>. All Rights Reserved
            </div>
            <div className="footer-stacia-text-mob">
              <span style={{ fontFamily: "ClashDisplayRegular" }}>
                A creation of 💙, forged in the future, destined for your heart
                by
                <a
                  href="https://staciacorp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>StaciaCorp</b>
                </a>
              </span>
            </div>
          </div>
          <div className="footer-copyright-icons">
            <a
              href="https://www.instagram.com/parikshanlabs?igsh=Z2oyaHJzNnV2MnAy"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Insta} alt="insta logo" />
              {/* <IoLogoInstagram color="#008e2f" style={{ fontSize: "30px" }} /> */}
            </a>
            <a
              href="https://www.facebook.com/parikshanlabchennai?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FbLogo} alt="FB logo" />
              {/* <FaFacebook color="#008e2f" style={{ fontSize: "30px" }} /> */}
            </a>
            <a
              href="https://www.youtube.com/@parikshanlabs8781"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YTLogo} alt="Yt logo" />
              {/* <FaYoutube color="#008e2f" style={{ fontSize: "35px" }} /> */}
            </a>
            <a
              href="https://www.linkedin.com/company/parikshan/about/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="linkedin logo" />
              {/* <FaLinkedin color="#008e2f" style={{ fontSize: "30px" }} /> */}
            </a>
            <a
              href="https://x.com/parikshanf6?t=IIySJX6-EjbfjAS_oNUYHA&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <img src={XLogo} alt="X logo" />
              {/* <FaSquareXTwitter color="#008e2f" style={{ fontSize: "30px" }} /> */}
            </a>
          </div>
        </div>
        <div className="footer-stacia-text">
          <span style={{ fontFamily: "ClashDisplayRegular" }}>
            A creation of 💙, forged in the future, destined for your heart by{" "}
            <a href="https://staciacorp.com/" target="_blank" rel="noreferrer">
              <b>StaciaCorp</b>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
