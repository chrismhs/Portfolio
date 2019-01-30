import React, { Component } from 'react';
import './index.css';

class burger extends Component {
  render() {
    return (
        <nav className="navigation active">
          <div className="fill"></div>
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      );
  }
};

export default burger;
