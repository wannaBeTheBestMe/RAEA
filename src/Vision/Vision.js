import React from "react";
import "./Vision.css";
import vision_book from "./vision_book.jpg"
import vision_bird from "./vision_bird.jpg"
import vision_thumb from "./vision_thumb.jpg"
import vision_tagore from "./vision_tagore.jpg"

import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'

export function VisionCard(props) {
  return (
    <>
      <Card style={{ "width": "25em" }}>
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

const TagoreCard = (props) => {
  return (
    <>
      <Card className="mb-2" style={{ "width": "94%" }}>
        {props.opt}
        <Card.Body>
          <div className="parent">
            <div className="child1">
              <OverlayTrigger
                key={props.pos}
                placement={props.pos}
                overlay={<Tooltip id={`tooltip-${props.pos}`}>{props.tooltip}</Tooltip>}
              >
                <Image src={props.src} width="100%" height="100%" />
              </OverlayTrigger>
            </div>
            <div className="child2">
              <Card.Text style={{ "paddingLeft": "1em" }}>
                <div
                  className="display-5"
                  style={{ "textAlign": "center", "position": "relative", "top": "4em" }}
                >
                  एइ सँब मूढ़ म्लान मूक मुखे दितो हँबे भाषा<br />
                  एइ सँब शांत शुष्क भग्न बुके<br />
                  ध्वनिया तूलिते हँबे आशा<br />
                </div>
              </Card.Text>
            </div>
          </div>
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

const Vision = () => {
  const speech = 'These lines are taken from a poem by Gurudev Ravindra Nath Thakur and these words have been our inspiring and driving force. The meaning of these lines is as follows:- "All these deprived, dumb, deserted, downtrodden and so-called dirty people are to be given courage to open their mouth and speak out the truth and those silent, perched and broken hearts are to be given new hope." Our objectives have been far broader but these lines above have paved our path.'

  return (
    <>
      <div className="vision-container" id="vision">
        <h1 className="display-1 heading pt-5 pb-5">VISION</h1>
        <Container className="vision-container">
          <Row>
            <TagoreCard
              pos="left"
              // opt={<Card.Header>This is a header</Card.Header>}
              tooltip={
                <i>Ei sanb moodh mlaan mook mukhe dito hanbe bhaasha<br />
                  Ei sanb shaant shushk bhagn buke<br />
                  Dhvaniya toolite hanbe aasha<br />
                </i>
              }
              src={vision_tagore}
              quote={speech}
              cite={<cite>Ravindra Nath Thakur</cite>}
            />
          </Row>
          <Row>
            <VisionCard
              pos="right"
              tooltip={
                <i>Pati pothi laayenge<br />ghar ghar alk jagaayenge</i>
              }
              src={vision_book}
              quote="With a book and slate we will go door to door and awaken every home."
              cite={<cite>RAEA poster</cite>}
            />
            <VisionCard
              pos="bottom"
              tooltip={
                <i>Shanti kabutar pankh pasaar<br />hathiyaaron ki hogi haar</i>
              }
              src={vision_bird}
              quote="Weapons will fail in front of the peace scattering pidgeon."
              cite={<cite>RAEA poster</cite>}
            />
            <VisionCard
              pos="left"
              tooltip={
                <i>Shanti kabutar pankh pasaar<br />hathiyaaron ki hogi haar</i>
              }
              src={vision_thumb}
              quote="Weapons will fail in front of the peace scattering pidgeon."
              cite={<cite>RAEA poster</cite>}
            />
          </Row>
        </Container>
      </div>
    </>
  )
};

export default Vision;