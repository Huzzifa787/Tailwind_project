import React, { useState } from 'react';
import Card from './Card';
import Layout from '../Layout/Layout';
const Home = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Total number of slides
  const totalSlides = 3;

  // Handle previous button click
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Handle next button click
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Handle the carousel slide indicator click
  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Layout>
      <div id="indicators-carousel" className="relative w-full">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Carousel Item 1 */}
          <div
            className={`duration-700 ease-in-out ${currentSlide === 0 ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1726754457459-d2dfa2e3a434?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          {/* Carousel Item 2 */}
          <div
            className={`duration-700 ease-in-out ${currentSlide === 1 ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1682141007707-1f09c5a1d814?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          {/* Carousel Item 3 */}
          <div
            className={`duration-700 ease-in-out ${currentSlide === 2 ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1678565999588-08fdd0b1410b?q=80&w=1594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          
        </div>

        {/* Carousel indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-700' : 'bg-gray-500'}`}
              aria-current={currentSlide === index ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleSlideClick(index)}
            ></button>
          ))}
        </div>

        {/* Previous button */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next button */}
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      {/* Different Cards */}  
      <br />

      
    </Layout>
  );
};

export default Home;
