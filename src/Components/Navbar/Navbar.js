import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import Fade from "react-reveal/Fade";
import useFirebase from "../Hooks/useFirebase";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user, logout } = useFirebase();
  const handleLogout = () => {
    logout();
  };

  const items = [
    { name: "Home", to: "/" },
    { name: "My Orders", to: "/myorders" },
    { name: "Manage All Orders", to: "/manageallorders" },
    { name: "Add New Product", to: "/addproduct" },
    { name: "About", to: "/about" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
    { name: "Dashboard", to: "/dashboard" },
    { name: "More Sunglasses", to: "/moresunglasses" },
    { name: "Add Review", to: "/addreview" },
  ];

  return (
    <header className="z-50 shadow-lg mx-6">
      <div className="container lg:pb-0 text-lg font-semibold text-gray-800">
        <div className="flex gap-x-4 justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <img
                className="my-3 "
                width="200px"
                src="https://i.ibb.co/YZZrJcP/logo-cassavania.png"
                alt="Airban"
              />
            </div>
          </Link>

          {/*========== dynamic icon ==========*/}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden p-2 border-2 border-green-500 focus:ring-4 ring-offset-1 ring-green-200 transition duration-500 rounded-lg"
          >
            {mobileMenu ? (
              <VscChromeClose className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" />
            )}
          </button>

          <div className="hidden lg:flex items-center gap-x-5">
            <nav className="flex items-center gap-x-5">
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/"
              >
                <h1>Home</h1>
              </NavLink>
              {user?.email && (
                <NavLink className="custom-link" to="/dashboard">
                  Dashboard
                </NavLink>
              )}
              <NavLink className="custom-link" to="/moresunglasses">
                More Sunglasses
              </NavLink>

              {/* <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/addproduct"
              >
                <h1>Add New Product</h1>
              </NavLink> */}

              {/* <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/myorders"
              >
                <h1>My Orders</h1>
              </NavLink> */}

              {/* <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/manageallorders"
              >
                <h1>Manage All Orders</h1>
              </NavLink> */}

              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/aboutus"
              >
                <h1>About Us</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/blog"
              >
                <h1>Blog</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/contact"
              >
                <h1>Contact</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/feature"
              >
                <h1>Feature</h1>
              </NavLink>

              {/* <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/addreview"
              >
                <h1>Add Review</h1>
              </NavLink> */}
            </nav>

            <div>
              <div className="flex gap-x-2">
                {!user?.email ? (
                  <Link to="/login">
                    <button className="font-semibold px-6 py-2 rounded-full border-2 border-green-600 hover:bg-green-700 hover:text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500">
                      Log In
                    </button>
                  </Link>
                ) : (
                  <button
                    className="font-semibold px-6 py-2 rounded-full border-2 border-red-600 hover:bg-red-700 hover:text-white focus:ring-4 ring-red-400 ring-offset-1 transition duration-500"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}

                {/*============ extra button ============*/}

                {/* <button className="font-semibold px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500">Sign Up</button> */}
              </div>

              {/*============= user profile =============*/}

              {/* <div className="flex items-center gap-x-3">
                                <img width="50px" src="https://image.flaticon.com/icons/png/512/206/206853.png" alt="user" />
                                <h1>Jhon Doe</h1>
                                <button className="px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500">Sign Out</button>
                            </div> */}
            </div>
          </div>
        </div>

        {/*============== mobile menu =============*/}

        {mobileMenu && (
          <Fade left>
            <div className="lg:hidden flex flex-col">
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/"
              >
                <h1>Home</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/addproduct"
              >
                <h1>Add New Product</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/dashboard"
              >
                <h1>Dashboard</h1>
              </NavLink>
              <NavLink className="custom-link" to="/moresunglasses">
                More Sunglasses
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/myorders"
              >
                <h1>My Orders</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/manageallorders"
              >
                <h1>Manage All Orders</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/aboutus"
              >
                <h1>About Us</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/blog"
              >
                <h1>Blog</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/contact"
              >
                <h1>Contact</h1>
              </NavLink>
              <NavLink
                className={(info) =>
                  info.isActive
                    ? "text-green-600 font-bold border-b-2 border-green-600"
                    : ""
                }
                to="/feature"
              >
                <h1>Feature</h1>
              </NavLink>

              <div>
                <div className="flex gap-x-2">
                  <Link to="/login">
                    <button className="font-semibold px-6 py-2 rounded-full border-2 border-green-600 hover:bg-green-700 hover:text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500 mt-3 mb-5">
                      Login
                    </button>
                  </Link>

                  {/*============ extra button ============*/}

                  {/* <button className="font-semibold px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500">Sign Up</button> */}
                </div>

                {/*============= user profile =============*/}

                {/* <div className="flex flex-wrap gap-y-4 items-center gap-x-3 mb-5">
    
                                        <img width="50px" src="https://image.flaticon.com/icons/png/512/206/206853.png" alt="user" />
                                        <h1>Jhon Doe</h1>
                                        <button className="px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500">Sign Out</button>
    
                                    </div> */}
              </div>
            </div>
          </Fade>
        )}
      </div>
    </header>
  );
};

export default Navbar;
