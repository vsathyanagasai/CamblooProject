import React, { Component } from "react";
import "./IntroSection.css";
import aiGif from '../assets/ai-video.gif';  // Adjust the path to your actual file location

class IntroSection extends Component {
  render() {
    return (
      <div className="intro-section">
        {/* Introducing Cambloo AI */}
        <div className="main-text">
          Introducing Cambloo AI✨
        </div>

        {/* Description Text */}
        <span className="sub-text-intro">
          Cambloo AI's Multi-Dimensional Lens sees beyond the surface
        </span>
        <span  style={{marginTop:"10px"} } className="sub-text-intro">
          It guides you towards a brighter future.
        </span>

        {/* Get Started Button */}
        <div className="button-container-intro">
          <button className="get-started-btn">Get Started for Free</button>
        </div>

        {/* GIF */}
        <div className="gif-container-intro">
          <img
            src={aiGif}  // Use the imported gif path here
            alt="Cambloo AI"
            className="gif-intro"
          />
        </div>

       
      </div>
    );
  }
}

export default IntroSection;
