import React from 'react'
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap'
import Banner from '../../assets/bannerLarge.jpg'
import './home.css'

const homeStyles = {
  backgroundImage: {Banner}
}

const Home = () => (
  <div className="navbar">
    <div className="container background" style={homeStyles}>
      <div className="jumbotron">
        <h1>React Web</h1>
        <p>
          Progressive Web Applications
        </p>
        <p>
          <a className="btn btn-primary btn-lg">Learn more</a>
        </p>
      </div>
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail src="../assets/bannerLarge.jpg" alt="242x200">
            <h3>Progressive Web Apps</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="../assets/bannerLarge.jpg" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="../assets/bannerLarge.jpg" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <img src="../assets/bannerLarge.jpg" />
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
