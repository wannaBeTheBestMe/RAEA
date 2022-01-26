import React from "react";
import "./Contact.css";

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Contact = () => {
  return (
    <>
      <div className="contact-us pb-3" id="contact">
        <h1 className="display-1 heading pt-5 pb-5">
          CONTACT
          {/* <small className="text-muted display-6">US</small> */}
        </h1>

        <iframe
          className="map pb-3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9039154444845!2d75.81528881436495!3d26.87479366819261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db67d58cf2f45%3A0xde9b2247e6fe7b9e!2sRajasthan+adult+education+association!5e0!3m2!1sen!2sin!4v1558943438619!5m2!1sen!2sin"
          width="1000em"
          height="500em"
          frameBorder="0"
          // style={ "border": 0 }
          allowFullScreen />

        <Container style={{ "width": "50em" }}>
          <ListGroup>
            <ListGroup.Item><strong>Address</strong>: 7-A, Industrial Area, Jhalana Institutional Area, Jhalana Dungri, Jaipur, Rajasthan 302004</ListGroup.Item>
            <ListGroup.Item><strong>Phone</strong>: 01412700559</ListGroup.Item>
            <ListGroup.Item><strong>Email Address</strong>: raeajaipur@gmail.com</ListGroup.Item>
          </ListGroup>
        </Container>
      </div>
    </>
  );
};

export default Contact;