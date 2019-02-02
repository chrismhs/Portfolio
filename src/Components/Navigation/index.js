import React, { Component } from 'react';
import styled from 'styled-components';


const Nav = styled.div `
	text-align: center;
`

const Logo = styled.div `
	display: inherit;
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
	padding-top: 16px;
`;

const Navigation = () => (
	<Nav>
		<Contact href="www.google.com"> Contact</Contact>
		<Logo>chris.</Logo>

  	</Nav>
);

export default Navigation;