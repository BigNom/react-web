import React from 'react'
import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap'
import Banner from '../../assets/bannerLarge.jpg'
import './home.css'

const homeStyles = {
  backgroundImage: "url(../../assets/bannerLarge.jpg)"
}

const Home = () => (
  <div className="background">
    <div className="container background" style={homeStyles}>
      <div className="jumbotron">
        <h1>React Web</h1>
        <p>
          Progressive Web Applications
        </p>
      </div>
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail src={Banner} alt="242x200">
            <h3>Progressive Web Apps</h3>
            <p>Provides offline access to users</p>
            <p>Fast, Responds quickly</p>

          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="../assets/bannerLarge.jpg" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>

          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail src="../assets/bannerLarge.jpg" alt="242x200">
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <img src="../assets/bannerLarge.jpg" />

          </Thumbnail>
        </Col>
      </Row>
    </div>
  </div>
);

export default Home
