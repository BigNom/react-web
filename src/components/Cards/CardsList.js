import React from 'react'
import Card from './Card'

function CardsList(props) {
  return(
    <div className="row">
    {props.cards.map(c => <Card key={c.id} name={c.name} />)}
    </div>
  );
}

export default CardsList;
