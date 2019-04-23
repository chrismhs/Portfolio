import React from 'react';
import styled, { withTheme } from "styled-components";

const Wrapper = styled.div`
    padding-top: 100px;
    min-height: 400px;
    height: 60vh;
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
                <p>Whether you'd like me to talk at an event, chat to me about a Chris-shaped job opportunity, or simply want to chat about tech, I'm always available.</p>
                <h3> <ContactLink href="mailto:chris@hastings-spital.co.uk">chris@hastings-spital.co.uk</ContactLink></h3>
                
            </Wrapper>
        );
    }
}

export default withTheme(ContactForm);