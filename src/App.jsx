import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./app.css";
import IntroSection from "./components/introsection";
import TrainCloneSection from "./components/TrainCloneSection";
import ImageBoxSection from  "./components/ImageBoxSection";
import StepsSection from "./components/StepsSection";
import SuperchargeSection from "./components/SuperchargeSection";
import Footer from "./components/footer";
import FinalSection from "./components/finalsection";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <IntroSection/>
        <TrainCloneSection/>
        <ImageBoxSection/>
        <StepsSection/>
        <FinalSection/>
        <SuperchargeSection/>
        <Footer/>
        {/* Add more components as you clone additional sections */}
      </div>
    );
  }
}

export default App;
