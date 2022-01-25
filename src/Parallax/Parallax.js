import React, { useState } from "react";
import scrollTill from "../scrollTill";
import "./Parallax.css";
import raea_institution from "./raea_institution.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

const Parallax = () => {
  window.addEventListener("scroll", function (e) {
    const target = document.querySelectorAll(".scroll");
    // target.style.background = "#ffcc00";
    // console.log(target.style);

    let scrolled = window.pageYOffset;
    // let rate = scrolled * 0.5;
    // target.style.transform = `translate3d(0px, ${rate}px, 0px)`;

    for (let i = 0; i < target.length; i++) {
      let pos = scrolled * target[i].dataset.rate;

      if (target[i].dataset.direction === "vertical") {
        target[i].style.transform = `translate3d(0px, ${pos}px, 0px)`;
      } else {
        let posX = window.pageYOffset * target[i].dataset.ratex;
        let posY = window.pageYOffset * target[i].dataset.ratey;

        target[i].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
      }
    }
  });

  return (
    <>
      <section
        className="parallax-section"
        style={{ backgroundImage: `url('${raea_institution}')` }}
      >
        <div className="parallax-overlay">
          <ul className="parallax-ul">
            <li className="scroll" data-rate="-1.5" data-direction="vertical">
              <Button
                id="RAEA"
                variant="primary"
                size="lg"
                className="mb-5"
                onClick={() => scrollTill("vision")}>
                Read More
              </Button>
            </li>
            {/* <li className="scroll" data-rate="-0.5" data-direction="vertical">al</li>
            <li className="scroll" data-rate="-0.5" data-direction="vertical">lax</li> */}
          </ul>
        </div>
      </section>
      <section className="parallax-section"></section>
    </>
  );
}

export default Parallax;
