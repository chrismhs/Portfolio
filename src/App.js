import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import ScrollToTop from 'react-router-scroll-top'

import theme from './styles/theme.style';

import Navigation from './Components/Navigation'

import Home from './Pages/Home'
import Contact from './Pages/Contact'

import Triptease from './Pages/Projects/Triptease'
import Fixr from './Pages/Projects/Fixr'

const Body = styled.div`
  background-color: ${props => props.theme.background };
  color: ${props => props.theme.foreground};
  transition: 0.5s linear;
  height : 100vh; 
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
                <div className="container">
                    <Navigation />
                    <Route exact path="/" render={() => <Home changeThemeColor={this.changeThemeColor}></Home>} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/projects/triptease" component={Triptease} />
                    <Route exact path="/projects/fixr" component={Fixr} />
                </div>
              </header>
            </div>
          </Body>
        </ThemeProvider>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
