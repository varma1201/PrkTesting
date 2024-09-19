import { useState, React } from "react";
import "../../styles/About.css";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Questions = [
  {
    question: "How Can I Contact Customer Support?",
    ans: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. ",
  },
  {
    question:
      "What is our approach to sustainability and corporate responsibility?",
    ans: "Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id pellentesque in eu quis non mauris mus proin. ",
  },
];

function FaqConponent() {
  return (
    <div className="FAQ-container">
      <div className="FAQ-title">FAQ</div>
      <p className="faq-content">
        Lorem ipsum dolor sit amet consectetur. Pellentesque vitae in cras nisl
        ac vitae tortor non. Sed pulvinar porta sodales quis vitae. Id
        pellentesque in eu quis non mauris mus proin.
      </p>
      <div className="line-seperator" style={{ width: "100%" }} />
      {Questions.map((que, i) => (
        <QuestionCard key={i} que={que} />
      ))}
    </div>
  );
}

export default FaqConponent;

const QuestionCard = ({ que }) => {
  const [showAns, setShowAns] = useState(false);
  return (
    <>
      <div className="faq-question-container">
        <div onClick={() => setShowAns(!showAns)} className="faq-question">
          <div>{que.question}</div>
          <div className="pointer">
            {/* <img
              src={showAns ? Minus : plus}
              alt=""
            /> */}
            {showAns ? <FaMinus color="#008e2f" /> : <FaPlus color="#008e2f" />}
          </div>
        </div>
        <div>{showAns && <div className="faq-ans">{que.ans}</div>}</div>
      </div>
      <div className="line-seperator" style={{ width: "100%" }} />
    </>
  );
};
