import "../../styles/Career.css";
import { RiBuildingFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { RiWallet3Fill } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa";
import { useState, React } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function CareerJobPosts({ job }) {
  const [activeJob, setActiveJob] = useState(false);

  const handleEmailClick = () => {
    const email = "admin@staciacorp.com";
    const subject = "Applying for Job";
    const body = "Hello, I would like to discuss...";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <>
      <div className="career-job-map-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="pointer"
          onClick={() => setActiveJob(!activeJob)}
        >
          <div
            className={
              activeJob
                ? "career-job-heading career-job-heading-active"
                : "career-job-heading"
            }
          >
            {job.position}
          </div>
          <div>
            {activeJob ? (
              <IoIosArrowDropupCircle
                color="#625EC8"
                // onClick={() => setActiveJob(false)}
                fontSize={20}
              />
            ) : (
              <IoIosArrowDropdownCircle color="#8DA0B1" fontSize={20} />
            )}
          </div>
        </div>
        {activeJob && (
          <div>
            <div className="career-job-item-container">
              <div className="career-job-item">
                <FaBriefcase color="#8DA0B1" />
                <span>{job.exp}</span>
              </div>
              <div className="career-job-item">
                <RiWallet3Fill color="#8DA0B1" />
                <span>{job.sal}</span>
              </div>
              <div className="career-job-item">
                <FaClock color="#8DA0B1" />
                <span>{job.type}</span>
              </div>
              <div className="career-job-item">
                <FaLocationDot color="#8DA0B1" />
                <span>{job.location}</span>
              </div>
              <div className="career-job-item">
                <RiBuildingFill color="#8DA0B1" />
                <span> {job.mode}</span>
              </div>
            </div>
            <div className="career-job-sub-heading">About the Job</div>
            <p className="career-job-sub-contents">{job.about}</p>
            <div className="career-job-sub-heading">Responsibilities</div>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem",
              }}
            >
              {job.responsibilities.map((eachRes, i) => (
                <li className="career-job-sub-contents" key={i}>
                  {eachRes}
                </li>
              ))}
            </ul>
            <div className="career-job-sub-heading">Benfits</div>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem",
              }}
            >
              {job.benfits.map((eachBenfit, i) => (
                <li className="career-job-sub-contents" key={i}>
                  {eachBenfit}
                </li>
              ))}
            </ul>
            <div className="career-job-sub-heading">Requirments</div>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "1rem",
              }}
            >
              {job.requirments.map((eachReq, i) => (
                <li className="career-job-sub-contents" key={i}>
                  {eachReq}
                </li>
              ))}
            </ul>
            <div className="career-job-sub-heading">Note</div>
            <p className="career-job-sub-contents">{job.note}</p>
            <span className="career-job-upload-btn" onClick={handleEmailClick}>
              Apply Now
            </span>
          </div>
        )}
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#E8EEF1",
            marginTop: "2rem",
          }}
        />
      </div>
    </>
  );
}

export default CareerJobPosts;
