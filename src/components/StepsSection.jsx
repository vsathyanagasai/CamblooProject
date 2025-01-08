import React, { Component } from "react";
import "./StepsSection.css";

class StepsSection extends Component {
  render() {
    return (
      <div className="steps-section">
        <h2 className="steps-title">How to start using Cambloo easily today</h2>
        <div className="steps-container">
          {/* Step 1 */}
          <div className="step-card step-card-1">
            <span className="step-number">1</span>
            <span className="step-title">Register for free</span>
            <p className="step-desc">Sign up online or in our app for</p>
            <p className="step-desc">Quick, simple, and free</p>
            <p className="step-desc">Start your AI journey now</p>
            <p className="step-desc">No hidden fees or extra steps</p>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <span className="step-number">2</span>
            <span className="step-title">Customize your learning</span>
            <p className="step-desc">Choose learning preferences</p>
            <p className="step-desc">AI adjusts to your personal needs</p>
            <p className="step-desc">Customized content for learner</p>
            <p className="step-desc">Learn faster with targeted</p>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <span className="step-number">3</span>
            <span className="step-title">Get real-time feedback</span>
            <p className="step-desc">Receive real-time feedback</p>
            <p className="step-desc">AI adapts as you progress</p>
          </div>
        </div>
        <button className="join-button">Join Waitlist Now</button>
      </div>
    );
  }
}

export default StepsSection;
