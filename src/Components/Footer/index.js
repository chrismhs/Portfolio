import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Container = styled.div`
    padding: 30px 0 80px 0;
`

const FooterRow = styled.div`
    display: flex;
    justify-content: center;

`
const SocialLink = styled.a`
    margin: 10px
    color: rgb(${props => props.theme.link});

	:hover {
		color: rgb(${props => props.theme.link});
		filter: brightness(120%);
	}
	
	:after {
        color: rgb(${props => props.theme.background});
        background: rgb(${props => props.theme.link})
    }
`

const ContactLink = styled(Link)`
    margin: 10px
    color: rgb(${props => props.theme.link});

	:hover {
		color: rgb(${props => props.theme.link});
		filter: brightness(120%);
	}
	
	:after {
        color: rgb(${props => props.theme.background});
        background: rgb(${props => props.theme.link})
    }
`

class Footer extends Component {
    render() {
        return (
            <Container className="container">
                <FooterRow>
                    Made by me, with love ❤️
                </FooterRow>
                <FooterRow>
                    <SocialLink href="https://uk.linkedin.com/in/chrismhs" target="blank" className="fancy">LinkedIn</SocialLink>
                    {/* <SocialLink href="https://github.com/chrismhs" target="blank" className="fancy">GitHub</SocialLink> */}
                    <SocialLink href="https://medium.com/@chrismhs" target="blank" className="fancy">Medium</SocialLink>
                    <ContactLink to="/contact" href="" className="fancy">Contact</ContactLink>
                </FooterRow>
            </Container>
        )
    }
}

export default withTheme(Footer);