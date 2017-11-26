import React from 'react';
import bgPattern from '../../assets/bg-pattern.png'

import Img from './Img';

class MastHead extends React.Component{
  render() {
    return(
      <div>
      <Img src={bgPattern} alt="background-pattern"/>
      </div>
    )
  }
}

export default MastHead;
