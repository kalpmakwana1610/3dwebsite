import React from "react";
import styled from "styled-components";
import Saturn from "./Saturn";
import "../Who/Who.css";
const Section = styled.div`
  height: 100vh;

  scroll-snap-align: center;
`;
const Who = () => {
  return (
    <Section className="whomain">
      <div className="container row home">
        <div className="col-md-7  earthmodel">
          <Saturn />
        </div>
        <div className="col-md-5 homedetail">
          <div className="title">-Saturn</div>

          <p>
            <b> Saturn is a massive ball made mostly of hydrogen and helium</b>
            The farthest planet from Earth discovered by the unaided human eye,
            Saturn has been known since ancient times. The planet is named for
            the Roman god of agriculture and wealth, who was also the father of
            Jupiter.
          </p>
          <button className="learnmore">Learn more</button>
        </div>
      </div>
    </Section>
  );
};

export default Who;
