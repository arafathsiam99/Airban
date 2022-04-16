import React, { useState } from "react";
import useFirebase from "../Hooks/useFirebase";

const MakeAdmin = () => {
  const {admin}= useFirebase();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:8000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
    e.preventDefault();
    console.log(admin);
  };
  return (
    <div
      className=" dark:bg-blue-800 flex items-center justify-center"
      style={{ fontFamily: '"Lato", sans-serif' }}
    >
      <div className="flex md:flex-row flex-col items-center py-8 px-4">
        {/* Code block starts */}
        <div className="flex flex-col md:mr-16">
          <form onSubmit={handleAdminSubmit}>
            <label
              htmlFor="email"
              className="text-orange-400 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              Enter email Address To make an Admin
            </label>
            <input
              id="email"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow my-3"
              onBlur={handleOnBlur}
              placeholder="Enter email address"
            />
            <button className="text-white focus:outline-none bg-orange-400 hover:bg-orange-500 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 my-5">
              Make An Admin
            </button>
          </form>
          <br />
          {success && (
            <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div class="flex items-center justify-center w-12 bg-emerald-500">
                <svg
                  class="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                  <span class="font-semibold text-emerald-500 dark:text-emerald-400">
                    Success
                  </span>
                  <p class="text-sm text-gray-600 dark:text-gray-200">
                    Made Admin Successfully!!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
