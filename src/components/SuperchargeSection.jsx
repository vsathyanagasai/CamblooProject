import React, { Component } from "react";
import "./SuperchargeSection.css";
import aibot from "../assets/ai-bot.png"; // Importing the AI bot image  

class SuperchargeSection extends Component {
  render() {
    return (
      <div className="supercharge-box">
        {/* Heading */}
        <h2 className="supercharge-heading">
          <span className="line-one">Ready to supercharge your</span>
          <br />
          <span className="line-two">AI-powered learning path?</span>
        </h2>

        {/* Button */}
        <button className="supercharge-btn">
          <span className="btn-text">Get Started for Free</span>
        </button>

        {/* Bot Image */}
        <img src={aibot} alt="AI Bot" className="ai-bot" />
      </div>
    );
  }
}

export default SuperchargeSection;
