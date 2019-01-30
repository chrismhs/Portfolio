import React, { Component } from 'react';
import styled from "styled-components";
import './App.css';

import Biography from './Components/Bio'
import Navigation from './Components/Navigation'
import SimpleSlider from './Components/Carousel'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <Navigation />
            <Biography />
            <SimpleSlider />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
