import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { withTheme } from 'styled-components';

const Nav = styled.div `
	z-index: 1001;
	text-align: center;
	padding-bottom: 60px;
	position: fixed;
	width: 100%;
`

const NavContainer = styled.div `
	text-align: center;
	padding-bottom: 52px;
	position: relative;
	width: 100%;
	background: rgba(${props => props.theme.background}, 0.8);
	transition: 0.5s linear;
`

const Logo = styled.div `
	display: inherit;
	color: rgb(${props => props.theme.foreground}) !important;
	text-align: center;
	font-family: 'TiemposHeadline', serif;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	font-size: 24px;
	padding: 12px 0 4px 0;
	left: 50%;
    margin-left: -32px;
	position: absolute;
	transition: 0.5s linear;
`;

const Contact = styled(Link) `
	float: right;
	margin-top: 14px;
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
`;

const Navigation = () => (
	<Nav>
		<NavContainer>
			<Link to="/"><Logo>chris.</Logo></Link>
			<Contact to="/contact" href="" className="fancy">Contact</Contact>
		</NavContainer>

  	</Nav>
);


export default withTheme(Navigation);