import './App.css';
import React, { Component } from 'react';
import { HashRouter} from "react-router-dom";
import ReactGA from 'react-ga';

import styled, { ThemeProvider } from "styled-components";
import ScrollToTop from 'react-router-scroll-top'

import theme from './styles/theme.style';

import Navigation from './Components/Navigation'
import Container from './Components/Container'
import Footer from './Components/Footer'

ReactGA.initialize('UA-131855428-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const Body = styled.div`
  background-color: rgb(${props => props.theme.background });
  color: rgb(${props => props.theme.foreground});
  transition: 0.2s linear;
  min-height : 100vh; 
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: theme.primary,
    }
  }
  
  changeThemeColor = (theme) =>{
    this.setState({theme})
  }
  
  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <ThemeProvider theme={this.state.theme}>
            <Body>
              <div className="App">
                <header className="App-header">
                  <Navigation scrolling={this.scrolling} />
                </header>
                <Container changeThemeColor={this.changeThemeColor}/>
                <Footer />
              </div>
            </Body>
          </ThemeProvider>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;
