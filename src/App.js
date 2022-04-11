import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Instagram from "./Components/Instagram/Instagram";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Products from "./Components/Products/Products";
import Testimonials from "./Components/Testimonials/Testimonials";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import Feature from "./Pages/Feature/Feature";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

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
          <Route exact path="/products">
            <Products></Products>
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
          <Route exact path="/instagram">
            <Instagram></Instagram>
          </Route>
          <Route exact path="/news">
            <News></News>
          </Route>
          <Route exact path="/feature">
            <Feature></Feature>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
        </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
