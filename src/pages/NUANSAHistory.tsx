import React from "react";
import "../index.css";
import "../fonts.css";
import "../styles/NUANSAHistory.css";
import { Link } from "react-router-dom";
function NUANSAHistory() {
  return (
    <div>
      <h2 className= "header-nuansa-history"
      >
        NUANSA History
      </h2>
      <div style={{display: "flex"}}>
      <Link to="/NUANSA2018" rel="noreferrer">
        <img
          className="grey-box1"
            src="/Greybox.png"
        ></img>
      </Link>
      <img
          className="grey-box2"
          src="/Greybox.png"
      ></img>
      </div>
    </div>
  );
}

export default NUANSAHistory;
