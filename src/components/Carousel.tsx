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
    { id: 1, image: "/NuansaHistory_2019.jpg", alt: "NUANSA 2019 - Lukisan Jati" },
    { id: 2, image: "/NuansaHistory_2018.jpg", alt: "NUANSA 2018 - Tasasek" },
    { id: 3, image: "/NuansaHistory_2017.jpg", alt: "NUANSA 2017 - Galigo" },
    { id: 4, image: "/NuansaHistory_2016.jpg", alt: "NUANSA 2016 - Rhapsody" },
    { id: 5, image: "/NuansaHistory_2015.jpg", alt: "NUANSA 2015 - Flowers of Asmat" },
    { id: 6, image: "/NuansaHistory_2014.jpg", alt: "NUANSA 2014 - The Priyayi" },
    { id: 7, image: "/NuansaHistory_2013.jpg", alt: "NUANSA 2013 - Dance of the Earth" },
    { id: 8, image: "/NuansaHistory_2012.jpg", alt: "NUANSA 2012 - Canting" },
    { id: 9, image: "/NuansaHistory_2011.jpg", alt: "NUANSA 2011 - CA BAU KAN" },
    { id: 10, image: "/NuansaHistory_2010.jpg", alt: "NUANSA 2010 - The Earth of Mankind" },
    { id: 11, image: "/NuansaHistory_2009.jpg", alt: "NUANSA 2009 - Unfulfilled Love" },
    { id: 12, image: "/NuansaHistory_2008.jpg", alt: "NUANSA 2008 - Prambanan - A Thousand Beauties" },
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
