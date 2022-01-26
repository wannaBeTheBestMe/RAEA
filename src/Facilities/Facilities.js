import React from "react";
import "./Facilities.css";
import conference1 from "./conference1.jpg";
import conference2 from "./conference2.jpg";
import shakahar1 from "./shakahar1.jpg";
import shakahar2 from "./shakahar2.jpg";
import dormitory1 from "./dormitory1.jpg";
import dormitory2 from "./dormitory2.jpg";
import library1 from "./library1.jpg";
import library2 from "./library2.jpg";
import feb1 from "./10Feb2019/_DSC3466.jpg";
import feb2 from "./10Feb2019/_DSC3468.jpg";
import feb3 from "./10Feb2019/_DSC3488.jpg";
import feb4 from "./10Feb2019/_DSC3486.jpg";
import feb5 from "./10Feb2019/_DSC3498.jpg";
import feb6 from "./10Feb2019/_DSC3509.jpg";
import feb7 from "./10Feb2019/_DSC3511.jpg";
import feb8 from "./10Feb2019/_DSC3513.jpg";
import feb9 from "./10Feb2019/_DSC3466.jpg";
import mar1 from "./27March/DSC03529.jpg";
import mar2 from "./27March/DSC03530.jpg";
import mar3 from "./27March/DSC03533.jpg";
import mar4 from "./27March/DSC03533.jpg";
import mar5 from "./27March/DSC03538.jpg";
import mar6 from "./27March/DSC03539.jpg";
import mar7 from "./27March/DSC03540.jpg";

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const Facility = (props) => {
  return (
    <>
      <Card>
        <Image src={props.src1} />
        <Image src={props.src2} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

const Facilities = () => {
  return (
    <>
      <div className="facilities-infrastructure pb-3" id="facilities">
        <h1 className="display-1 heading pt-5 pb-5">
          FACILITIES
          {/* <small className="text-muted display-6">& CURRENT BOARD</small> */}
        </h1>

        <Container className="pb-3">
          <CardGroup className="mb-5">
            <Facility src1={conference1} src2={conference2} title="Conference Hall" description="Our well-equipped aesthetically-designed and decorated air-conditioned conference hall can accommodate 100 people. The latest audio-visual systems, projectors and screens are well-fitted in the conference hall. Computers and sound recording systems are available as well. Also, there are two attached committee rooms to the conference hall." />
            <Facility src1={shakahar1} src2={shakahar2} title="Shakahar - A Spacious Place for Community Dining" description="The big dining hall is on the first floor with an open-air terrace surrounded by lush green Jamun trees. Shakahar provides fresh vegetarian food with special Rajasthani recepies. Around 100 people can relish food in Shakahar's peaceful environment." />
            <Facility src1={dormitory1} src2={dormitory2} title="Arrangement for Stay" description="There are two types of stay accommodations available on the campus: (i)Three double-bed guest rooms with attached toilets. (ii)Three dormitories, which can accommodate 40 participants." />
            <Facility src1={library1} src2={library2} title="A Rich Library and Reading Hall" description="In the basement of building, there is a spacious, airy and well-lit library featuring a large collection of books and journals. 120 young people, students and research scholars use this peaceful learning space with a collection of around 11,000 precious books around." />
          </CardGroup>

          <h2 className="h2 heading pb-3">CAMPUS PHOTOS</h2>
          <Carousel fade variant="light">
            <Carousel.Item> <img className="d-block w-100" src={feb1} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={feb2} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={feb3} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={feb4} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={feb5} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={feb6} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={feb7} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={feb8} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={feb9} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={mar1} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={mar2} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={mar3} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={mar4} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={mar5} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={mar6} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={mar7} /></Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default Facilities;