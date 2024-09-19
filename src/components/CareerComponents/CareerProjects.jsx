import "../../styles/Career.css";
import { FaQuestionCircle } from "react-icons/fa";
import React from "react";

const opportunitiesData = [
  {
    num: "01",
    title: "Aerobic Plate Count",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non ma",
  },
  {
    num: "02",
    title: "Aerobic Plate Count",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non ma",
  },
  {
    num: "03",
    title: "Aerobic Plate Count",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non ma",
  },
  {
    num: "04",
    title: "Aerobic Plate Count",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non ma",
  },
  {
    num: "05",
    title: "Aerobic Plate Count",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non ma",
  },
  {
    num: "06",
    title: "Aerobic Plate Count",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. Est vestibulum ullamcorper nisi nunc non ma",
  },
];
function CareerProjects() {
  return (
    <>
      <div className="career-projects-container">
        <div className="career-title">Projects</div>
        <div className="career-project-heading">Opportunities</div>
        <div className="career-project-map-container">
          {opportunitiesData.map((eachItem, i) => (
            <div key={i} className="career-project-card">
              <div className="career-project-card-num">{eachItem.num}.</div>
              <hr />
              <div className="career-project-card-title">{eachItem.title}</div>
              <p>{eachItem.des}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button className="career-project-enquire-btn">
                  <FaQuestionCircle color="#625ec8" />
                  <span style={{ fontWeight: 600 }}>Enquire</span>
                </button>
                <div
                  className={
                    i === opportunitiesData.length - 1
                      ? "career-hidden"
                      : "career-project-swipe-mobile"
                  }
                >
                  swipe for more
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="career-project-talk">
          <div style={{ textAlign: "center" }}>
            If you don't find a project that fits, please describe your ideal
            one.
          </div>
          <button className="career-project-talk-btn">Talk with us</button>
        </div>
      </div>
    </>
  );
}

export default CareerProjects;
