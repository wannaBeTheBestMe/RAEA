import React, { useState } from "react";
import "./Body.css";
import Parallax from "../Parallax/Parallax.js";
import Vision from "../Vision/Vision.js";
import Mission from "../Mission/Mission.js";
import Publications from "../Publications/Publications.js";

import 'bootstrap/dist/css/bootstrap.min.css';

const Body = () => {
  return (
    <>
      <Parallax />
      <Vision />
      <Mission />
      <Publications />
    </>
  );
}

export default Body;