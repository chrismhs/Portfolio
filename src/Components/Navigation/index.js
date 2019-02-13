import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { withTheme } from 'styled-components';


const Nav = styled.div `
	text-align: center;
	padding-bottom: 60px;
	position: relative;
`

const Logo = styled.div `
	display: inherit;
	color: ${props => props.theme.foreground} !important;
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
`;

const Contact = styled.a `
	float: right;
	margin-top: 16px;
	color: ${props => props.theme.link};
	padding-right: 0;

	:hover {
		color: ${props => props.theme.link};
		filter: brightness(120%);
	}
	
	:after {
        color: ${props => props.theme.background}
        background: ${props => props.theme.link}
    }
`;

const Navigation = () => (
	<Nav>
		
		<Link to="/"><Logo>chris.</Logo></Link>
		<Link to="/contact"><Contact href="" className="fancy">Contact</Contact></Link>

  	</Nav>
);

export default withTheme(Navigation);