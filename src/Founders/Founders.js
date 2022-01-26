import React from "react";
import "./Founders.css";
import bordiajiA from "./bordiajiA.jpg";
import kishoreL from "./kishoreL.jpg";
import periBP from "./periBP.jpg";
import sharmaVD from "./sharmaVD.jpg";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

const Founder = (props) => {
  return (
    <>
      <Card style={{ "width": "25em" }}>
        <Card.Img variant="top" src={props.src} />
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

const Founders = () => {
  return (
    <>
      <div className="founders pb-3" id="founders-current-board">
        <h1 className="display-1 heading pt-5 pb-5">
          FOUNDERS<br />
          <small className="text-muted display-6">& CURRENT BOARD</small>
        </h1>

        <h2 className="display-4 heading pb-2">FOUNDERS</h2>
        <Container className="pb-5">
          <CardGroup className="pb-3">
            <Founder src={bordiajiA} title="Anil Bordia" description="Mr Anil Bordia, the former Secretary of Education, Ministry of HRD, Govt. of India who also served as the Director Primary and Secondary Education in Rajasthan; was the founder of this organisation. He is no more with us but his guiding and inspiring spirit walks with us everday. He is always being fondly remembered. We organise a memorial lecture ever year." />
            <Founder src={periBP} title="Justice B. P. Peri" description="Justice BP Beri was the Founder President of RAEA." />
            <Founder src={kishoreL} title="Lalit Kishore" description="Shri Lalit Kishore Lohmi, the eminent educationist of Rajasthan, was the Founder Secretary of RAEA. " />
            <Founder src={sharmaVD} title="Vishnu Dutt Sharma" description="Shri Vishnu Dutt Sharma Former Home Secretary of Govt. of Rajasthan, joined RAEA as Second President after Justice Beri." />
          </CardGroup>
          <Card style={{ "width": "81em" }}>
            <Card.Body><Card.Text>
              <ListGroup>
                <ListGroup.Item>Miss Krishna Terve Principal of Kanodia Collage (founder office bearers)</ListGroup.Item>
                <ListGroup.Item>Shri Kalyan Jaisani of Rajasthan Vidhyapeeth, Udaipur (founder office bearers)</ListGroup.Item>
                <ListGroup.Item>Shri R.S. Kumat (founder office bearers)</ListGroup.Item>
                <ListGroup.Item>Shri Tej Karan Dandia (founder office bearers)</ListGroup.Item>
                <ListGroup.Item>Dr. Mohan Singh Mehta Former High Commissioner of India in Pakistan and Founder Vice Chancellor of University of Rajasthan</ListGroup.Item>
                <ListGroup.Item>Dr. Jagan Nath Singh Mehta</ListGroup.Item>
                <ListGroup.Item>Shri Sadashiv Ram Sharma</ListGroup.Item>
                <ListGroup.Item>Shri S.N. Rao</ListGroup.Item>
                <ListGroup.Item>Shri Ajit Kumar Jain</ListGroup.Item>
                <ListGroup.Item>Bhai Bhawan</ListGroup.Item>
                <ListGroup.Item>Shri Shubhu Patva</ListGroup.Item>
                <ListGroup.Item>Dr. Chhagan Mohta from Bikaner, the humanist philosopher and an eminent interprettor of various philosophical texts and also a critic of contemporary creative literary works </ListGroup.Item>
                <ListGroup.Item>Shri M L Mehta</ListGroup.Item>
                <ListGroup.Item>Smt. Kanta Marwah</ListGroup.Item>
                <ListGroup.Item>Dr. M.K. Marwah</ListGroup.Item>
                <ListGroup.Item>Shri Rajendra Bhanawat</ListGroup.Item>
                <ListGroup.Item>Shri Om Srivastav</ListGroup.Item>
                <ListGroup.Item>Shri Sushil Kumar Dashora</ListGroup.Item>
                <ListGroup.Item>Shri Kishore Saint</ListGroup.Item>
                <ListGroup.Item>Shri Nand Kishore Acharya</ListGroup.Item>
              </ListGroup>
            </Card.Text></Card.Body>
          </Card>
        </Container>

        <h2 className="display-4 heading pb-2">CURRENT EXECUTIVE COMMITTEE</h2>
        <Table striped bordered hover className="bg-light heading" style={{ "width": "81em" }}>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>Post</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Shri Ramesh Thanvi</td>
              <td>Presiden</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Shri Prince Saleem</td>
              <td>Vice President</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Smt Asha Bothra</td>
              <td>Vice President</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Shri Arvind Ojha</td>
              <td>Secretary</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Dr. Sunita Tanwar</td>
              <td>Joint Secretary</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>Shri Dhruv Yadav</td>
              <td>Joint Secretary</td>
            </tr>
            <tr>
              <td>7.</td>
              <td>Shri Avinash Bhargava</td>
              <td>Treasury</td>
            </tr>
            <tr>
              <td>8.</td>
              <td>Dr. Varsha Das</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>9.</td>
              <td>Smt. Usha Bapna</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>10.</td>
              <td>De. Shri ShreeLal Mohta</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>11.</td>
              <td>Dr. Prof. Om Kumbera</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>12.</td>
              <td>Dr. Sharda Jain</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>13.</td>
              <td>Shri Sushil Kumar Doshora</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>14.</td>
              <td>Shri Bhawar Singh Chandana</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>15.</td>
              <td>Shri Om Prakash Tak</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>16.</td>
              <td>Shri Rahhvendra Sharma</td>
              <td>Member</td>
            </tr>
            <tr>
              <td>17.</td>
              <td>Shri Om Prakash Dashora</td>
              <td>Member</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
};

export default Founders;