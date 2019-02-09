import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import Biography from '../../Components/Bio'
import Carousel from '../../Components/Carousel'
import Experimentation from '../../Components/Experimentation'

const Container = styled.div`

`

class Home extends Component {
    render() {
        return (
            <Container>
                <Biography />
                <Carousel
                    currentTheme={this.props.theme}
                    changeThemeColor={this.props.changeThemeColor}
                />
                <Experimentation />
            </Container>
        )
    }
}

export default withTheme(Home);