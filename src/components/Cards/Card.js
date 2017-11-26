import React from 'react'
import './Cards.css'
import styled from 'styled-components'

const CardImage = styled.img`
align-self: center;
width: 100px;
height: 100px;
`;

const CardTitle = styled.div`
display: flex;
flex-direction: column;
width: 180px;
`;

function Card(props) {
  return(
    <div className="col-sm my-5">
    <div className="card card-style">
    <CardImage src={props.picture} alt="image" />
    <div className="card-body">
    <CardTitle>{props.name}</CardTitle>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Lorem text</p>
    </div>
    This is a card</div>
    </div>
  )
}

export default Card;
