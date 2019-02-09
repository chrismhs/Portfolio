import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

const Container = styled.div`

`

class Contact extends Component {
    render() {
        return (
            <Container>
                Contact
            </Container>
        )
    }
}

export default withTheme(Contact);