import React from 'react'

const CardAll = ({Image,Name,Price,id}) => {
  return (
    <div>
        <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
          <div
            key={id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              src={Image} // Replace with the correct field name from your data
              alt={Name} // Replace with the correct field name from your data
              className="h-48 w-full mb-4 rounded-t-lg p-2"
            />
            <div className="flex-grow px-4 pb-4">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
                {Name} {/* Replace with the correct field name from your data */}
              </h5>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${Price} {/* Replace with the correct field name from your data */}
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
    
      </div>
    </div>

    </div>
  )
}

export default CardAll