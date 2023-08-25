import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "../styles/NUANSAHistory.css";

// Define the type for each item in the carousel
interface CarouselItem {
  id: number;
  image: string;
  alt: string;
}

const ImageCarousel: React.FC = () => {
  const items: CarouselItem[] = [
    { id: 1, image: "/NuansaHistory_1_PNG.png", alt: "NUANSA 2019" },
    { id: 2, image: "/NuansaHistory_2_PNG.png", alt: "NUANSA 2018" },
    { id: 3, image: "/NuansaHistory_3_PNG.png", alt: "NUANSA 2016" },
    { id: 4, image: "/NuansaHistory_3_PNG.png", alt: "NUANSA 2015" },
    { id: 5, image: "/NuansaHistory_3_PNG.png", alt: "NUANSA 2014" },
    { id: 6, image: "/NuansaHistory_3_PNG.png", alt: "NUANSA 2013" },
    { id: 7, image: "/NuansaHistory_3_PNG.png", alt: "NUANSA 2012" },
    { id: 8, image: "/NuansaHistory_3_PNG.png", alt: "NUANSA 2011" },
    { id: 9, image: "/NuansaHistory_3_PNG.png", alt: "NUANSA 2009" },
    // Add more images here if needed
  ];

  const indicatorStyles = {
    marginTop: "-10px",
    verticalAlign: "top",
  };

  const navButtonStyles = {
    marginTop: "-40px",
  };

  return (
    <Carousel
      height="50vh"
      swipe
      animation="slide"
      indicatorContainerProps={{ style: indicatorStyles }}
      navButtonsWrapperProps={{ style: navButtonStyles }}
    >
      {items.map((item) => (
        <Paper className="container-carousel-image" key={item.id}>
          <img className="carousel-image" src={item.image} alt={item.alt} />
          <p className="img__description">{item.alt}</p>
        </Paper>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
