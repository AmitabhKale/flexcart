import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <h3>About</h3>
      <Button variant="outline-secondary">GO BACK</Button>
      <Row>
        <Col lg={6}>
          <img src="images/camera.jpg" alt="camera" height="450px"></img>
        </Col>
        <Col lg={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>CANNON EOS 80D DSLR CAMERA</h4>
            </ListGroup.Item>
            <ListGroup.Item>🎆🎆🎆🎆🎆 2 reviews</ListGroup.Item>
            <ListGroup.Item>Price : 180$</ListGroup.Item>
            <ListGroup.Item>
              Description: Characterized by versatile imaging specs, the Canon
              EOS 80D further clarifies itself using a pair of robust focusing
              systems and an intuitive design
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3}>
          <ListGroup>
            <ListGroupItem>Price $929.99</ListGroupItem>
            <ListGroupItem>Status In Stock</ListGroupItem>
            <ListGroupItem>Qunatity </ListGroupItem>
            <ListGroupItem>
              <Button className="w-100">Add To Cart</Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
