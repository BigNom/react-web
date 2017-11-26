import React from 'react'
import Card from './Card'

const cardlistStyles = {
  textAlign: 'center'
};

function CardsList(props) {
  return(
    <div className="row justify-content-center" style={cardlistStyles}>
    {props.cards.map(c =>
      <Card key={c.id}
      name={c.name}
      picture={c.picture}
      />)}
    </div>
  );
}

export default CardsList;
