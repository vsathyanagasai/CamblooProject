import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import logo from "../assets/com-icon.png";
import qrCode from "../assets/qr-code.png"; // Import QR code image
import appStore from "../assets/app-store.png"; // Import App Store image
import googlePlay from "../assets/play-store.png"; // Import Google Play image

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-section">
          {/* Left Section */}





          <div className="company-info">


<div className="info1"   style={{
  display:"flex",
  flexDirection:"column",

}}> 
            <div className="logo-container">
              <img src={logo} alt="Logo" className="company-logo" />
              <span className="cambloo">cambloo</span>
            </div>
            <span className="subtext">
              Unlock your potential with a personal AI clone,
            </span>
            <span className="subtext">guiding you to achieve more every day.</span>

            <div className="social-icons">
              {/* Reordered FontAwesome Icons */}
              <div className="icon">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faDiscord} />
              </div>
            </div>

            </div>




            <div className="qr-section">
              {/* Use imported qr-code.png */}
              <div className="qr-code" style={{ backgroundImage: `url(${qrCode})` }}></div>
              <div className="app1"> Get the app now!</div>
              <div className="app-buttons">
                {/* Use imported app-store.png and google-play.png */}
                <div className="app-store">
                  <img src={appStore} alt="App Store" width="120" />
                </div>
                <div className="google-play">
                  <img src={googlePlay} alt="Google Play" width="120" />
                </div>
              </div>
            </div>
          </div>














          {/* Middle Sections */}
          <div className="footer-columns">
            <div className="column">
              <span className="column-title">Product</span>
              <span className="column-item">Courses</span>
              <span className="column-item">AI Mentorship</span>
              <span className="column-item">Live Sessions</span>
            </div>
            <div className="column">
              <span className="column-title">Product</span>
              <span className="column-item">Courses</span>
              <span className="column-item">AI Mentorship</span>
            </div>
            <div className="column">
              <span className="column-title">Product</span>
              <span className="column-item">Courses</span>
              <span className="column-item">AI Mentorship</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-links">
            <span className="privacy-policy">Privacy policy</span>
            <span className="terms">Terms of Conditions</span>
          </div>
          <span className="footer-right">@ cambloo Inc.2024</span>
        </div>
      </div>
    );
  }
}

export default Footer;
