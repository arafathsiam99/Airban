import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
     const [products, setProducts] = useState([]);

      useEffect(() => {
        fetch("http://localhost:8000/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
      console.log(products);
    return (
      <>
        <p className="text-center text-2xl text-orange-500 font-semibold">
          Collection
        </p>
        <h1 className="text-center text-3xl text-blue-800 font-bold">
          Best Eyewear Collection
        </h1>
        <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto  my-5">
          {products.map((item) => (
            <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
              <div className="relative w-full h-48">
                <img
                  src={item.img}
                  className="object-cover w-full h-full rounded-t"
                  alt="Plan"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                <div>
                  <div className="text-lg font-semibold">{item.name}</div>
                  <p className="text-sm text-gray-900">{item.description}</p>
                  <div className="mt-1 mb-4 mr-1 text-3xl sm:text-5xl">
                    ${item.price}
                  </div>
                </div>
                <Link to={`/booking/${item._id}`}>
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-orange-400 hover:bg-orange-500 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Click To Buy
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    );
};

export default Products;