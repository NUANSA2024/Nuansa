import React from "react";
import "../index.css";
import "../fonts.css";
import { Link } from "react-router-dom";
function NUANSAHistory() {
  return (
    <div id="wrapper" style={{ fontFamily: "cursive" }}>
      <h1
        style={{
          fontFamily: "aloja",
          textAlign: "center"
        }}
      >
        NUANSA History
      </h1>
      <div style={{display: "flex"}}>
      <Link to="/NUANSA2018" rel="noreferrer">
        <img
          src="/Greybox.png"
          style={{
            height: 400,
            width: "40vw",
            alignSelf: "left",
            marginRight: "2vw"
          }}
        ></img>
      </Link>
      <img
        src="/Greybox.png"
        style={{
          height: 400,
          width: "40vw",
          alignSelf: "right",
          marginLeft: "2vw"
        }}
      ></img>
      </div>
    </div>
  );
}

export default NUANSAHistory;
