import { useState, React } from "react";
import SingleEventComponent from "../components/EventComponents/SingleEventComponent";
import "../styles/Events.css";
import Modal from "react-modal";

function SingleEvent() {
  const [showForm, setShowForm] = useState(false);
  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <div>
      <div className="single-event-img-container">
        <img
          src="https://images.unsplash.com/photo-1567274333060-04b18e634717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZCUyMHNjYXBlfGVufDB8fDB8fHww"
          alt="single event image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="single-event-hero-content">
        <div className="single-event-heading-container">
          <div>
            <div className="single-event-heading">
              International Culinary Symposium
            </div>
            <div className="single-event-date">30/07/24</div>
          </div>
          <div>
            {/* <button
              className="single-event-hero-btn-monitor"
              onClick={() => {
                setShowForm(true);
              }}
            >
              Regester Now
            </button> */}
          </div>
        </div>
        <div className="event-line-seperator" />
        <p className="single-event-hero-subheading">
          Location A-7, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate,
          Guindy, Chennai, Tamil Nadu 600032
        </p>
        <p style={{ fontWeight: "400" }}>
          Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
          nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id
          pellentesque Lorem ipsum dolor sit amet consectetur. Pellentesque
          vitae in cras nisl ac vitae tortor non.Lorem ipsum dolor sit amet
          consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed
          pulvinar porta sodales quis vitae. Id pellentesque Lorem ipsum dolor
          sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor
          non.Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras
          nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id
          pellentesque Lorem ipsum dolor sit amet consectetur. Pellentesque
          vitae in cras nisl ac vitae tortor non.Lorem ipsum dolor sit amet
          consectetur
        </p>
        <div>
          <button
            className="single-event-hero-btn-mobile"
            onClick={() => {
              setShowForm(true);
            }}
          >
            Regester Now
          </button>
        </div>
      </div>
      <div>
        <SingleEventComponent />
      </div>
      <Modal
        isOpen={showForm}
        onRequestClose={closeForm}
        className="modal-form"
        overlayClassName="my-modal-overlay"
      >
        <div className="single-event-form-container">
          <div className="single-event-form-img-container">
            <img
              src="https://images.unsplash.com/photo-1541336032412-2048a678540d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNpdHl8ZW58MHx8MHx8fDA%3D"
              alt="single event image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem 0rem 0rem 1rem",
              }}
            />
          </div>
          <div className="single-event-form-content-container">
            <div style={{ textAlign: "end" }} onClick={closeForm}>
              X
            </div>
            <div className="single-event-form-content-holder">
              <div style={{ padding: "10%" }} className="form-steps">
                a
              </div>
              <div className="form-fields-lables-container">
                <div className="single-event-form-heading">
                  Future of AI Confenrence
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, rem? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Voluptatibus, vero.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    columnGap: "2rem",
                  }}
                >
                  <div>
                    <div className="single-event-form-lable">First Name</div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="single-event-form-input"
                        placeholder="enter your first name"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="single-event-form-lable">Last Name</div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="single-event-form-input"
                        placeholder="enter your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="single-event-form-lable">Email</div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="single-event-form-input"
                        placeholder="enter your e-mail"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="single-event-form-lable">Phone Number</div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="single-event-form-input"
                        placeholder="enter your phone number"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      margin: "1rem 0rem",
                      display: "flex",
                      justifyContent: "flex-end",
                      columnGap: "0.5rem",
                    }}
                  >
                    <button
                      className="single-event-form-cancel"
                      onClick={closeForm}
                    >
                      Cancel
                    </button>
                    <button className="single-event-form-next">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SingleEvent;
