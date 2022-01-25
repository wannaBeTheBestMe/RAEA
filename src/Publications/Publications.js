import React, { useState } from "react";
import scrollTill from "../scrollTill";
import "./Publications.css";
import b0 from "./books/b0.jpg";
import b1 from "./books/b1.jpg";
import b2 from "./books/b2.jpg";
import b3 from "./books/b3.jpg";
import b4 from "./books/b4.jpg";
import b5 from "./books/b5.jpg";
import b6 from "./books/b6.jpg";
import b7 from "./books/b7.jpg";
import b8 from "./books/b8.jpg";
import b9 from "./books/b9.jpg";
import b10 from "./books/b10.jpg";
import b11 from "./books/b11.jpg";
import b12 from "./books/b12.jpg";
import b13 from "./books/b13.jpg";
import b14 from "./books/b14.jpg";
import b15 from "./books/b15.jpg";
import b16 from "./books/b16.jpg";
// import b17 from "./books/b17.jpg";
import b18 from "./books/b18.jpg";
import b19 from "./books/b19.jpg";
import b20 from "./books/b20.jpg";
import b21 from "./books/b21.jpg";
import b22 from "./books/b22.jpg";
import b23 from "./books/b23.jpg";
import b24 from "./books/b24.jpg";
import b25 from "./books/b25.jpg";
import b26 from "./books/b26.jpg";
import b27 from "./books/b27.jpg";
import b28 from "./books/b28.jpg";
import b29 from "./books/b29.jpg";
import b30 from "./books/b30.jpg";
import b31 from "./books/b31.jpg";
import N2 from "./books/NehruJiKahatetheBhag2.jpg";
import N3 from "./books/NehruJiKahatetheBhag3.jpg";
import N4 from "./books/NehruJiKahatetheBhag4.jpg";
import N5 from "./books/NehruJiKahatetheBhag5.jpg";
import N6 from "./books/NehruJiKahatetheBhag6.jpg";
import N7 from "./books/NehruJiKahatetheBhag7.jpg";

import p1 from "./posters/p1.jpg";
import p2 from "./posters/p2.jpg";
import p3 from "./posters/p3.jpg";
import p4 from "./posters/p4.jpg";
import p5 from "./posters/p5.jpg";
import p6 from "./posters/p6.jpg";
import p7 from "./posters/p7.jpg";
import p8 from "./posters/p8.jpg";
import p9 from "./posters/p9.jpg";
import p10 from "./posters/p10.jpg";
import p11 from "./posters/p11.jpg";
import p12 from "./posters/p12.jpg";
// import p13 from "./posters/p13.jpg";
import p14 from "./posters/p14.jpg";
import p15 from "./posters/p15.jpg";
import p16 from "./posters/p16.jpg";
import p17 from "./posters/p17.jpg";
import p18 from "./posters/p18.jpg";
import p19 from "./posters/p19.jpg";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import { Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';

const BookCard = (props) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.book} />
        <Card.Body>
          <Card.Title><Card.Link href="#">{props.title}</Card.Link></Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>लेखक: <Card.Link href="#">{props.author}</Card.Link></ListGroupItem>
          <ListGroupItem>कीमत: ₹{props.price}</ListGroupItem>
        </ListGroup>
        {/* <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body> */}
      </Card>
    </>
  );
};

