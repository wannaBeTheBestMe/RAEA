import React from "react";
import "./Mission.css";
import mission_truth from "./mission_truth.jpg";
// import { VisionCard } from "../Vision/Vision";

import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export function MissionCard(props) {
  return (
    <>
      <Card style={{ "width": "35em" }}>
        {props.opt}
        <Card.Body>
          <OverlayTrigger
            key={props.pos}
            placement={props.pos}
            overlay={<Tooltip id={`tooltip-${props.pos}`}>{props.tooltip}</Tooltip>}
          >
            {/* <Card.Img variant="top" src={props.src} /> */}
            <Image src={props.src} width="100%" height="310em" />
          </OverlayTrigger>
        </Card.Body>
        <Card.Footer>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              {props.quote}
              {" "}
            </p>
            <footer className="blockquote-footer">
              {props.cite}
            </footer>
          </blockquote>
        </Card.Footer>
      </Card>
    </>
  );
};

const Mission = () => {
  return (
    <>
      <div className="mission-container" id="mission">
        <h1 className="display-1 heading pt-5 pb-5">MISSION</h1>
        <Container className="mission-container">
          <Row>
            <MissionCard
              pos="right"
              tooltip={
                <i>Pati pothi laayenge<br />ghar ghar alk jagaayenge</i>
              }
              src={mission_truth}
              quote="Our mission is to create a learning society. Through life long learning we want to achieve total harmony in a peaceful and fraternal society. We also aim to achieve freedom from hunger, freedom from all sorts of exploitation, superstitions, dogmas and tabboos. To create an absolute non violence brotherhood is our mission'."
              cite={<cite>RAEA poster</cite>}
            />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Mission;