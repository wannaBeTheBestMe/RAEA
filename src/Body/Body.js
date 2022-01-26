import React, { useState } from "react";
import "./Body.css";
import Parallax from "../Parallax/Parallax.js";
import Vision from "../Vision/Vision.js";
import Mission from "../Mission/Mission.js";
import Publications from "../Publications/Publications.js";
import Accolades from "../Accolades/Accolades";
import Gallery from "../Gallery/Gallery.js";
import History from "../History/History";
import Founders from "../Founders/Founders";
import Facilities from "../Facilities/Facilities.js";

import 'bootstrap/dist/css/bootstrap.min.css';

const Body = () => {
  return (
    <>
      <Parallax />
      <Vision />
      <Mission />
      <Publications />
      <Accolades />
      <Gallery />
      <History />
      <Founders />
      <Facilities />
    </>
  );
}

export default Body;