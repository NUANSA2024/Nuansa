import React, { useEffect, useState } from 'react';


const ScrollApp = () => {
  // Array of page IDs
  const pageIds = [ "IntroPage","AboutNuansa","NuansaPage", "NuansaHistory","ContactUs"];

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(0);

  // Function to scroll to a specific page
  const scrollToPage = (pageId) => {
    const page = document.getElementById(pageId);
    if (page) {
      page.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Event listener for wheel scrolling
  const handleWheelScroll = (event) => {
    // Calculate the direction of scroll based on deltaY
    const direction = event.deltaY > 0 ? 1 : -1;

    // Update the current page
    setCurrentPage((prevPage) => {
      let nextPage = prevPage + direction;

      // Ensure the current page is within bounds
      nextPage = Math.max(0, Math.min(nextPage, pageIds.length - 1));

      // Scroll to the corresponding page
      scrollToPage(pageIds[nextPage]);

      return nextPage;
    });
  };

  // Add wheel event listener when the component mounts
  useEffect(() => {
    document.addEventListener('wheel', handleWheelScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('wheel', handleWheelScroll);
    };
  }, []);

  return (
    <div>
      {pageIds.map((pageId, index) => (
        <div key={index} id={pageId} style={{ height: '100vh' }}>
          {/* Page content goes here */}
          <h1>{pageId}</h1>
        </div>
      ))}
    </div>
  );
};

export default ScrollApp;
