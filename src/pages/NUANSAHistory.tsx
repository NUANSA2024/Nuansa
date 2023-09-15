import React from "react";
import "../index.css";
import "../fonts.css";
import "../styles/NUANSAHistory.css";
import { Link } from "react-router-dom";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import ImageCarousel from "../components/Carousel";
function NUANSAHistory() {
  return (
    <div>
      <div>
    </div>
      <div>
        <h2 className= "header-nuansa-history"
        >
          NUANSA History
        </h2>
      </div>
      <div className="container-carousel">
      <ImageCarousel />
      </div>
    </div>
  );
}

export default NUANSAHistory;
