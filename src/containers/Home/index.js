import React, { Component } from 'react';
import googleLogo from '../../assets/google-play-badge.svg'
import iphonePlus from '../../assets/iphone_6_plus_white_port.png'
import demoImage from '../../assets/demo-screen-1.jpg'

class Home extends Component {
  render() {
    return (
      <div>
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">We're in the midst of a paradigm shift, Messaging is the new platform and bots are the new apps.</h1>
              <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start now</a>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <img src={iphonePlus} />
                  <div className="button">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">Discover what all the buzz is about!</h2>
            <p>Our apps is available on any mobile device! Download now to get started!</p>
            <div className="badges">
              <a className="badge-link" href="#"><img src="../assets/google-play-badge.svg" alt=""/></a>
              <a className="badge-link" href="#"><img src={googleLogo} alt=""/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Unlimited Features, Unlimited Fun</h2>
          <p className="text-muted">Check out what you can do with this app theme!</p>
          <hr/>
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
              <div class="device-mockup iphone6_plus portrait white">
              <div class="device">
                <div class="screen">
                 
                  <img src={demoImage} class="img-fluid" alt=""/>
                </div>
                <div class="button">

                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Device Mockups</h3>
                    <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Flexible Use</h3>
                    <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Free to Use</h3>
                    <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Open Source</h3>
                    <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>Stop waiting.<br/>Start building.</h2>
          <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>We
          <i className="fa fa-heart"></i>
          new friends!</h2>
        <ul className="list-inline list-social">
          <li className="list-inline-item social-twitter">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item social-facebook">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item social-google-plus">
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <footer>
      <div className="container">
        <p>&copy; 2017 Start Bootstrap. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
      </div>
    );
  }
}

export default Home;





