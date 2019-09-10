import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";
import ReactGA from 'react-ga';

import Biography from '../../Components/Bio'
import CaseStudies from '../../Components/CaseStudies'
import NewsFeed from '../../Components/NewsFeed'

import theme from '../../styles/theme.style';

ReactGA.pageview('/home');

class Home extends Component {
  changeColor(){
    this.props.changeThemeColor(theme.primary)
  }
  render() {
      return (
          <div className="page" onLoad={this.changeColor.bind(this)}>
              <Biography />
              <CaseStudies
                  changeThemeColor={this.props.changeThemeColor}
              />
              <NewsFeed />
          </div>
      )
  }
}

export default withTheme(Home);