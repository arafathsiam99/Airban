import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";

const Booking = () => {
    const { user } = useFirebase();
    const { id } = useParams();
    const [item, setItem] = useState({});

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      data.packageName = item?.name;
      data.packageImg = item?.img;
      data.status = "Pending";
      console.log(item?.name);

      fetch("http://localhost:8000/placeorders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
    };

    useEffect(() => {
      fetch(`http://localhost:8000/placebooking/${id}`)
        .then((res) => res.json())
        .then((data) => setItem(data));
    }, []);
    console.log(item);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center  font-semibold text-blue-800 my-8">
        Book This Sunglass
      </h1>

      <div className="flex justify-center shadow-md w-3/4 mx-auto p-12">
        <div>
          <h2 className="text-4xl my-6 text-orange-500">{item?.name}</h2>
          <img className="w-1/2" src={item?.img} alt="" />
          <p>{item?.description}</p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user?.displayName}
              className="p-2 m-2 border-2 rounded"
              {...register("name")}
              placeholder="user Name"
            />
            <br />
            <input
              defaultValue={user?.email}
              className="p-2 m-2"
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
            />
            <br />
            <input
              className="p-2 m-2"
              {...register("address")}
              placeholder="Address"
            />
            <br />
            <input
              className="p-2 m-2"
              type="Date"
              {...register("Date", { required: true })}
              placeholder="Date"
            />

            {errors.exampleRequired && <span>This field is required</span>}
            <br />

            <input
              className="focus:outline-none text-black bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-white"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
