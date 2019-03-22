import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import ContactForm from '../../Components/ContactForm';

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
                <div className="col-xs-10 col-sm-8 col-md-6 col-xl-4 offset-xs-1 offset-sm-2 offset-md-3 offset-xl-4">
                    {/* <h3>Contact</h3> */}
                    <ContactForm/>
                </div>
            </div>
            </Container>
        )
    }
}

export default withTheme(Contact);