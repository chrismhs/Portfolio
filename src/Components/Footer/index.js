import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

const Container = styled.div`
    padding: 30px 0 80px 0;
`

const FooterRow = styled.div`
    display: flex;
    justify-content: center;

`
const SocialLink = styled.a`
    padding: 10px;
    color: rgb(${props => props.theme.link});
	margin-right: 30px;

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
                    <SocialLink href="https://uk.linkedin.com/in/chrismhs" target="blank">LinkedIn</SocialLink>
                    <SocialLink href="https://github.com/chrismhs" target="blank">GitHub</SocialLink>
                    <SocialLink href="https://medium.com/@chrismhs" target="blank">Medium</SocialLink>
                </FooterRow>
            </Container>
        )
    }
}

export default withTheme(Footer);