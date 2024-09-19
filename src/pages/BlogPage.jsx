import "../styles/Blog.css";
import React from "react";
import blogImg1 from "../assets/blog-img-1.png";
import FounderBlog from "../components/FoundersComponents/FounderBlog";

const blogData = [
  "https://images.unsplash.com/photo-1722426365503-c406f62ed994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1722426365503-c406f62ed994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1722426365503-c406f62ed994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1722426365503-c406f62ed994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
];

function BlogPage() {
  return (
    <div>
      <div className="blog-hero-container">
        <div className="blog-title">Other Blog</div>
        <div className="blog-hero-contaent-container">
          <div className="blog-hero-content">
            <div className="blog-hero-heading">Food Testing the new Trend</div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
              nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae.
              Id pellentesque in eu quis non mauris mus proin. Est vestibulum
              ullamcorper nisi nunc non mauris purus. Lorem ipsum dolor sit amet
              consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.
              Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis
              non mauris mus proin.
            </p>
          </div>
          <div className="blog-hero-image-container">
            <div className="blog-hero-image-holder1">
              <img
                src={blogImg1}
                alt="blogImg1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="blog-hero-image-holder2">
              <img
                src={blogImg1}
                alt="blogImg1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="secondary-blog-container">
          <div className="secondary-blog-image">
            <div className="secondary-blog-heading-mobile">Lorem Ipsum</div>

            <div style={{ width: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
                alt="sec blog image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div className="secondary-blog-content">
            <div className="secondary-blog-heading-monitor">Lorem Ipsum</div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
              nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae.
              Id pellentesque in eu quis non mauris mus proin. Est vestibulum
              ullamcorper nisi nunc non mauris purus. Lorem ipsum dolor sit amet
              consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.
              Sed pulvinar porta sodales quis vitae.
            </p>
          </div>
        </div>
        <div className="secondary-blog-container">
          <div className="secondary-blog-image">
            <div className="secondary-blog-heading-mobile">Lorem Ipsum</div>

            <div style={{ width: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
                alt="sec blog image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div className="secondary-blog-content">
            <div className="secondary-blog-heading-monitor">Lorem Ipsum</div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
              nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae.
              Id pellentesque in eu quis non mauris mus proin. Est vestibulum
              ullamcorper nisi nunc non mauris purus. Lorem ipsum dolor sit amet
              consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.
              Sed pulvinar porta sodales quis vitae.
            </p>
          </div>
        </div>
      </div>
      <div className="third-blog-container">
        <div className="third-blog-content">
          <div className="third-blog-title">Lorem Ipsum</div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
            nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae.
          </p>
        </div>
        <div className="third-blog-img-container">
          {blogData.map((eachItem, i) => (
            <div key={i} className="thirst-blog-img-card">
              <img
                src={eachItem}
                alt="third blog image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="fourth-blog-container">
        <div className="fouth-blog-content">
          <div className="forth-blog-heading">Lorem ipsum dolor sit amet</div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
            nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id
            pellentesque in eu quis non mauris mus proin. Est vestibulum
            ullamcorper nisi nunc non mauris purus. Lorem ipsum dolor sit amet
            consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.
            Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis
            non mauris mus proin.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
            nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id
            pellentesque in eu quis non mauris mus proin
          </p>
        </div>
        <div className="fouth-blog-img-container">
          <img
            src="https://images.unsplash.com/photo-1723383006661-353b09196804?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
            alt=" fourth blog image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      <div className="other-blogs-container">
        <FounderBlog />
      </div>
    </div>
  );
}

export default BlogPage;
