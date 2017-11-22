import React from 'react';
import ContactForm from '../../components/Form/ContactForm'
import CardsList from '../../components/Cards/CardsList'

const cards = [
  { id: 1, name: "Machine Learning"},
  { id: 2, name: "Natural Language Processing"},
  { id: 3, name: "Conversational Application Interfaces"}
];

class Develop extends React.Component {
  render() {
    return (
      <div className="container my-5">
      <div className="row h-100 my-5">
      <div className="col-12">
      <h1>Develop</h1>
      </div>
      <CardsList cards={cards}/>
    </div>
    <ContactForm />
      </div>

    );
  }
}

export default Develop;
