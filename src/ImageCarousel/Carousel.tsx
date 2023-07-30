import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

// Define the type for each item in the carousel
interface CarouselItem {
  id: number;
  image: string;
  alt: string;
}

const ImageCarousel: React.FC = () => {
  const items: CarouselItem[] = [
    { id: 1, image: '/NuansaHistory_1_PNG.png', alt: 'Image 1' },
    { id: 2, image: '/NuansaHistory_2_PNG.png', alt: 'Image 2' },
    { id: 3, image: '/NuansaHistory_3_PNG.png', alt: 'Image 3' },
    // Add more images here if needed
  ];

  return (
    <Carousel>
      {items.map((item) => (
        <Paper key={item.id}>
          <img className="carousel-image" src={item.image} alt={item.alt} />
        </Paper>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
