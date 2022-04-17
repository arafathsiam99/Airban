import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Booking from "./Components/Booking/Booking";
import DashBoard from "./Components/DashBoard/DashBoard";
import Instagram from "./Components/Instagram/Instagram";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Products from "./Components/Products/Products";
import Stats from "./Components/Stats/Stats";
import Testimonials from "./Components/Testimonials/Testimonials";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AddProduct from "./Pages/AddProduct/AddProduct";
import AddReview from "./Pages/AddReview/AddReview";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Feature from "./Pages/Feature/Feature";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import MoreSunglasses from "./Pages/MoreSunglasses/MoreSunglasses";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Register from "./Pages/Register/Register";
import Review from "./Pages/Review/Review";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path="/instagram">
            <Instagram></Instagram>
          </Route>
          <Route exact path="/news">
            <News></News>
          </Route>
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/testimonials">
            <Testimonials></Testimonials>
          </Route>
          <Route exact path="/feature">
            <Feature></Feature>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/stats">
            <Stats></Stats>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute exact path="/manageallorders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/addreview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute exact path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute exact path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/addproduct">
            <AddProduct></AddProduct>
          </Route>
          <Route exact path="/moresunglasses">
            <MoreSunglasses></MoreSunglasses>
          </Route>
          <Route exact path="/manageproducts">
            <ManageProducts></ManageProducts>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
