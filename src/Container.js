import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '<Container />',
    };
  }

  render() {
    return (
      <div className="container">
        <h1>React starter, {this.props.title}</h1>

        Hello from {this.state.message} !!
      </div>
    );
  }

}

Container.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Container;
