import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Biography from './components/Biography'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="nav">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-4" id="logo">chris.</div>
                <div className="col-md-2"> <p>Contact</p> </div>
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
