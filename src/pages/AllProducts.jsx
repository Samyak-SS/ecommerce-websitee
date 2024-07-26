import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const AllProducts = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categoryBtn, setCategoryBtn] = useState("All");
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [query, setQuery] = useState("");

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setCategoryBtn(category);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const filteredData = (data, selectedBtn, query) => {
    let filterData = data;

    if (query) {
      filterData = filterData.filter(({ Name }) => 
        Name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedBtn && selectedBtn !== 'All') {
      filterData = filterData.filter(({ Category }) => 
        Category === selectedBtn
      );
    }

    return filterData;
  };

  const result = filteredData(data, categoryBtn, query);

  return (
    <>
      <div style={{ marginTop: '80px' }} className="px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>
        
        <form className="max-w-lg mx-auto">
          <div className="relative flex items-center">
            <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            
            <button 
              type="button"
              onClick={toggleDropdown}
              className="flex-shrink-0 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            >
              {categoryBtn}
              <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            
            {isDropdownOpen && (
              <ul className='absolute left-0 mt-[520px] z-50 w-48 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600'>
                <li>
                  <button 
                    type="button" 
                    onClick={() => handleCategorySelect('All')} 
                    className='w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    All Categories
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => handleCategorySelect('Fitness')} 
                    className='w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Fitness
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => handleCategorySelect('Medical')} 
                    className='w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Medical
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => handleCategorySelect('Lifestyle')} 
                    className='w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Life Style
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => handleCategorySelect('Entertainment')} 
                    className='w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Entertainment
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => handleCategorySelect('Pets and Animals')} 
                    className='w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Pets and Animals
                  </button>
                </li>
              </ul>
            )}
            
            <div className="relative flex-grow ml-2">
              <input 
                type="search" 
                id="search-dropdown" 
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-r-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" 
                placeholder="Search Products..." 
                onChange={handleInputChange}
                required 
              />
              <button 
                type="submit" 
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        <div className="px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {result.map((eachData, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  src={eachData.Image} // Replace with the correct field name from your data
                  alt={eachData.Name} // Replace with the correct field name from your data
                  className="h-48 w-full mb-4 rounded-t-lg p-2"
                />
                <div className="flex-grow px-4 pb-4">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
                    {eachData.Name} {/* Replace with the correct field name from your data */}
                  </h5>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${eachData.Price} {/* Replace with the correct field name from your data */}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
