import logo from "./logo.svg";
import "./App.css";
import videobg from "../src/assets/videobg.mp4";
import Home from "./Components/Home/Home";
import Works from "./Components/Works/Works";
import styled from "styled-components";
import Contact from "./Components/Contact/Contact";
import Who from "./Components/Who/Who";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
//  const image = require("../src/images/")


function App() {
  return (
<div>
     <video className="bgvideo" src={videobg} autoPlay loop muted/>
     <div className="contain">
      <Home />
      <Who />
      <Works />
      <Contact />
    </div>
    </div>
  );
}

export default App;
