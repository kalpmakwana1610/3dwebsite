import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
 

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <a href="">Home</a>
          <a href="">Studio</a>
          <a href="">Work</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="col-md-6">
          <a href="">Search</a>
          <a href="">Hire Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
