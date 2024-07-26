import React, { useState, useEffect } from "react";

const Cards = () => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      })
      .catch(err => {
        console.error(err.message);
        setFetchError("Loading.....");
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      setData(prevData => prevData.filter(product => product.id !== id));
    })
    .catch(error => {
      console.error(`Error deleting product with id ${id}:`, error);
    });
  }

  return (
    <>
      {fetchError && <p>{fetchError}</p>}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((eachData) => (
            <div className="card bg-white shadow-md rounded-lg overflow-hidden" key={eachData.id}>
              <div className="img-container p-4">
                <img src={eachData.images[0]} className="w-full h-48 object-cover" alt={eachData.title} />
              </div>
              <div className="card-body p-4">
                <h5 className="card-title text-lg font-semibold mb-2">{eachData.title}</h5>
                <p className="card-text text-sm text-gray-600">
                  Category: {eachData.category}<br />
                  Rating: {eachData.rating}<br />
                  Stock: {eachData.stock}<br />
                  Price: ${eachData.price}<br />
                </p>
                <button className="btn btn-primary mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => handleDelete(eachData.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
