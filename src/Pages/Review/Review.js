import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-bold text-blue-800 my-5">
        Our Customer Reviews
      </h1>
      <div className="grid max-w-md gap-5 row-gap-5 lg:max-w-screen-lg sm:row-gap-5 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {review.map((item) => (
          <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto">
            <img
              class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://i.ibb.co/Cz1vHzF/feedback-interaction-review-response-word-53876-125202.webp"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.review}
              </p>
              <p>
                <Rating
                  initialRating={item.rating}
                  readonly
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  className="text-white"
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
