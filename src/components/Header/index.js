import React from 'react'
import {Title} from './Title'
import {Wrapper} from './Wrapper'

function Header(props){
    return(
      <Wrapper>
      <Title>{props.name}

      </Title>
      </Wrapper>
    )
  }

export default Header
