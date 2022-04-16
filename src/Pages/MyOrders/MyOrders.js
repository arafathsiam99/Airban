import React, { useEffect, useState } from 'react';
import useFirebase from '../../Components/Hooks/useFirebase';

const MyOrders = () => {
    const [sunglasses, setSunglasses] = useState([]);
    const { user } = useFirebase();
    const [isDeleted, setIsDeleted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setIsLoading(true);

      fetch(`http://localhost:8000/booking/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setSunglasses(data);
        })
        .finally(() => setIsLoading(false));
    }, [user?.email, isDeleted]);
    console.log(sunglasses);

    const handleDelete = (id) => {
      console.log(id);
      const confirm = window.confirm("Are you want to delete this product?");

      if (confirm) {
        fetch(`http://localhost:8000/deleteOrders/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              setIsDeleted(!isDeleted);
              alert("successfully Deleted");
            }
          });
      }
    };
    if (isLoading) {
      return <h1 className="my-5 text-center">Loading..........</h1>;
  }
    return (
      <div className="container py-8 mx-auto">
        <div className="text-center my-4">
          <h2>
            <span className="text-center text-2xl">Sunglass Booked by </span>
            <h1 className="text-3xl font-semibold text-blue-800">
              {user.displayName}
            </h1>
          </h2>
        </div>
        <div className="grid grid-cols-3">
          {sunglasses.packageImg}
          {sunglasses.map((single) => (
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
                onClick={() => handleDelete(single._id)}
                className="focus:outline-none text-black bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-600 mx-2 my-2"
              >
                Delete Order
                {/* <i className="far fa-trash-alt ms-2 ml-2"></i> */}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyOrders;