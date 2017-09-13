import React, { Component } from 'react'
import styled from 'styled-components';

const FooterElem = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
 transform: translateY(${props => props.visible ? '0px' : '60px'});
  transition: transform .5s ease-in;
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { showFooter: true };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ showFooter: window.innerHeight > 400 });
    });
  }

  render() {
    return (
      <FooterElem visible={this.state.showFooter}>Footer</FooterElem>
    );
  }
}

