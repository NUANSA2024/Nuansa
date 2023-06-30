import React from "react";
import "../index.css";
import "../fonts.css";
function NUANSAPage() {
  return (
    <div style={{ fontFamily: "futura" }}>
      <h1
        style={{
          position: "absolute",
          top: "1900px",
          left: "300px",
          lineHeight: "0.3",
          zIndex: "3",
          display: "inline-flex",
        }}
      >
        This Year's NUANSA
      </h1>
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
    </div>
  );
}

export default NUANSAPage;
