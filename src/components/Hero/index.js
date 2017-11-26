import React from 'react'

class Hero extends React.Component {
  render() {
    return (
      <div className="jumbotron text-xs-center">
      <h1 className="display-3">Thank You!</h1>
      <p className="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>

      <p>
        Having trouble? <a href="">Contact us</a>
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-sm" href="https://bootstrapcreative.com/" role="button">Continue to homepage</a>
      </p>
    </div>
    )
  }
}

export default Hero
