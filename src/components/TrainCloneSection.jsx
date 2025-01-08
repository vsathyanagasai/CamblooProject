import React from "react";
import "./TrainCloneSection.css";

const TrainCloneSection = () => {
  return (

    <div style={{display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"20px",
    marginBottom:"60px"
  
    }}>
    <div className="train-clone-section">
      {/* Main Text */}
      <span className="main-text1">Your AI Personalized Clone</span>

      {/* Sub Text */}
      <span className="sub-text">
        Train your AI clone to learn and adapt with
      </span>
      <span className="sub-text">you. Get feedback and recommendations</span>
      <span className="sub-text">to boost your progress.</span>

      {/* Button */}
      <div className="button-container">
        <button className="button-text">Train Your Clone</button>
      </div>
    </div>
    </div>
  );
};

export default TrainCloneSection;
