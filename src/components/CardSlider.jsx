import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Papa from 'papaparse';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CardSlider = () => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    fetch('/wearables.csv')
      .then(response => response.text())
      .then(csvData => {
        const parsedData = Papa.parse(csvData, { header: true }).data;
        setData(parsedData);
        console.log(parsedData[0]); // Log the first item to check structure
      })
      .catch(error => {
        console.error(error);
        setFetchError("Error loading CSV data");
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='px-8'>
      <h1 className='mt-11 ml-4 font-semibold text-3xl'>Recommended Products</h1>
      <Carousel responsive={responsive} infinite={true}>
        {data.slice(0, 10).map((eachData, index) => (
          <div
            key={index}
            className="flex flex-col items-center mt-11 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
          >
            <img
              src={eachData.Image} // Replace with the correct field name from your data
              alt={eachData.Name} // Replace with the correct field name from your data
              className="h-48 w-full mb-8 rounded-t-lg"
            />
            <div className="flex-grow px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
                {eachData.Name} {/* Replace with the correct field name from your data */}
              </h5>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${eachData.Price} {/* Replace with the correct field name from your data */}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <Link
        to="/allproducts" // Path to the new page
        className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 block text-center"
      >
        See more
      </Link>
      {fetchError && <p className="text-red-500">{fetchError}</p>}
     
    </div>
  );
}

export default CardSlider;
