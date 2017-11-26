import React from 'react';

import CardsList from '../../components/Cards/CardsList'
import Background from '../../components/Background'
import machineLearning from '../../assets/machine-learning.png'
import MediaPlayer from '../../components/MediaPlayer'

import './Develop.css'

const cards = [
  { id: 1, name: "Machine Learning", picture: "machine-learning.png"},
  { id: 2, name: "Natural Language Processing", picture: "machine-learning.png"},
  { id: 3, name: "Conversational Application Interfaces", picture: "machine-learning.png"}
];

class Develop extends React.Component {
  render() {
    return (
      <div className="develop-styles container-fluid my-5">
      <div className="row h-100 my-5">
      <div className="col-12">
      <h1>Develop</h1>
      </div>
      </div>
      <CardsList cards={cards}/>
    </div>
    );
  }
}

export default Develop;
