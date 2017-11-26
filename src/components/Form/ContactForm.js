import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Form.css";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }
  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    e.preventDefault();
    this.setState({
       name: "", email: "", message: ""
    })
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <Form
        className=""
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <FormGroup>
          <Input
            className="form-control"
            type="hidden"
            name="form-name"
            value="contact"
          />
          </FormGroup>
          <FormGroup>
          <Label for="name">First Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          </FormGroup>

          <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          </FormGroup>

          <FormGroup>
          <Label>
          Message{" "}
          </Label>
          <Input type="textarea"
            name="message"
            value={message}
            onChange={this.handleChange}
          />
          </FormGroup>

          <FormGroup>
          <Button type="submit" className="btn btn-primary">
            Send
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default ContactForm;
