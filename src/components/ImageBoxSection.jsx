import React, { Component } from "react";
import "./ImageBoxSection.css";
import firstPng from "../assets/first-png.png"; // Path to your first PNG image
import secondPng from "../assets/second-png.png"; // Path to your second PNG image

class ImageBoxSection extends Component {
  render() {
    return (
      <div className="parent-section">
        {/* First Section */}
        <div className="first-section">
          <div className="img-container">
            <img src={firstPng} alt="First PNG" className="img" />
          </div>
          <div>
            
          <div className="info-box">
          <div className="info-blank" style={{height:"151px"}}></div>
          <div style={{height:"151px"}}>
            <span className="title">Explore courses built</span>
            <br />
            <span className="title">for your unique path</span>
            <span className="description">Get AI-driven course recommendations</span>
            <span className="description">for your career goals.</span>
            <span className="cta">Start learning now.</span>
            </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="second-section">
          <div className="info-box">
          <div className="info-blank" style={{height:"151px"}}></div>
          <div style={{height:"151px"}}>
            <span className="title">Unlock your AI</span>
            <span className="title">powered Journey</span>
            <span className="description">Cambloo’s AI guides your learning</span>
            <span className="description">Achieve your goals with ease.</span>
            <span className="cta">Start your journey now.</span>
            </div>
          </div>
          <div className="img-container">
            <img src={secondPng} alt="Second PNG" className="img" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageBoxSection;
