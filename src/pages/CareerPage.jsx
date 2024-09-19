import { useEffect, useRef, useState, React } from "react";
import CareerJobPosts from "../components/CareerComponents/CareerJobPosts";
import CareerManager from "../components/CareerComponents/CareerManager";
import CareerProjects from "../components/CareerComponents/CareerProjects";
import "../styles/Career.css";
import CustomCursor from "../components/CustomCursor";

const jobs = [
  {
    position: "General Manager",
    about:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non mauris purus. Lorem ipsum dolor sit amet consectetur. ",
    sal: "5-7",
    exp: "1-3",
    type: "Full Time",
    location: "chennai",
    mode: "In Office",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      "Mauris massa. Vestibulum lacinia arcu eget nulla.",
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      "Mauris massa. Vestibulum lacinia arcu eget nulla.",
    ],
    benfits: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      "Mauris massa. Vestibulum lacinia arcu eget nulla.",
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      "Mauris massa. Vestibulum lacinia arcu eget nulla.",
    ],
    requirments: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
    ],
    note: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non mauris purus. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    position: "Testing Assistant",
    about:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non mauris purus. Lorem ipsum dolor sit amet consectetur. ",
    sal: "5-7",
    exp: "1-3",
    type: "Full Time",
    location: "chennai",
    mode: "In Office",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      "Mauris massa. Vestibulum lacinia arcu eget nulla.",
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      "Mauris massa. Vestibulum lacinia arcu eget nulla.",
    ],
    benfits: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      "Mauris massa. Vestibulum lacinia arcu eget nulla.",
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      "Mauris massa. Vestibulum lacinia arcu eget nulla.",
    ],
    requirments: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
    ],
    note: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non mauris purus. Lorem ipsum dolor sit amet consectetur. ",
  },
];

const manages = [
  {
    title: "Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
  {
    title: "Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
  {
    title: "Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
  {
    title: "Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
  {
    title: "Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
  {
    title: "Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non.",
  },
];

function CareerPage() {
  const scrollableDivRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.clientX);
      setScrollLeft(scrollableDivRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        const scrollX = scrollLeft + (startX - e.clientX);
        scrollableDivRef.current.scrollLeft = scrollX;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const container = scrollableDivRef.current;

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <div>
      <div className="career-hero-container">
        <div className="career-hero-content-container">
          <div className="career-title">Careers</div>
          <div className="career-hero-heading">
            Where Ambition Meets Opportunity
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
            nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id
            pellentesque in eu quis non mauris mus proin.
          </p>
        </div>
        <div className="career-hero-image">
          <img
            src="https://images.unsplash.com/photo-1722080767209-7029048ce0f5?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="career hero image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div>
        <CareerProjects />
      </div>
      <div className="career-job-container">
        <div className="career-title">Jobs & Internships</div>
        <div className="career-job-main-heading">Opportunities</div>
        {jobs.map((job, i) => (
          <CareerJobPosts key={i} job={job} />
        ))}
      </div>
      <div style={{ padding: "0% 5%", maxWidth: "100%" }}>
        <div className="career-job-upload">
          <div>Drop your resume here for future job openings</div>
          <button className="career-job-upload-btn">Upload</button>
        </div>
      </div>
      <div className="career-managers-container">
        <div className="career-title">
          Our managers about their Growth at parikshan
        </div>
        <div
          // className="career-manager-card-container"
          ref={scrollableDivRef}
          onMouseEnter={() => setCursorVisible(true)}
          onMouseLeave={() => setCursorVisible(false)}
          className={`career-manager-card-container hover-component ${
            cursorVisible ? "hide-default-cursor" : ""
          }`}
        >
          <CustomCursor isVisible={cursorVisible} text={"Drag"} />
          {manages.map((manager, i) => (
            <CareerManager key={i} manager={manager} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareerPage;
