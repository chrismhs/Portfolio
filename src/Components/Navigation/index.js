import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { withTheme } from 'styled-components';

const Nav = styled.div `
	z-index: 1001;
	text-align: center;
	position: fixed;
	width: 100%;
`

const NavContainer = styled.div `
	text-align: center;
	padding-bottom: 10px;
	position: relative;
	width: 100%;
	// box-shadow: 0px 0px 30px 40px rgba(${props => props.theme.background},1);
	// background: rgba(${props => props.theme.background}, 1);
	transition: 0.5s linear;
`

const Logo = styled.div `
	// display: inherit;
	color: rgb(${props => props.theme.foreground}) !important;
	// text-align: center;
	font-family: 'TiemposHeadline', serif;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	font-size: 24px;
	padding: 12px 0 0 0;
	// left: 50%;
    margin-left: -32px;
	position: absolute;
	transition: 0.5s ease;
	width: 150px;
	// margin-left: -75px;
`;

const LogoClip = styled.div `
	// display: inherit;
	color: rgb(${props => props.theme.background}) !important;
	background-color: rgb(${props => props.theme.foreground});
	text-align: center;
	font-family: 'TiemposHeadline', serif;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	font-size: 24px;
	padding: 12px 0 0 0;
	// left: 50%;
	position: absolute;
	transition: 0.5s ease;
	width: 150px;
	margin-left: -32px;
	clip-path: ${props => props.clip};
	height: 60px;
`;

const clips = {
	notScrolled: "polygon(0px 0px, 24px 0px, 98px 0px, 135px 0px, 140px 0px);",
	scrolled: "polygon(0px 0px, 24px 42px, 98px 60px, 135px 35px, 140px 0px);"
}

LogoClip.defaultProps = {
	clip: clips.notScrolled
}

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



class Navigation extends React.Component {	  
	constructor(props) {
		super(props);
		this.state = {
			clip: clips.notScrolled,
		}
		this.handleScroll = this.handleScroll.bind(this)
	}
	  
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll, true);
	}
	
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll, true);
	}
	
	handleScroll() {
		if (window.scrollY > 100) {
		  console.log("should lock");
		  this.setState({
				scrolling: true,
				clip: clips.scrolled,
		  });
		} else if (window.scrollY < 100) {
		  console.log("not locked" );
		  this.setState({
				scrolling: false,
				clip: clips.notScrolled,
		  });
		}  
	}

	render() {
		return (
			<Nav>
				<NavContainer className="container">
					<Link to="/">
						<Logo>chris.</Logo>
						<LogoClip clip={this.state.clip}>chris.</LogoClip>
					</Link>
					<Contact to="/contact" href="" className="fancy">Contact</Contact>
				</NavContainer>

			</Nav>
		);
	}
}


export default withTheme(Navigation);