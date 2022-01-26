import React, { useState } from "react";
import "./Gallery.css";
import abs1 from "./anil_bordia_smiriti/abs1.jpg";
import abs2 from "./anil_bordia_smiriti/abs2.jpg";
import abs3 from "./anil_bordia_smiriti/abs3.jpg";
import abs4 from "./anil_bordia_smiriti/abs4.jpg";
import gj1 from "./gandhi_jayanti/gj1.jpg";
import gj2 from "./gandhi_jayanti/gj2.jpg";
import gj3 from "./gandhi_jayanti/gj3.jpg";
import gj4 from "./gandhi_jayanti/gj4.jpg";
import ks1 from "./kala_shivir/kala_shivir1.jpg"
import ks2 from "./kala_shivir/kala_shivir2.jpg"
import ks3 from "./kala_shivir/kala_shivir3.jpg"
import ks4 from "./kala_shivir/kala_shivir4.jpg"
import solar0 from "./solar/solar0.jpg"
import solar1 from "./solar/solar1.jpg"
import solar2 from "./solar/solar2.jpg"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

const Gallery = () => {
  return (
    <>
      <div className="gallery" id="event-gallery">
        <h1 className="display-1 heading pt-5 pb-5">
          GALLERY<br />
          <small className="text-muted display-6">EVENTS</small>
        </h1>

        <div className="flex-container">
          <div>
            <h2 className="h2 heading pb-3">ANIL BORDIA SMIRITI</h2>
            <Container className="mb-5" style={{ "width": "50em" }}>
              <Carousel fade variant="light">
                <Carousel.Item> <img className="d-block w-100" src={abs1} /></Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" src={abs2} /></Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" src={abs3} /></Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" src={abs4} /></Carousel.Item>
              </Carousel>
            </Container>
          </div>
          <div>
            <h2 className="h2 heading pb-3">KALASHIVIR</h2>
            <Container className="mb-5" style={{ "width": "50em" }}>
              <Carousel fade variant="light">
                <Carousel.Item> <img className="d-block w-100" src={ks1} /></Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" src={ks2} /></Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" src={ks3} /></Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" src={ks4} /></Carousel.Item>
              </Carousel>
            </Container>
          </div>
          <div>
            <h2 className="h2 heading pb-3">SOLAR EVENT</h2>
            <Container className="mb-5" style={{ "width": "50em" }}>
              <Carousel fade variant="light">
                <Carousel.Item> <img className="d-block w-100" src={solar0} /></Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" src={solar1} /></Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" src={solar2} /></Carousel.Item>
              </Carousel>
            </Container>
          </div>
          <div>
            <h2 className="h2 heading pb-3">GANDHI JAYANTI</h2>
            <Container style={{ "width": "50em" }}>
              <Carousel fade variant="light">
                <Carousel.Item> <img className="d-block w-100" src={gj1} /></Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" src={gj2} /></Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" src={gj3} /></Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" src={gj4} /></Carousel.Item>
              </Carousel>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};


export default Gallery;