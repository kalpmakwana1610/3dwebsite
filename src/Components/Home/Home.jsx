import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import Who from "../Who/Who";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";
import "../Home/Home.css";
import Earth from "./Earth";
import videobg from "../../assets/videobg.mp4";
const Section = styled.div`
  height: 100vh;

  scroll-snap-align: center;
`;
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// `;

const Home = () => {
  return (
    <Section>
      {/* <video src={videobg} autoPlay loop /> */}
      <div className="container solar"> <h1>Solar system</h1></div>
      <div className="container-fluid row home">
        <div className="col-md-5 homedetail">
         
          <div className="title wwd">-Earth </div>
          <div className=""> </div>
          <p>
            <b>
              {" "}
              Earth is only the fifth largest planet in the solar system, it is
              the only world in our solar system with liquid water on the
              surface.
            </b>{" "}
            Just slightly larger than nearby Venus, Earth is the biggest of the
            four planets closest to the Sun, all of which are made of rock and
            metal.
          </p>
          <button className="learnmore">Learn more</button>
        </div>
        <div className="col-md-7  earthmodel">
          <Earth />
        </div>
      </div>
    </Section>
  );
};

export default Home;
