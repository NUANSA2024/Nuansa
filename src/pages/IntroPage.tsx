import React from "react";
import "../index.css";
import "../fonts.css";
function IntroPage() {
  return (
    <div style={{ fontFamily: "cursive" }}>
      <h1
        style={{
          position: "absolute",
          top: "250px",
          left: "200px",
          lineHeight: "0.3",
          fontFamily: "aloja",
        }}
      >
        NUANSA
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "390px",
          left: "190px",
          lineHeight: "0.4",
          fontFamily: "aloja",
        }}
      >
        2024
      </h1>
      <img
        src="/first_page.png"
        style={{ position: "absolute", top: "50px", left: "850px" }}
      ></img>
    </div>
  );
}

export default IntroPage;
