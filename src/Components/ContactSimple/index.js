import React from 'react';
import styled, { withTheme } from "styled-components";

const Wrapper = styled.div`
margin: 100px 0 200px 0;
text-align: center;
`

const ContactLink = styled.a`
    color: rgb(${props => props.theme.link});
    background-color: rgb(${props => props.theme.background});
    font-family: tiemposheadline;
    transition: 0.3s ease-in-out;

	:hover {
		color: rgb(${props => props.theme.link});
		filter: brightness(120%);
	}
	
	:after {
        color: rgb(${props => props.theme.background});
        background: rgb(${props => props.theme.link})
    }
`

class ContactForm extends React.Component {
  
    render() {
        return (
            <Wrapper>
                <p> Drop me an email. Easy.</p>
                <h3> <ContactLink href="mailto:chris@hastings-spital.co.uk">chris@hastings-spital.co.uk</ContactLink></h3>
                
            </Wrapper>
        );
    }
}

export default withTheme(ContactForm);