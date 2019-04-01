import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import ContactSimple from '../../Components/ContactSimple';

const Container = styled.div`
    padding-top: 120px;
    
    @media (max-width: 768px) {
        padding-top: 50px;
    }
`

class Contact extends Component {
    render() {
        return (
            <Container className="page">
            <div className="row">
                <div className="col-8 offset-2">
                    <ContactSimple/>
                </div>
            </div>
            </Container>
        )
    }
}

export default withTheme(Contact);