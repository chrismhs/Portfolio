import React from "react";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";

const Nav = styled.div`
  z-index: 1001;
  text-align: center;
  position: fixed;
  width: 100%;
`;

const NavContainer = styled.div`
  text-align: center;
  padding-bottom: 10px;
  position: relative;
  width: 100%;
  transition: 0.4s ease-in-out 0.3s;
`;

const Logo = styled.div`
  color: rgb(${props => props.theme.foreground}) !important;
  font-family: "TiemposHeadline", serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-size: 24px;
  padding: 12px 0 0 0;
  margin-left: -40px;
  position: absolute;
  transition: 0.4s ease-in-out 0.3s;
  width: 150px;
`;

const LogoClip = styled.div`
  color: rgb(${props => props.theme.background}) !important;
  background-color: rgb(${props => props.theme.foreground});
  text-align: center;
  font-family: "TiemposHeadline", serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-size: 24px;
  padding: 12px 0 0 0;
  position: absolute;
  transition: 0.5s ease;
  width: 150px;
  margin-left: -40px;
  clip-path: ${props => props.clip};
  height: 60px;
`;

const clips = {
  notScrolled: "polygon(15px 0px, 34px 0px, 98px 0px, 115px 0px, 120px 0px);",
  scrolled: "polygon(0px 0px, 24px 42px, 98px 60px, 130px 35px, 140px 0px);"
};

LogoClip.defaultProps = {
  clip: clips.notScrolled
};

const Contact = styled(Link)`
  float: right;
  margin-top: 10px;
  color: rgb(${props => props.theme.link});
  background-color: rgb(${props => props.theme.background});
  margin-right: 10px;
  padding: 7px 12px 5px 12px;
  border-radius: 4px;
  transition: 0.4s ease-in-out 0.3s;

  :hover {
    color: rgb(${props => props.theme.link});
    filter: brightness(120%);
  }
  :after {
    color: rgb(${props => props.theme.background});
    background: rgb(${props => props.theme.link});
  }
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clip: clips.notScrolled
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.setState({
        scrolling: true,
        clip: clips.scrolled
      });
    } else if (window.scrollY < 50) {
      this.setState({
        scrolling: false,
        clip: clips.notScrolled
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
          <Contact to="/contact" href="">
            Contact
          </Contact>
        </NavContainer>
      </Nav>
    );
  }
}

export default withTheme(Navigation);
