import React, { Component } from "react";
import "./Navbar.css";
import logo from "../assets/com-icon.png";

class Navbar extends Component {
  state = {
    isMobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }));
  };


  navigateToHome = () => {
    this.setState({ isMobileMenuOpen: false });
    window.location.href = "/"; // Redirect to the home page
  };

  render() {
    const { isMobileMenuOpen } = this.state;

    return (
      <div className="navbar-container">
        {/* Navbar */}
        <div className="navbar">
          {/* Left Section */}
          <div className="navbar-left">
            <img src={logo} alt="Company Logo" className="logo" />
            <span className="company-name">Cambloo</span>
          </div>

          {/* Middle Section */}
          <div className="navbar-middle">
            <span className="nav-link">About Us</span>
            <span className="nav-link">Features</span>
            <span className="nav-link">Book a Demo</span>
            <span className="nav-link">Blog</span>
          </div>

          {/* Right Section */}
          <div className="navbar-right">
            <span className="login">Log In</span>
            <button className="join-waitlist">Join Waitlist</button>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={this.toggleMobileMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <img src={logo} alt="Company Logo" className="logo" />
            <div className="cancel" onClick={this.navigateToHome}>✕</div>

            <div className="nav-links-container">
              <span className="nav-link">About Us</span>
              <span className="nav-link">Features</span>
              <span className="nav-link">Book a Demo</span>
              <span className="nav-link">Blog</span>
            </div>

            <button className="login1">Log In</button>
            <button className="join-waitlist">Join Waitlist</button>
          </div>
        )}

      </div>
    );
  }
}

export default Navbar;
