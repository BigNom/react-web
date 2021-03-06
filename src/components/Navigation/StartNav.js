import React from 'react';
import  NavigationLink from './NavigationLink'
import './Nav.css'

class StartNav extends React.Component {
  state = {
    isTop: true,
  };
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 80;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }
  render() {
    return (
      <div>
      <nav className={this.state.isTop ?
        "navbar navbar-expand-lg navbar-dark fixed-top mb-5" :
        "navbar navbar-expand-lg bg-white fixed-top mb-5"
      }
       >
      <div className="container">
       <NavigationLink to="/" exact={true} className="navbar-brand js-scroll-trigger">React Web</NavigationLink>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavigationLink to="/design" className="nav-link js-scroll-trigger">Design</NavigationLink>
            </li>
            <li className="nav-item">
            <NavigationLink to="/develop" className="nav-link js-scroll-trigger">Develop</NavigationLink>
            </li>
            <li className="nav-item">
            <NavigationLink to="/contact" className="nav-link js-scroll-trigger">Contact</NavigationLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    );
  }
}

export default StartNav;
