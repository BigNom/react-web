import React from 'react'
import './Cards.css'

function Card(props) {
  return(
    <div className="col-sm my-5">
    <div className="card card-style">
    <div className="card-body">
    <h4 className="card-title">{props.name}</h4>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Lorem text</p>
    </div>
    This is a card</div>
    </div>

  )
}

export default Card;
