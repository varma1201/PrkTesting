import { IoArrowUpSharp } from "react-icons/io5";
import "../../styles/service.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, React } from "react";
import CustomCursor from "../CustomCursor";

const AllServices = [
  {
    title: "Testing",
    itemKey: "testing",
    path: "/services/testing",
    des: "Lorem ipsum dolor sit amet consectetur. Ac orci urna mi proin at. Nunc urna tortor accumsan cum ut. Commodo ipsum viverra sed lorem bibendum.",
    ServiceData: [
      {
        servTitle: "Food Tests",
        servItems: [
          { name: "Food Plate Count", Certification: "IS 5402: 2012" },
          { name: "Food Plate Count", Certification: "IS 5402: 2012" },
          { name: "Food Plate Count", Certification: "IS 5402: 2012" },
          { name: "Food Plate Count", Certification: "IS 5402: 2012" },
        ],
      },
      {
        servTitle: "Water Tests",
        servItems: [
          { name: "Water Plate Count", Certification: "IS 5402: 2012" },
          { name: "Water Plate Count", Certification: "IS 5402: 2012" },
          { name: "Water Plate Count", Certification: "IS 5402: 2012" },
          { name: "Water Plate Count", Certification: "IS 5402: 2012" },
          { name: "Water Plate Count", Certification: "IS 5402: 2012" },
          { name: "Water Plate Count", Certification: "IS 5402: 2012" },
          { name: "Water Plate Count", Certification: "IS 5402: 2012" },
        ],
      },
      {
        servTitle: "Environment",
        servItems: [
          { name: "Environment hazards", Certification: "IS 5402: 2012" },
          { name: "Environment hazards", Certification: "IS 5402: 2012" },
          { name: "Environment hazards", Certification: "IS 5402: 2012" },
          { name: "Environment hazards", Certification: "IS 5402: 2012" },
          { name: "Environment hazards", Certification: "IS 5402: 2012" },
          { name: "Environment hazards", Certification: "IS 5402: 2012" },
          { name: "Environment hazards", Certification: "IS 5402: 2012" },
          { name: "Environment hazards", Certification: "IS 5402: 2012" },
          { name: "Environment hazards", Certification: "IS 5402: 2012" },
          { name: "Environment hazards", Certification: "IS 5402: 2012" },
        ],
      },
      {
        servTitle: "Research and Development",
        servItems: [
          { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
          { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
          { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
          { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
          { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
          { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
          { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
          { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
          { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
          { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
        ],
      },
    ],
  },
  {
    title: "Training",
    itemKey: "training",
    path: "/services/training",
    des: "Lorem ipsum dolor sit amet consectetur. Ac orci urna mi proin at. Nunc urna tortor accumsan cum ut. Commodo ipsum viverra sed lorem bibendum.",
    ServiceData: [
      {
        servTitle: "Food Tests",
        servItems: [
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
        ],
      },
    ],
  },
  {
    title: "Hygiene Monitoring Service",
    path: "/services/audit",
    itemKey: "audit",
    des: "Lorem ipsum dolor sit amet consectetur. Ac orci urna mi proin at. Nunc urna tortor accumsan cum ut. Commodo ipsum viverra sed lorem bibendum.",
    ServiceData: [
      {
        servTitle: "Food Tests",
        servItems: [
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
        ],
      },
    ],
  },
  {
    title: "Consulting",
    itemKey: "consulting",
    path: "/services/consulting",
    des: "Lorem ipsum dolor sit amet consectetur. Ac orci urna mi proin at. Nunc urna tortor accumsan cum ut. Commodo ipsum viverra sed lorem bibendum.",
    ServiceData: [
      {
        servTitle: "Food Tests",
        servItems: [
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
          { name: "Total Plate Count", Certification: "IS 5402: 2012" },
        ],
      },
    ],
  },
];

function OtherServices() {
  const navigate = useNavigate();
  const params = useParams();
  const uniqueKey = params.itemKey;
  console.log(uniqueKey);

  const remaingArray = AllServices.filter(
    (eachObj) => eachObj.itemKey != uniqueKey
  );
  console.log(remaingArray);

  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <div className="other-services-container">
      <div className="other-service-content">
        <div className="other-service-title">other services</div>
        <div className="other-service-heading">
          Diverse Services, One Commitment
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ac orci urna mi proin at. Nunc
          urna tortor accumsan cum ut. Lorem ipsum dolor sit amet consectetur.
          Ac orci urna mi proin at. Nunc urna tortor accumsan cum ut.
        </p>
      </div>
      <div className="other-service-card-container">
        {remaingArray.map((eachService, i) => (
          <div className="other-service-card" key={i}>
            <div
              // className="other-service-card-img-container"
              className={`other-service-card-img-container ${
                cursorVisible ? "hide-default-cursor" : ""
              }`}
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              onClick={() => {
                navigate(eachService.path);
                scrollTo(0, 0);
              }}
            >
              <CustomCursor isVisible={cursorVisible} text={"Know more"} />
              <img
                src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="service image"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="other-service-card-heading">
              {eachService.title}
            </div>
            <p className="other-service-card-description">{eachService.des}</p>
            <div
              className="learn-more-container"
              onClick={() => {
                navigate(eachService.path);
                window.scrollTo(0, 0);
              }}
            >
              <div className="learn-more-btn">Learn More</div>
              <div className="learn-more-arr-container">
                <IoArrowUpSharp className="learn-more-arr" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherServices;
