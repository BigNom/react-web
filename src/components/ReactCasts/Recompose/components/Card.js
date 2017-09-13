import React from 'react';
import { withState, withHandlers, compose } from 'recompose';
import './Card.css';


const Card = ({open , setOpen, title, picture, description}) => {
  return (
  <div className={open ? "card open" : "card closed"}>
      <div className="header" onClick={() => setOpen(!open)}>
        Title</div>
      <div className="body">
        <img src="http://lorempixel.com/1280/350/food" />
      </div>
      </div>

      );
}




export default withState('open', 'setOpen', true)(Card);
