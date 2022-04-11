import React from 'react';

const Products = () => {
    return (
      <>
        <p className="text-center text-2xl text-orange-500 font-semibold">
          Collection
        </p>
        <h1 className="text-center text-3xl text-blue-800 font-bold">
          Best Eyewear Collection
        </h1>
        <div className=" mx-5 my-7">
          {/* Remove py-8 */}
          <div className="mx-auto shadow-sm hover:shadow container py-8">
            <div className="flex flex-wrap items-center lg:justify-between justify-center">
              {/* Card 1 */}
              <div className="mx-2 w-72 lg:mb-0 mb-8">
                <div>
                  <img
                    src="https://i.ibb.co/sqGd7QJ/ACE-MAGNETIC-CLIP-ON-3-1-600x600.jpg"
                    className="w-full h-44"
                  />
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bookmark"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-yellow-500">Featured</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">Sunglass</h2>
                      <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Nice Sunglass</p>
                    <div className="flex mt-4">
                      <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          12 months warranty
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          Complete box
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="text-blue-700 text-xs font-semibold">
                        Bay Area, San Francisco
                      </h2>
                      <h3 className="text-blue-700 text-xl font-semibold">
                        $350
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 1 Ends */}
              {/* Card 2 */}
              <div className="mx-2 w-72 lg:mb-0 mb-8">
                <div>
                  <img
                    src="https://i.ibb.co/GPcftbc/ALDIK-BLUE-MIRROR-2-600x600.jpg"
                    className="w-full h-44"
                  />
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bookmark"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-yellow-500">Featured</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">Sunglass</h2>
                      <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Nice Sunglass</p>
                    <div className="flex mt-4">
                      <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          12 months warranty
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          Complete box
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="text-blue-700 text-xs font-semibold">
                        Bay Area, San Francisco
                      </h2>
                      <h3 className="text-blue-700 text-xl font-semibold">
                        $350
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 Ends */}
              {/* Card 3  */}
              <div className="mx-2 w-72 lg:mb-0 mb-8">
                <div>
                  <img
                    src="https://i.ibb.co/jJPNpzj/ALFIE-TRANSPARENT-GREEN-2-600x600.jpg"
                    className="w-full h-44"
                  />
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bookmark"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-yellow-500">Featured</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">Sunglass</h2>
                      <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Nice Sunglass</p>
                    <div className="flex mt-4">
                      <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          12 months warranty
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          Complete box
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="text-blue-700 text-xs font-semibold">
                        Bay Area, San Francisco
                      </h2>
                      <h3 className="text-blue-700 text-xl font-semibold">
                        $350
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 3 Ends */}
              {/* Card 4  */}
              <div className="w-72 mx-2 lg:mb-0 mb-8">
                <div>
                  <img
                    src="https://i.ibb.co/1zm1BPC/HAND-PAINTED-MOTHER-LANGUAGE-DAY-SUNGLASSES-SIDE-1.jpg"
                    className="w-full h-44"
                  />
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bookmark"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-yellow-500">Featured</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">Sunglass</h2>
                      <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Nice Sunglass</p>
                    <div className="flex mt-4">
                      <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          12 months warranty
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          Complete box
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="text-blue-700 text-xs font-semibold">
                        Bay Area, San Francisco
                      </h2>
                      <h3 className="text-blue-700 text-xl font-semibold">
                        $350
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 4 Ends */}
            </div>
            <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
              {/* Card 1 */}
              <div className="mx-2 w-72 lg:mb-0 mb-8">
                <div>
                  <img
                    src="https://i.ibb.co/X4WnDW6/MYTH-LEOPARD-SIDE-600x600.jpg"
                    className="w-full h-44"
                  />
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bookmark"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-yellow-500">Featured</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">Sunglass</h2>
                      <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Nice Sunglass</p>
                    <div className="flex mt-4">
                      <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          12 months warranty
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          Complete box
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="text-blue-700 text-xs font-semibold">
                        Bay Area, San Francisco
                      </h2>
                      <h3 className="text-orange-500 text-xl font-semibold">
                        $350
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 1 Ends */}
              {/* Card 2 */}
              <div className="mx-2 w-72 lg:mb-0 mb-8">
                <div>
                  <img
                    src="https://i.ibb.co/92Sx6W6/RUMBLE-CLIP-ON-SIDE-600x600.jpg"
                    className="w-full h-44"
                  />
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bookmark"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-yellow-500">Featured</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">Sunglass</h2>
                      <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Nice Sunglass</p>
                    <div className="flex mt-4">
                      <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          12 months warranty
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          Complete box
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="text-blue-700 text-xs font-semibold">
                        Bay Area, San Francisco
                      </h2>
                      <h3 className="text-orange-500 text-xl font-semibold">
                        $350
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 Ends */}
              {/* Card 3  */}
              <div className="mx-2 w-72 lg:mb-0 mb-8">
                <div>
                  <img
                    src="https://i.ibb.co/wKhrwN1/Side-29.jpg"
                    className="w-full h-44"
                  />
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bookmark"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-yellow-500">Featured</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">Sunglass</h2>
                      <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Nice Sunglass</p>
                    <div className="flex mt-4">
                      <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          12 months warranty
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          Complete box
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="text-blue-700 text-xs font-semibold">
                        Bay Area, San Francisco
                      </h2>
                      <h3 className="text-orange-500 text-xl font-semibold">
                        $350
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 3 Ends */}
              {/* Card 4  */}
              <div className="mx-2 w-72 lg:mb-0 mb-8">
                <div>
                  <img
                    src="https://i.ibb.co/Kj42rLm/SOLAR-GUN-GREY-side.jpg"
                    className="w-full h-44"
                  />
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bookmark"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-yellow-500">Featured</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">Sunglass</h2>
                      <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Nice Sunglass</p>
                    <div className="flex mt-4">
                      <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          12 months warranty
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          Complete box
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="text-blue-700 text-xs font-semibold">
                        Bay Area, San Francisco
                      </h2>
                      <h3 className="text-orange-500 text-xl font-semibold">
                        $350
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 4 Ends */}
            </div>
          </div>
        </div>
      </>
    );
};

export default Products;