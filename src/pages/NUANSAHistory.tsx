import React from "react";
import "../index.css";
import "../fonts.css";
import { Link } from "react-router-dom";
function NUANSAHistory() {
  return (
    <div style={{ fontFamily: "cursive" }}>
      <h1
        style={{
          position: "absolute",
          top: "2950px",
          left: "350px",
          lineHeight: "0.3",
          fontFamily: "aloja",
        }}
      >
        NUANSA History
      </h1>
      <Link to="/NUANSA2018" rel="noreferrer">
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
      </Link>
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
    </div>
  );
}

export default NUANSAHistory;
