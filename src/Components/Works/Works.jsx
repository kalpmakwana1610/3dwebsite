import React from "react";
import styled from "styled-components";
import Mars from "./Mars";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Works = () => {
  return (
    <Section>
      <div className="container-fluid row home">
        <div className="col-md-5 homedetail">
          <div className="title">-Mars</div>

          <p>
            <b>It's dry, rocky, and bitter cold.</b>The fourth planet from the
            Sun, Mars, is one of Earth's two closest planetary neighbors (Venus
            is the other). Mars is one of the easiest planets to spot in the
            night sky – it looks like a bright red point of light.
          </p>
          <button className="learnmore">Learn more</button>
        </div>
        <div className="col-md-7  earthmodel">
          <Mars />
        </div>
      </div>
    </Section>
  );
};

export default Works;
