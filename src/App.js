import React, { Component } from 'react';
import styled from "styled-components";
import FadeIn from 'react-fade-in';
import './App.css';

import theme from './styles/theme.style';

import Biography from './Components/Bio'
import Navigation from './Components/Navigation'
import Carousel from './Components/Carousel'


const Body = styled.div`
  background-color: ${props => props.themeColor};
  transition: background 0.5s linear;
`
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
              <FadeIn transitionDuration={800}>
                <Carousel
                  changeThemeColor={this.changeThemeColor.bind(this)}
                />
              </FadeIn>
            </div>
          </header>
        </div>
      </Body>
    );
  }
}

export default App;
