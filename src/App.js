import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import ScrollToTop from 'react-router-scroll-top'

import theme from './styles/theme.style';

import Navigation from './Components/Navigation'
import Container from './Components/Container'
import Footer from './Components/Footer'

const Body = styled.div`
  background-color: rgb(${props => props.theme.background });
  color: rgb(${props => props.theme.foreground});
  transition: 0.5s linear;
  min-height : 100vh; 
`

class App extends Component {
  state = {
    theme: theme.one
  }
  
  changeThemeColor = (theme) =>{
    this.setState({theme})
  }
  
  render() {
    return (
      <Router>
        <ScrollToTop>
        <ThemeProvider theme={this.state.theme}>
          <Body>
            <div className="App">
              <header className="App-header">
                <Navigation />
              </header>
              <Container changeThemeColor={this.changeThemeColor}/>
              <Footer />
            </div>
          </Body>
        </ThemeProvider>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
