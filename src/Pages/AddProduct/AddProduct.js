import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
      fetch(`http://localhost:8000/addproduct`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
    };
    return (
      <div className="my-5 bg-blue-800">
        <h2 className=" my-3 text-3xl text-orange-500">Add A New Sunglass</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 m-2 "
            {...register("name")}
            placeholder="Sunglass Name"
          />
          <br />
          <input
            className="p-2 m-2"
            type="number"
            {...register("price", { required: true })}
            placeholder="price"
          />
          <br />
          <input
            className="p-2 m-2"
            {...register("description", { required: true })}
            placeholder="Description"
          />
          <br />
          <input
            className="p-2 m-2"
            {...register("img", { required: true })}
            placeholder="Image Link"
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <br />

          <input
            className="my-3 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 text-sm font-semibold leading-none text-white focus:outline-none bg-orange-500 border rounded hover:bg-orange-600 py-4 w-1/6"
            type="Submit"
          />
        </form>
      </div>
    );
};

export default AddProduct;