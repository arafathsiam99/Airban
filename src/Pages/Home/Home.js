import React from "react";
import Instagram from "../../Components/Instagram/Instagram";
import News from "../../Components/News/News";
import Products from "../../Components/Products/Products";
import Stats from "../../Components/Stats/Stats";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <header className="bg-white">
        <nav>
          <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
            <div className="flex items-center justify-between">
              <div>
                {/* <a
                className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-blue-600  dark:hover:text-gray-300"
                href="#"
              >
                Brand
              </a> */}
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                {/* <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button> */}
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className="items-center lg:flex">
              <div className="flex flex-col lg:flex-row lg:mx-6">
                {/* <a
                className="my-1 text-sm font-medium text-blue-600   hover:text-blue-500 lg:mx-4 lg:my-0"
                href="#"
              >
                Home
              </a>
              <a
                className="my-1 text-sm font-medium text-blue-600   hover:text-blue-500  lg:mx-4 lg:my-0"
                href="#"
              >
                Shop
              </a>
              <a
                className="my-1 text-sm font-medium text-blue-600  hover:text-blue-500  lg:mx-4 lg:my-0"
                href="#"
              >
                Contact
              </a>
              <a
                className="my-1 text-sm font-medium text-blue-600  hover:text-blue-500  lg:mx-4 lg:my-0"
                href="#"
              >
                About
              </a> */}
              </div>

              {/* <div className="flex justify-center lg:block">
                <a
                  className="relative text-blue-600  dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                  href="#"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                </a>
              </div> */}
            </div>
          </div>
        </nav>

        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <p className="my-5 mx-9 text-left text-2xl text-orange-500 font-semibold">
                  We are Airban
                </p>
                <h1 className="text-2xl font-semibold text-blue-800 uppercase  lg:text-3xl">
                  Find the Best Fit and Style for your eyes in our store
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro beatae error laborum ab amet sunt recusandae? Reiciendis
                  natus perspiciatis optio.
                </p>
                <button className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-800 rounded-md lg:w-auto hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-2xl"
                src="https://i.ibb.co/yyxxsS6/beautiful-young-cheerful-girl-hat-sunglasses-rests-morning-beach-176420-5853.webp"
                alt="Sunglass with women"
              />
            </div>
          </div>
        </div>
      </header>
      <Products></Products>
      <Testimonials></Testimonials>
      <Review></Review>
      <Instagram></Instagram>
      <News></News>
      <Stats></Stats>
    </div>
  );
};

export default Home;
