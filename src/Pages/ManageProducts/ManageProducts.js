import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [isDeleted, setIsDeleted] = useState(false);
    const [manageProducts, setManageProducts] = useState([]);

      useEffect(() => {
        fetch("http://localhost:8000/manageproducts")
          .then((res) => res.json())
          .then((data) => setManageProducts(data));
      }, [isDeleted]);

      const handleDeleteProducts = (id) => {
        const confirm = window.confirm("Are you want to delete this car?");
        console.log(id);
        if (confirm) {
          fetch(`http://localhost:8000/deleteManageproducts/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.deletedCount) {
                setIsDeleted(!isDeleted);
              } else {
                setIsDeleted(false);
              }
            });
        }
      };
    return (
      <div className="container py-8 mx-auto">
        {/* <div className="text-center my-4">
          <h2>
            <span className="text-center text-2xl">Sunglass Booked by </span>
            <h1 className="text-3xl font-semibold text-blue-800">
              {user.displayName}
            </h1>
          </h2>
        </div> */}
        <div className="grid grid-cols-3">
          {manageProducts.packageImg}
          {manageProducts.map((single) => (
            <div className="mt-5 shadow mx-3 p-4 text-center">
              <img src={single.packageImg} alt="" />
              <h1 className="text-2xl font-medium text-black font-mono">
                {single.packageName}
              </h1>
              <div>
                <p className="text-2xl font-medium text-blue-800">
                  Status: {single.status}
                </p>
              </div>
              <button
                onClick={() => handleDeleteProducts(single._id)}
                className="focus:outline-none text-black bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-600 mx-2 my-2"
              >
                Delete Products
                <i className="far fa-trash-alt ms-2 ml-2"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ManageProducts;