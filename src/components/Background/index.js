import React from 'react';
import {
  Img,
  Container,
  Blend,
  H1,
  P,
  Backdrop
}
  from './Img';

class Background extends React.Component {
  render() {
    return(

        <Container>
          <Blend>
          <H1>React Web 🚀</H1>
          </Blend>
        </Container>
    )
  }
}

export default Background;
