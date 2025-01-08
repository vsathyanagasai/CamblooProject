import React, { Component } from "react";
import "./FinalSection.css";
import FirstPic from "../assets/1st-pic.png";
import SecondPic from "../assets/2nd-pic.png";
import ThirdPic from "../assets/3rd-pic.png";
import FourthPic from "../assets/4th-pic.png";

class FinalSection extends Component {
  render() {
    return (
      <div className="final-section">
        {/* Headings */}
        <div className="heading">
          <span className="elevate-learning">Elevate your learning and</span>
          <span className="career-with-ai">career with AI-driven tools</span>
        </div>

        {/* Rectangles Container */}
        <div className="rectangles-container">
          {/* First Rectangle */}
          <div className="rectangle rectangle-1">
            <h3 className="rectangle-heading">Upcoming Live Sessions</h3>
            <p className="rectangle-subtext">
              <span>Join live sessions with industry leaders.</span><br />
              <span>Explore trending topics, build skills,</span><br />
              <span>and connect with professionals</span><br />
              <span>from all around the world. Sign up today!</span>
            </p>
            <div className="row">
              <button className="learn-more-button">Learn more</button>
              <img className="image1" src={FirstPic} alt="Upcoming Live Sessions" />
            </div>
          </div>

          {/* Second Rectangle */}
          <div className="rectangle rectangle-2">
            <h3 className="rectangle-heading">Join Our Community</h3>
            <p className="rectangle-subtext">
              <span>Connect with peers and experts,</span><br />
              <span>join discussions that spark growth,</span><br />
              <span>share knowledge, exchange ideas,</span><br />
              <span>and engage in projects that build your skills.</span>
            </p>
            <div className="row">
              <button className="learn-more-button">Learn more</button>
              <img className="image2" src={SecondPic} alt="Join Our Community" />
            </div>
          </div>

          {/* Third Rectangle */}
          <div className="rectangle rectangle-3">
            <h3 className="rectangle-heading">Employment Marketplace</h3>
            <p className="rectangle-subtext">
              <span>Unlock exclusive job offers, gigs, and</span><br />
              <span>collaborations. Explore projects that</span><br />
              <span>match your skills and career goals, and</span><br />
              <span>start your next big opportunity today.</span>
            </p>
            <div className="row">
              <button className="learn-more-button">Learn more</button>
              <img className="image3" src={ThirdPic} alt="Employment Marketplace" />
            </div>
          </div>

          {/* Fourth Rectangle */}
          <div className="rectangle rectangle-4">
            <h3 className="rectangle-heading">Personalized Mentorship</h3>
            <p className="rectangle-subtext">
              <span>Access personalized mentorship from</span><br />
              <span>professionals matched by AI. Receive</span><br />
              <span>expert advice, improve your skills, and</span><br />
              <span>achieve your career aspirations faster.</span>
            </p>
            <div className="row">
              <button className="learn-more-button">Learn more</button>
              <img className="image4" src={FourthPic} alt="Personalized Mentorship" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FinalSection;
