import React from "react";
import "./History.css";
import anaupcharika from "./anaupcharika.png";

import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Image from 'react-bootstrap/Image';

const vedicSayingPopover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Vedic Saying</Popover.Header>
    <Popover.Body className="vedic-saying">
      समानो मंत्रः समितिः समानी<br />
      समानं मनः सहचित्तमेषाम ।<br />
      समानं मंत्रमभिमंत्रये वः<br />
      समानेन वो हविषा जुहोमि ।।<br /><br />

      समानी व आकूतिः<br />
      समाना हृदयानि वः ।<br />
      समानमस्तु वो मनो<br />
      यथा वः सुसहासति ।।<br />
      - ऋग्वेद
    </Popover.Body>
  </Popover>
);

const anaupcharikaPopover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Anaupcharika</Popover.Header>
    <Popover.Body>
      <Image thumbnail src={anaupcharika} />
    </Popover.Body>
  </Popover>
);

const History = () => {
  return (
    <>
      <div className="history pb-3" id="about-history">
        <h1 className="display-1 heading pt-5 pb-5">
          ABOUT<br />
          <small className="text-muted display-6">HISTORY</small>
        </h1>

        <Container className="history-container" style={{ "width": "70em" }}>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is the RAEA?</Accordion.Header>
              <Accordion.Body>
                An NGO, Rajasthan Adult Education Association (RAEA) is a well-known organisation ind India.
                In Hindi, it is called राजस्थान प्रौढ़ शिक्षण समिति. The word समिति has a wider connotation &mdash; it
                means 'an organised group of like-minded & similar-hearted people with total understanding and
                harmony.' The word समिति is taken from the <OverlayTrigger trigger="click" placement="left" overlay={vedicSayingPopover}><a id="also-useless" href="#also-useless">Vedic saying</a></OverlayTrigger> 'समानो मंत्र: समिति समानी..' RAEA/समिति was
                set up 45 years ago by eminent educationists, senior civil servents, academicians, creative
                writers, theater artists, cinema directors and committed social workers of Rajasthan to
                promote literacy programs in the state for liberating the rural poor from ignorance, dogmas,
                taboos and age-long inertia. RAEA/समिति has many district level organisations in Rajasthan
                working in the field of literacy and social change. The Bikaner, Jodhpur and Ajmer Adult
                Education Associations came into existance before RAEA was estabilished. Seva Mandir,
                Vidhya Bhawan and Rajasthan Vidhyapeeth were also engaged in similar projects. Their
                objectives were also the promotion of mass literacy, household industries for skill
                development and promoting women's development. The emancipation from poverty of downtrodden
                rural people was also their objective. RAEA was visualised as a state-level organisation capable
                of supporting these district level organisations. RAEA/समिति has thus been a mass-based organisation.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What do we do?</Accordion.Header>
              <Accordion.Body>
                <OverlayTrigger trigger="click" placement="left" overlay={anaupcharikaPopover}><a id="useless" href="#useless">Anaupcharika</a></OverlayTrigger> is our regular monthly magazine, which has been publishing since 1973, i.e., for 46 years.
                It is a journal about contemporary educational thought. The journal deals with with theories and practices
                of life-long learning. Initially, it has been started as a journal of non-formal education. Then, it took
                up the task of promoting literacy and post-literacy support through an ambitious programme called National
                Adult Education programme (NAEP). Finally, it became what it is today.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </>
  );
};

export default History;