import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Flex, Box } from 'grid-styled';
import './Nav.css'

import {
  NavbarFlex,
  NavLinks,
} from './Navbar.style'

export default class Nav extends Component {
  constructor() {
    super();
    this.showNav = this.showNav.bind(this);
  }

  showNav(e) {
    e.preventDefault();
    this.navbar.classList.toggle("show");
  }

  render() {
    return (
      <NavbarFlex wrap align='center' justify='space-around'>
          <Box>
            <NavLinks>
              <NavLink
                activeClassName='active'
                to='/design'
              ><h4 className='h4 xh4'>Design</h4>
              </NavLink>
            </NavLinks>
          </Box>
          <Box>
            <NavLinks>
              <NavLink
                activeClassName='active'
                to='/develop'
              ><h4 className='h4 xh4'>Develop</h4></NavLink>
            </NavLinks>
          </Box>
      </NavbarFlex>
    )
  }
}

