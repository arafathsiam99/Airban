import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Blog from "./Pages/Blog/Blog";
import Feature from "./Pages/Feature/Feature";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";

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
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/feature">
            <Feature></Feature>
          </Route>
        </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
