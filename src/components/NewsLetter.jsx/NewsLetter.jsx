import { useState, React } from "react";
import "../../styles/NewsLetter.css";
// import emailjs from "emailjs-com";

function NewsLetter() {
  const [email, setEmail] = useState("");

  // const handleSendEmail = () => {
  //   if (email.trim() === "") {
  //     alert("Please enter your email");
  //     return;
  //   }

  //   const templateParams = {
  //     from_name: "Newsletter Signup", // This can be a static string or dynamic
  //     to_email: "vikramvarma1201@gmail.com", // Predefined recipient email
  //     user_email: email, // User's email
  //     subject: "New Subscription Request", // Predefined subject
  //   };

  //   emailjs
  //     .send(
  //       "your_service_id", // Replace with your EmailJS service ID
  //       "your_template_id", // Replace with your EmailJS template ID
  //       templateParams,
  //       "your_user_id" // Replace with your EmailJS user ID
  //     )
  //     .then((response) => {
  //       console.log("Email sent successfully:", response);
  //       alert("Email sent successfully");
  //       setEmail(""); // Clear the email field after sending email
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       alert("Failed to send email");
  //     });
  // };

  return (
    <div className="news-letter-container">
      <div className="news-letter-text-container">
        <div className="news-letter-main-text">What’s new at Parikshan!</div>
        <div className="news-letter-sub-text">
          "Stay updated with the latest industry news, insightful blogs, and
          in-depth case studies—subscribe to our newsletter today!"
        </div>
      </div>
      <div className="news-letter-input-container">
        <div className="news-letter-input-holder">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="newsletter-inp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="news-letter-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
