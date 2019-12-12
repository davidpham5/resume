import React, { Component } from 'react';
import Header from './Header';

class Page extends Component {
  render () {
    return (
      <div className="p-4 bg-white">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Page;