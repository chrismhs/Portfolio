import "./App.css";
import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import ScrollToTop from "react-router-scroll-top";

import theme from "./styles/theme.style";

import Navigation from "./Components/Navigation";
import Container from "./Components/Container";
import Footer from "./Components/Footer";

const Body = styled.div`
	background-color: rgb(${(props) => props.theme.background});
	color: rgb(${(props) => props.theme.foreground});
	transition: 0.4s ease-in-out 0.3s;
	min-height: 100vh;
`;

const themeStyles = Object.keys(theme).map(
	(name) =>
		`#fp-nav.${name} ul li a span {background: rgb(${theme[name].link});}`
);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: theme.primary,
		};
	}

	changeThemeColor = (theme) => {
		this.setState({ theme });
		// document.getElementById("fp-nav").className = `fp-left ${theme.name}`;
	};

	render() {
		return (
			<HashRouter>
				<ScrollToTop>
					<ThemeProvider theme={this.state.theme}>
						<Body>
							<div className="App">
								<style>{themeStyles}</style>

								<header className="App-header">
									<Navigation scrolling={this.scrolling} />
								</header>
								<Container changeThemeColor={this.changeThemeColor} />
								<Footer />
							</div>
						</Body>
					</ThemeProvider>
				</ScrollToTop>
			</HashRouter>
		);
	}
}

export default App;
