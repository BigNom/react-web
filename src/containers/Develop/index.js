import React from 'react';
import Helmet from 'react-helmet'
import CardsList from '../../components/Cards/CardsList'
import Background from '../../components/Background'

import './Develop.css'

const cards = [
  { id: 1, name: "Machine Learning", picture: "machine-learning.png"},
  { id: 2, name: "Natural Language Processing", picture: "machine-learning.png"},
  { id: 3, name: "Conversational Application Interfaces", picture: "machine-learning.png"}
];

class Develop extends React.Component {
  render() {
    return (
      <article>
      <Helmet>
      <title>Home Page</title>
      <meta name="description" content="A React.js Boilerplate application homepage" />
    </Helmet>
      <div className="contact-styles container-fluid h-100">
      <div className="row h-100 my-5">
      <div className="col-12">
      <h1>Develop</h1>
      </div>
      </div>
      <CardsList cards={cards}/>
    </div>
      </article>
    );
  }
}

export default Develop;
