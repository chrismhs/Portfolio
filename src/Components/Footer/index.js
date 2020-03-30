import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import ReactGA from "react-ga";

const Container = styled.div`
	padding: 30px 0 50px 0;
`;

const FooterRow = styled.div`
	display: flex;
	justify-content: center;
`;
const SocialLink = styled(ReactGA.OutboundLink)`
	margin: 10px;
	color: rgb(${props => props.theme.link}) !important;

	:hover {
		color: rgb(${props => props.theme.link});
		filter: brightness(120%);
	}

	:after {
		color: rgb(${props => props.theme.background});
		background: rgb(${props => props.theme.link});
	}
`;

const ContactLink = styled(Link)`
	margin: 10px;
	color: rgb(${props => props.theme.link});

	:hover {
		color: rgb(${props => props.theme.link});
		filter: brightness(120%);
	}

	:after {
		color: rgb(${props => props.theme.background});
		background: rgb(${props => props.theme.link});
	}
`;

class Footer extends Component {
	render() {
		return (
			<Container className="container">
				<FooterRow>
					<SocialLink
						eventLabel="github"
						to="https://github.com/chrismhs"
						target="_blank"
						className="fancy"
					>
						Made by me.
					</SocialLink>
				</FooterRow>
				<FooterRow>
					<SocialLink
						eventLabel="linkedin"
						to="https://uk.linkedin.com/in/chrismhs"
						target="_blank"
						className="fancy"
					>
						LinkedIn
					</SocialLink>
					<SocialLink
						eventLabel="medium"
						to="https://medium.com/@chrismhs"
						target="_blank"
						className="fancy"
					>
						Medium
					</SocialLink>
					<ContactLink to="/contact" href="" className="fancy">
						Contact
					</ContactLink>
				</FooterRow>
			</Container>
		);
	}
}

export default withTheme(Footer);
