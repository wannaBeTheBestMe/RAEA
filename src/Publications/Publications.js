import React, { useState } from "react";
import scrollTill from "../scrollTill";
import "./Publications.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';

const BookCard = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/200/100" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

const Publications = () => {
  return (
    <>
      <div className="books" id="publications-books">
        <Container fluid className="books-container">
          <Row>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </Row>
          <Row>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Publications;