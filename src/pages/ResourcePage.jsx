import "../styles/Resource.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import ResourceComponent from "../components/ResourceComponent";
import { useState, React } from "react";
import Modal from "react-modal";

const data = [
  {
    title: "Warehouse",
    payment: "Free",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    title: "Warehouse",
    payment: "Paid",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    title: "Warehouse",
    payment: "Free",
    des: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque Lorem ipsum dolor sit amet consectetur. ",
  },
];

const wordsData = [
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
  "Lorem",
  "Morbi",
  "Lorem",
  "Morbi",
  "Morbi",
  "Morbi",
  "ipsum",
  "mor",
  "wine",
  "dolor",
  "dolor",
];

function ResourcePage() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="resource-container">
      <div className="resource-hero-content">
        <div className="resource-hero-heading">Lorem Ipsum</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <div className="resource-option-container">
          <button className="resource-option-btn">
            <FaArrowLeft color="#fff" />
          </button>
          <div className="resource-option">Posters</div>
          <div className="resource-option">Brouters</div>
          <div className="resource-option">Documents</div>
          <div className="resource-option">Pdfs</div>
          <button className="resource-option-btn">
            <FaArrowRight color="#fff" />
          </button>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="resorce-filter-container">
          <div
            style={{
              fontFamily: "ClashDisplayMedium",
              color: "#949494",
              fontSize: "1.5rem",
            }}
          >
            Category
          </div>
          <div onClick={() => setShowList(true)} className="resource-main-btn">
            <IoIosSearch />
            <span>“restaurant” search for other categories</span>
          </div>
        </div>
        <div>
          <div className="resources-main-content-container">
            <div className="resources-main-content">
              <div className="reasource-main-heading">Restaurant</div>
              <p className="reasource-main-text">
                Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in
                cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis
                vitae. Id pellentesque Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="resource-line-seperation"></div>
          {data.map((item, i) => (
            <ResourceComponent key={i} item={item} />
          ))}
        </div>
      </div>
      <Modal
        className="my-modal-content"
        overlayClassName="my-modal-overlay"
        // style={customStyles}
        isOpen={showList}
        onRequestClose={() => showList(false)}
      >
        <div>
          <div className="resources-list-option-container">
            <div className="list-edit-option-container">
              <div className="resource-mobile-hidden popup-monitor-search">
                <IoSearch color="#8DA0B1" />
                <input
                  type="text"
                  name=""
                  id=""
                  className="popup-search-inp"
                  placeholder="search"
                />
              </div>
            </div>
            <div>
              <IoClose onClick={() => setShowList(false)} />
            </div>
          </div>
          <div className="resource-list-mobile-filter">
            <div className="popup-monitor-search">
              <IoSearch color="#8DA0B1" />
              <input
                type="text"
                name=""
                id=""
                className="popup-search-inp"
                placeholder="search"
              />
            </div>
          </div>
          <div className="list-words-container">
            {wordsData.map((word, i) => (
              <div key={i} className="list-words">
                {word}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ResourcePage;
