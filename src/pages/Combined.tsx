import React from "react";
import "../App.css";
import "../index.css";
import "../fonts.css";
import NUANSAHistory from "../pages/NUANSAHistory";
import ContactUs from "../pages/ContactUs";
import IntroPage from "../pages/IntroPage";
import AboutPage from "../pages/AboutPage";
import NUANSAPage from "../pages/NUANSAPage";
import Gradient1 from "./Gradient1";
import SponsorPage from "./SponsorsPage";
import NUANSAVideo from "./NUANSAVideo";
function Combined() {
  return (
    <div className="App">
      <h2 className="App-header">
        <IntroPage />
      </h2>
      <h2 className="Gradient1">
        <Gradient1 />
      </h2>
      <h2 className="App-header2">
        <AboutPage />
      </h2>
      <h2 className="App-video">
        <NUANSAVideo />
      </h2>
      <h2 className="Gradient2">
        <NUANSAPage />
      </h2>
      <h2 className="App-header4">
        <NUANSAHistory />
      </h2>
      <h2 className="App-header5">
        <ContactUs />
      </h2>
      <h2 className="App-sponsor">
        <SponsorPage />
      </h2>
    </div>
  );
}

export default Combined;
