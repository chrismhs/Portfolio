import React, { Component } from 'react';
import './App.css';

import Biography from './Components/Bio'
import Navigation from './Components/Burger-nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="nav">
            <div className="container">
              {/*<Navigation />*/}
              <div id="logo">chris.
                <div id="contact"> <p>Contact</p> </div>
              </div>
            </div>
          </div>
          <Biography />
        </header>
      </div>
    );
  }
}

export default App;
