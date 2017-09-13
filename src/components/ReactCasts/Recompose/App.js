import React from 'react';
import Card from './components/Card';

import { branch, renderComponent, lifecycle, compose } from 'recompose';

const Recomp = () => {
  return (
    <div>
          <Card
          />


    </div>
  );
}


export default Recomp;

const zombies = [
  {
    title: 'Classic zombies',
    picture: "http://lorempixel.com/1280/350/food",
    description: "Slow, quiet and clumsy, the reason for these dead to reanimate is unknown. After a zombie apocalypse, all dead humans turn into zombies. Being bitten by a zombie results in illness and death. Can only be killed by massive brain trauma."
  },
  {
    title: 'Voodoo Zombies',
    picture: "http://lorempixel.com/1280/350/food",
    description: "Created by a magic potion that kills humans, allowing a Voodoo Master to revive them to do his bidding.\nBlank, emotionless and able to withstand gunshots, these zombies can only function while there’s a connection with their master."
  }

];
