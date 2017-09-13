import React, { Component, PropTypes } from 'react';

class ScrollPos extends Component {

  static proptypes = {
    children: PropTypes.func.isRequired
  }

  state = {
    position: null
  }

  componentDIdMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', thishandleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = event.srcElement.body.scrollTop;
    this.setState({
      postion: scrollTop
    })
  }
  render() {
    return (
      <div>
        {this.props.children(this.state.position)}
      </div>
    );
  }
}

export default ScrollPos;
