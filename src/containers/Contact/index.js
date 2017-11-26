import React from 'react';
import ContactForm from '../../components/Form/ContactForm'
import MastHead from '../../components/MastHead'
import Hero from '../../components/Hero'
import './Contact.css'
import ReactStrapForm from '../../components/Form/ReactStrapForm'
import Header from '../../components/Header'

class Contact extends React.Component {
  render() {
    return(
          <div>
          <div className="container-fluid contact-styles">
          <div className="row">
          <div className="col-lg-12 my-5">
          <Header name="Contact"/>

          </div>
          </div>
          <div className="row h-100 justify-content-center">
          <div className="col-lg-3">
          <ContactForm />
          </div>
          </div>
          </div>
          </div>
        )
  }

}

export default Contact
