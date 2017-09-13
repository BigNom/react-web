import React from 'react'
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap'

const Home = () => (
  <div className="navbar">
    <div className="container">
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
            <h3>Progressive Web Apps</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    </div>
  </div>
);

export default Home
