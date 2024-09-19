import "../../styles/Founder.css";
import React from "react";

const Data = [
  {
    title: "Food Testing the new Trend",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
  {
    title: "Food Testing the new Trend",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
  {
    title: "Food Testing the new Trend",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
  {
    title: "Food Testing the new Trend",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
  {
    title: "Food Testing the new Trend",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
  {
    title: "Food Testing the new Trend",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
];

function FounderBlog() {
  return (
    <div className="founder-blog-container">
      <div className="founder-title">Other Blog</div>
      <div className="founder-blog-card-container">
        {Data.map((item, index) => (
          <div key={index} className="founder-blog-card">
            <div className="founder-blog-image-container">
              <img
                src="https://images.unsplash.com/photo-1723242015501-2a52cfb64ed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                alt="blog image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="founder-blog-card-title">{item.title}</div>
            <p className="founder-blog-card-des">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FounderBlog;
