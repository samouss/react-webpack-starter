import React, { Component } from 'react';
import Header from 'components/Header';
import Content from 'components/Content';

class Container extends Component {
  state = {
    message: '<Container />',
  };

  render() {
    const { message } = this.state;

    return (
      <div style={{ width: '980px', margin: '50px auto' }}>
        <Header title="My React App" />

        <Content message={message} />
      </div>
    );
  }
}

export default Container;
