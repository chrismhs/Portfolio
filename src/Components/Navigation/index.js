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
	color: #FFFFFF;
	padding: 12px 0 4px 0;
	position: absolute;
	width: 100%;
`;

const Contact = styled.p `
	float: right;
	padding-top: 16px;
`;

const Navigation = () => (
	<Nav>
		<Logo>chris.</Logo>
		<Contact> Contact</Contact>
  	</Nav>
);

export default Navigation;