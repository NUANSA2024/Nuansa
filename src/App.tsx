import React from "react";
import Page1 from "./pages/IntroPage";
import Page2 from "./pages/AboutPage";
import Page3 from "./pages/NUANSAPage";
import "./App.css";
import "./index.css";
import "./fonts.css";
import NUANSAHistory from "./pages/NUANSAHistory";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page1 />
        <img
          src="/first_page.png"
          style={{ position: "absolute", top: "50px", left: "850px" }}
        ></img>
      </header>
      <header className="App-header2">
        <Page2 />
      </header>
      <header className="App-header3">
        <img
          src="/Greybox.png"
          style={{
            height: 400,
            width: 850,
            position: "absolute",
            top: "2100px",
            left: "340px",
            zIndex: "0",
          }}
        ></img>
        <img
          src="/keong with leaves.png"
          style={{
            height: 225,
            position: "absolute",
            top: "2350px",
            left: "150px",
            zIndex: "1",
            display: "flex",
          }}
        ></img>
        <Page3 />

        <img
          src="/girl_drinks coffee.png"
          style={{
            height: 500,
            position: "absolute",
            top: "2100px",
            left: "1050px",
            zIndex: "1",
          }}
        ></img>
      </header>
      <header className="App-header4">
        <NUANSAHistory />
        <img
          src="/Greybox.png"
          style={{
            height: 400,
            width: 750,
            position: "absolute",
            top: "3250px",
            left: "0px",
            zIndex: "0",
          }}
        ></img>
        <img
          src="/Greybox.png"
          style={{
            height: 400,
            width: 750,
            position: "absolute",
            top: "3250px",
            left: "780px",
            zIndex: "0",
          }}
        ></img>
      </header>
      <header className="App-header5">
        <ContactUs />
        <img
          src="/message.png"
          style={{
            height: 80,
            width: 80,
            position: "absolute",
            top: "4100px",
            left: "700px",
            zIndex: "0",
          }}
        ></img>
        <img
          src="/person.png"
          style={{
            height: 80,
            width: 80,
            position: "absolute",
            top: "4100px",
            left: "500px",
            zIndex: "0",
          }}
        ></img>
        <img
          src="/phone.png"
          style={{
            height: 80,
            width: 80,
            position: "absolute",
            top: "4100px",
            left: "900px",
            zIndex: "0",
          }}
        ></img>
      </header>
    </div>
  );
}

export default App;
