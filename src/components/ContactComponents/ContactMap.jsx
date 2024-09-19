import "../../styles/ContactPage.css";
import React from "react";

const addressData = [
  "A-7, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032",
  "Idhayam Parikshan Labs, Nandavanam Street, PP Vaiyapuri St, Sivagami Puram, Virudhunagar, Tamil Nadu 626001",
  "Parikshan FSS PVT LTD.,MM Illam, 358/519, MKN Rd, CPWD Quarters, Kannan Colonay, Alandur, Chennai, Tamil Nadu 600016",
];

function ContactMap() {
  return (
    <div>
      <div className="contact-title">Our Location</div>
      <div className="contact-map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3327608305626!2d80.20840207484225!3d13.014468987304845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526740156cfafb%3A0xd9611ad1dbc35065!2sParikshan%20FSS%20Pvt%20limited!5e0!3m2!1sen!2sin!4v1724914939765!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-address-container">
        {addressData.map((item, i) => (
          <div key={i} className="contact-address-card">
            <div className="contact-address-content">
              <div>
                <span className="contact-address-index">{i + 1}</span>
                <span style={{ fontWeight: 700, color: "#625EC8" }}>
                  Address
                </span>
              </div>
              <p className="contact-address-text">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactMap;
