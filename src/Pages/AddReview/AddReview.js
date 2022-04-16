import React from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../../Components/Hooks/useFirebase';

const AddReview = () => {
    const user= useFirebase();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
     const onSubmit = (data) => {
       fetch("http://localhost:8000/review", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(data),
       });
       console.log(data);
     };
    return (
      <div className="my-5">
        <h1 className="text-3xl text-blue-800">Please Give Your Review Here</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={user.displayName}
            className="p-2 m-2 border-2	"
            {...register("name")}
            placeholder="user Name"
          />
          <br />
          <input
            className="p-2 m-2 border-2	"
            {...register("review")}
            placeholder="review"
          />
          <br />
          <input
            min="0"
            max="5"
            step="any"
            className="p-2 m-2 border-2	"
            type="number"
            defaultValue="0"
            {...register("rating")}
            placeholder="rating"
          />
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <input
            className="focus:outline-none text-black bg-orange-400 hover:bg-orange-500 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            type="submit"
          />
        </form>
      </div>
    );
};

export default AddReview;