import React from "react";
// import logo from "./logo.svg";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page1 />
        <img
          src="/first_page.png"
          style={{ position: "relative", top: "50px", left: "300px" }}
        ></img>
      </header>
      <header className="App-header2">
        <Page2 />
      </header>
      <header className="App-header3">
        {/* <img
          src="/Greybox.png"
          style={{
            height: 400,
            width: 950,
            position: "relative",
            top: "250px",
            left: "300px",
            zIndex: "0",
          }}
        ></img> */}
        <img
          src="/keong with leaves.png"
          style={{
            height: 225,
            position: "relative",
            top: "150px",
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
            position: "relative",
            top: "200px",
            left: "-150px",
            zIndex: "1",
          }}
        ></img>
      </header>
    </div>
  );
}

export default App;
