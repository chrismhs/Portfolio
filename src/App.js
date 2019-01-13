import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="nav">
            <div className="container">
              <div className="row">
                <div class="col-md-6 col-md-offset-4" id="logo">chris.</div>
                <div className="col-md-2"> <p>Contact</p> </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <h1>Chris, a product designer based in London.</h1>
                <h2>Currently working at Triptease, helping hotels drive direct bookings.</h2>
              </div>
            </div>

          </div>
        </header>
      </div>
    );
  }
}

export default App;
