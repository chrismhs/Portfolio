import React, { Component } from 'react';
import styled, { withTheme, keyframes } from "styled-components";

import Biography from '../../Components/Bio'
import CaseStudies from '../../Components/CaseStudies'
import NewsFeed from '../../Components/NewsFeed'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    transform: rotate(360deg);
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Container = styled.div`
    animation: ${fadeIn} 1s cubic-bezier(0.165, 0.84, 0.44, 1);
`

class Home extends Component {
    render() {
        return (
            <Container className="page">
                <Biography />
                <CaseStudies
                    changeThemeColor={this.props.changeThemeColor}
                />
                <NewsFeed />
            </Container>
        )
    }
}

export default withTheme(Home);