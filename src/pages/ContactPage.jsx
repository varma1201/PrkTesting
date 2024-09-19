import { useState, React, useEffect } from "react";
import ContactMap from "../components/ContactComponents/ContactMap";
import WhyChooseUs from "../components/ContactComponents/WhyChooseUs";
import "../styles/ContactPage.css";
import { IoLogoInstagram, IoMail } from "react-icons/io5";
import {
  FaFacebook,
  FaLinkedin,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const contactData = [
  { title: "Phone", des: "044 4269 2288", name: "" },
  { title: "Email", email: "info@parikshan.com", name: "" },
  { title: "Email", email: "info@parikshan.com", name: "BatMan" },
  { title: "Email", email: "info@parikshan.com", name: "Home Lander" },
  { title: "Email", email: "info@parikshan.com", name: "Tony Stark" },
  { title: "Email", email: "info@parikshan.com", name: "Super Man" },
];

function ContactPage() {
  const [firstNameActive, setFirstNameActive] = useState(false);
  const [lastNameActive, setLastNameActive] = useState(false);
  const [serviceActive, setServiceActive] = useState(false);
  const [categoryActive, setCategoryActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const [messageActive, setMessageActive] = useState(false);

  const [serviceVal, setServiceVal] = useState("");
  const [categoryVal, setCategoryVal] = useState("");

  const state = useLocation();
  console.log(state.state);
  useEffect(() => {
    if (state.state) {
      setCategoryVal(state.state.category);
      setServiceVal(state.state.service);
    }
  }, []);
  return (
    <div>
      <div className="contact-hero-section">
        <div className="contact-hero-content-holder">
          <div className="contact-hero-title">
            {"We'd love to hear from you"}
          </div>
          <div className="content-hero-heading">
            Quality Service, Exceptional Results
          </div>
          <p style={{ fontWeight: 400 }}>
            Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
            nisl ac vitae tortor non.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "1.5rem",
              padding: "2rem 0rem",
            }}
          >
            <a
              href="https://www.instagram.com/parikshanlabs?igsh=Z2oyaHJzNnV2MnAy"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram color="#008e2f" style={{ fontSize: "30px" }} />
            </a>
            <a
              href="https://www.facebook.com/parikshanlabchennai?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook color="#008e2f" style={{ fontSize: "30px" }} />
            </a>
            <a
              href="https://www.youtube.com/@parikshanlabs8781"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube color="#008e2f" style={{ fontSize: "35px" }} />
            </a>
            <a
              href="https://www.linkedin.com/company/parikshan/about/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color="#008e2f" style={{ fontSize: "30px" }} />
            </a>
            <a
              href="https://x.com/parikshanf6?t=IIySJX6-EjbfjAS_oNUYHA&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareXTwitter color="#008e2f" style={{ fontSize: "30px" }} />
            </a>
          </div>
        </div>
        <div className="contact-hero-form-holder">
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
          >
            <div className="contact-input-container">
              <div className="contact-input-holder">
                <label
                  htmlFor=""
                  className={
                    firstNameActive ? "title-lable-active" : "title-lable"
                  }
                >
                  First Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className={
                    firstNameActive
                      ? "contact-input-fields-active"
                      : "contact-input-fields"
                  }
                  placeholder="enter your first name"
                  onFocus={() => setFirstNameActive(true)}
                  onBlur={() => setFirstNameActive(false)}
                />
              </div>
              <div className="contact-input-holder">
                <label
                  htmlFor=""
                  className={
                    lastNameActive ? "title-lable-active" : "title-lable"
                  }
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className={
                    lastNameActive
                      ? "contact-input-fields-active"
                      : "contact-input-fields"
                  }
                  onFocus={() => setLastNameActive(true)}
                  onBlur={() => setLastNameActive(false)}
                  placeholder="enter your last name"
                />
              </div>
            </div>
            <div className="contact-input-container">
              <div className="contact-input-holder">
                <label
                  htmlFor=""
                  className={
                    serviceActive ? "title-lable-active" : "title-lable"
                  }
                >
                  Service
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={serviceVal}
                  className={
                    serviceActive
                      ? "contact-input-fields-active"
                      : "contact-input-fields"
                  }
                  onFocus={() => setServiceActive(true)}
                  onBlur={() => setServiceActive(false)}
                  placeholder="enter your service"
                />
              </div>
              <div className="contact-input-holder">
                <label
                  htmlFor=""
                  className={
                    categoryActive ? "title-lable-active" : "title-lable"
                  }
                >
                  Category
                </label>
                <input
                  type="text"
                  name=""
                  value={categoryVal}
                  id=""
                  className={
                    categoryActive
                      ? "contact-input-fields-active"
                      : "contact-input-fields"
                  }
                  onFocus={() => setCategoryActive(true)}
                  onBlur={() => setCategoryActive(false)}
                  placeholder="enter your category"
                />
              </div>
            </div>
            <div className="contact-input-container">
              <div className="contact-input-holder">
                <label
                  htmlFor=""
                  className={emailActive ? "title-lable-active" : "title-lable"}
                >
                  E-Mail
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className={
                    emailActive
                      ? "contact-input-fields-active"
                      : "contact-input-fields"
                  }
                  onFocus={() => setEmailActive(true)}
                  onBlur={() => setEmailActive(false)}
                  placeholder="enter your email"
                />
              </div>
              <div className="contact-input-holder">
                <label
                  htmlFor=""
                  className={
                    mobileActive ? "title-lable-active" : "title-lable"
                  }
                >
                  Mobile No
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className={
                    mobileActive
                      ? "contact-input-fields-active"
                      : "contact-input-fields"
                  }
                  onFocus={() => setMobileActive(true)}
                  onBlur={() => setMobileActive(false)}
                  placeholder="enter your number"
                />
              </div>
            </div>
            <div className="contact-msg-holder">
              <label
                htmlFor=""
                className={messageActive ? "title-lable-active" : "title-lable"}
              >
                Message
              </label>
              <textarea
                className={
                  messageActive ? "contact-msg-area-active" : "contact-msg-area"
                }
                onFocus={() => setMessageActive(true)}
                onBlur={() => setMessageActive(false)}
                name=""
                id=""
                placeholder="Message"
              ></textarea>
              <button className="contact-hero-btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <ContactMap />
      </div>
      <div className="contact-details-container">
        <div className="contact-details-title">Contact Details</div>
        <div className="contact-details-heading">Reach Us Easily</div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
          nisl ac vitae tortor non.
        </p>
        <div className="contact-details-info-container">
          <div className="Line-mob-contact"></div>
          {contactData.map((contact, i) => (
            <>
              <div key={i} className="contact-details-card">
                <div className="contact-details-icon-container">
                  <IoMail style={{ fontSize: "35px" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "5px",
                    margin: "0rem 0.5rem",
                  }}
                >
                  <div style={{ fontSize: "20px" }}>{contact.title}</div>
                  {contact.name && (
                    <div>
                      <span style={{ fontSize: "20px" }}>Mr :</span>
                      <span
                        style={{
                          marginLeft: "5px",
                          color: "#625EC8",
                          fontSize: "20px",
                          fontFamily: "RalewaySemibold",
                        }}
                      >
                        {contact.name}
                      </span>
                    </div>
                  )}
                  <div style={{ fontSize: "20px" }}>{contact.des}</div>
                  <div
                    className="contact-mail-styles"
                    style={{ fontSize: "20px" }}
                  >
                    {contact.email}
                  </div>
                </div>
              </div>
              <div className="Line-mob-contact"></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
