import React from "react";
import styled from "styled-components";
import "../Contact/Contact.css";
import solar from "../Image/pngwing.com.png"
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Contact = () => {
  return (
    <Section className="contactus main">
      <div className="container row">
        <div className="col-md-6 galaxy" ><img src={solar} alt="" /></div>
        <div className="col-md-6">
          <div className="table">
          <h2>Contact us</h2>
          <input type="text" placeholder="Name"  />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Write your message" style={{"padding-bottom":"180px"}}/>
          <button className="send">Send</button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
