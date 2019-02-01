import React, { Component } from 'react';
import styled from "styled-components";
import './App.css';

import theme from './styles/theme.style';

import Biography from './Components/Bio'
import Navigation from './Components/Navigation'
import SimpleSlider from './Components/Carousel'


const Body = styled.div`
  background-color: ${props => props.themeColor};
`


// let theButton = document.getElementsByClassName('btn-primary');

// theButton.onclick = function () {

// }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {themeColor: theme.PRIMARY_COLOR};
  }

  changeThemeColor(bgcolor){
    this.setState({themeColor: bgcolor})
  }

  render() {
    return (
      <Body themeColor={this.state.themeColor}>
        <div className="App">
          <header className="App-header">
            <div className="container">
              <Navigation />
              <Biography />
              <a class="btn btn-primary" href="#" role="button" onClick={()=> this.changeThemeColor(theme.SECONDARY_COLOR)}>Link</a>
              <SimpleSlider />
            </div>
          </header>
        </div>
      </Body>
    );
  }
}

export default App;
