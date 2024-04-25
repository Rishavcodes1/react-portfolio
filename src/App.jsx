import React, { useEffect } from "react";
import Navbar from "./components/Others/Navbar";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Others/Footer";

const App = () => {
  
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container-outer">
        <div className="my-container">
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Contact></Contact>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
