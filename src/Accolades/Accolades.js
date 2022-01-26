import React from "react";
import "./Accolades.css";
import followUpMaterials from "./awards/follow_up_materials.jpg";
import nationalBookTrustYaha from "./awards/national_book_trust_yaha.jpg";
import nationalBookTrustMeri from "./awards/national_book_trust_meri.jpg";
import nationalLiteracyMission from "./awards/national_literacy_mission.jpg";
import nlmUnesco from "./awards/nlm_unesco.jpg";

import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Accolade = (props) => {
  return (
    <>
      {/* <Card style={{ "width": "20em" }}> */}
      <Card>
        {/* <Card.Header>Card header</Card.Header> */}
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

const Accolades = () => {
  return (
    <>
      <div className="awards pb-3" id="accolades">
        <h1 className="display-1 heading pt-5 pb-5">
          ACCOLADES
        </h1>

        <Container className="accolades-container">
          <CardGroup>
            <Accolade src={followUpMaterials} title="Second Accu Prize" description="Awarded for fully-illustrated literacy follow-up materials." />
            <Accolade src={nationalBookTrustYaha} title="National Book Trust of India" description="Awarded for the book 'Yaha Theek Nahi Hua Hajari'." />
            <Accolade src={nationalBookTrustMeri} title="National Book Trust of India" description="Awarded for the book 'Meri Gaay'." />
            <Accolade src={nationalLiteracyMission} title="National Literacy Mission" description="Commendation certificate presented on 8th September, 2004." />
            <Accolade src={nlmUnesco} title="NLM-UNESCO" description="Awarded in 2005 for progress in adult literacy." />
          </CardGroup>
        </Container>
      </div>
    </>
  );
};

export default Accolades;