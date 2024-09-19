import "../styles/Resource.css";
import Qr from "../assets/callQr.png";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState, React } from "react";

function ResourceComponent({ item }) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div>
          <span
            className={
              showDropdown
                ? "resource-comp-active resource-comp-des-heading"
                : "resource-comp-des-heading"
            }
          >
            {item.title}
          </span>
          {showDropdown && (
            <span className="res-payment-tag">{item.payment}</span>
          )}
          <span></span>
        </div>
        <div>
          {showDropdown ? (
            <IoIosArrowDropupCircle fontSize={20} color="#625ec8" />
          ) : (
            <IoIosArrowDropdownCircle fontSize={20} color="#AAAAAA" />
          )}
        </div>
      </div>
      {showDropdown && (
        <div>
          <p className="resource-comp-des">{item.des}</p>
          <div style={{ fontWeight: 700 }}>scan this for more info</div>
          <div className="resource-comp-img-holder">
            <img
              src={Qr}
              alt="Qr image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      )}
      <div className="resource-line-seperation"></div>
    </div>
  );
}

export default ResourceComponent;
