import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import Biography from '../../Components/Bio'
import CaseStudies from '../../Components/CaseStudies'
import NewsFeed from '../../Components/NewsFeed'

const Container = styled.div`

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