const Books = () => {
  return (
    <>
      <div className="publications" id="publications-books">
        <h1 className="display-1 heading pt-5 pb-5">
          PUBLICATIONS<br />
          <small className="text-muted display-6">BOOKS</small>
        </h1>
        <Container fluid className="publications-container">
          <Row>
            <BookCard book={b0} title="आखर" description="Brief description" author="रमेश थानवी" price="6" />
            <BookCard book={b1} title="चार धाम" description="Brief description" author="डॉ उषा अरोड़ा" price="5" />
            <BookCard book={b2} title="काशी कथा" description="Brief description" author="सूधेन्दू पटेल" price="8" />
            <BookCard book={b3} title="ये संतो के रूप" description="Brief description" author="लक्ष्मीचंद गुप्त" price="6.5" />
            <BookCard book={b4} title="अंगूठा छाप" description="Brief description" author="ज्योत्सना शुक्ला" price="5" />
            <BookCard book={b5} title="दादी का मौसर" description="Brief description" author="गोपालप्रसाद मुदरगल" price="5" />
          </Row>
          <Row>
            <BookCard book={b6} title="सपना सच हुआ" description="Brief description" author="गुमानमल जैन" price="5" />
            <BookCard book={b7} title="घर बीती रामायण" description="Brief description" author="हरीश भादानी" price="5" />
            <BookCard book={b8} title="अब हम भीख नहीं मांगेगे" description="Brief description" author="प्रकाश जैन" price="4" />
            <BookCard book={b9} title="वृक्ष कथा" description="Brief description" author="दयालचंद" price="8" />
            <BookCard book={b10} title="डॉक्टर सरला" description="Brief description" author="डॉ पूजा तालिकोटि" price="5" />
            <BookCard book={b11} title="लड़की" description="Brief description" author="भागवती लाल व्यास" price="4" />
          </Row>
          <Row>
            <BookCard book={b12} title="बच्चो की सेहत" description="Brief description" author="रचना तिवारी" price="7" />
            <BookCard book={b13} title="समझ" description="Brief description" author="नम्रता शर्मा, रामजन्म चतुर्वेदी" price="9" />
            <BookCard book={b14} title="शिकारी" description="Brief description" author="ज्योत्सना शुक्ला" price="7.5" />
            <BookCard book={b15} title="मिठास आए कहा से" description="Brief description" author="पन्नालाल व्यास" price="6" />
            <BookCard book={b16} title="पानी साफ - हवा भी साफ" description="Brief description" author="के.के.पुरोहित" price="5" />
            <BookCard book={b18} title="सीख" description="Brief description" author="अर्चना वाजपेयी, महावीर दाधीच, कुसुम शर्मा" price="7" />
          </Row>
          <Row>
            <BookCard book={b19} title="सूझबूझ" description="Brief description" author="सरोज गोस्वाजी, दिनेश पुरोहित, रामजन्म चतुर्वेदी" price="7" />
            <BookCard book={b20} title="अहमद की सोच" description="Brief description" author="रचना सिधदा" price="6" />
            <BookCard book={b21} title="तीन कहानियाँ" description="Brief description" author="गुमानमल जैन, प्रभाकर गोस्वामी, ममता जैतली" price="8" />
            <BookCard book={b22} title="पिछले दरवाजे से" description="Brief description" author="पन्नलाल पटेल" price="15" />
            <BookCard book={b23} title="किस्सा चार दरवेश" description="Brief description" author="मीरा अम्मन" price="9.5" />
            <BookCard book={b24} title="बड़ा कौन" description="Brief description" author="लक्ष्मीचंंद गुप्त" price="5" />
          </Row>
          <Row>
            <BookCard book={b25} title="खुशी के आंसू" description="Brief description" author="गोपालप्रसाद मुदरगल" price="4" />
            <BookCard book={b26} title="खलील जिब्रान की कहानियां" description="Brief description" author="भीमसेन त्यागी" price="4.5" />
            <BookCard book={b27} title="कम्पोस्ट अपनाएं - उपज बढाए" description="Brief description" author="रचना तिवारी" price="7.5" />
            <BookCard book={b28} title="मेरी गाय" description="Brief description" author="गिजुभाई बंधेका" price="5" />
            <BookCard book={b29} title="हमें मालूम ही न था" description="Brief description" author="नवनीत पांडे" price="5" />
            <BookCard book={b30} title="बुद्धिमान गंगू" description="Brief description" author="हरीश व्यास" price="5" />
          </Row>
          <Row>
            <BookCard book={b31} title="गांव जग उठा" description="Brief description" author="भागीरथ रंग" price="4" />
            <BookCard book={N2} title="नेहरू जी कहते थे 1" description="Brief description" author="गुमानमल जैन" price="4.5" />
            <BookCard book={N3} title="नेहरू जी कहते थे 3" description="Brief description" author="गुमानमल जैन" price="4.5" />
            <BookCard book={N4} title="नेहरू जी कहते थे 4" description="Brief description" author="गुमानमल जैन" price="5" />
            <BookCard book={N5} title="नेहरू जी कहते थे 5" description="Brief description" author="गुमानमल जैन" price="4.5" />
            <BookCard book={N6} title="नेहरू जी कहते थे 6" description="Brief description" author="गुमानमल जैन" price="5" />
          </Row>
          <Row>
            <BookCard book={N7} title="नेहरू जी कहते थे 7" description="Brief description" author="गुमानमल जैन" price="5" />
          </Row>
        </Container>
      </div>
    </>
  );
};

const Posters = () => {
  return (
    <>
      <div className="publications" id="publications-posters">
        <h1 className="display-1 heading pt-5 pb-5">
          PUBLICATIONS<br />
          <small className="text-muted display-6">POSTERS</small>
        </h1>

        <Container style={{ "width": "50em" }}>
          <Carousel fade variant="dark">
            {/* <Carousel.Item> <img className="d-block w-100" src={p2} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item> */}
            <Carousel.Item> <img className="d-block w-100" src={p1} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p2} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p3} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p4} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p5} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p6} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p7} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p8} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p9} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p10} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p11} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p12} /></Carousel.Item>
            {/* <Carousel.Item> <img className="d-block w-100" src={p13} /></Carousel.Item> */}
            <Carousel.Item> <img className="d-block w-100" src={p14} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p15} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p16} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p17} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p18} /></Carousel.Item>
            <Carousel.Item> <img className="d-block w-100" src={p19} /></Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  )
};

const Publications = () => {
  return (
    <>
      <Books />
      <Posters />
    </>
  );
};

export default Publications;