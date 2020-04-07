import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

const ProjectLink = styled(Link)`
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

class NextProjectLink extends Component {
  render() {
    return (
      <Container>
        <ProjectLink to={this.props.to} href="" className="fancy">
          Next project: {this.props.nextprojectname}
        </ProjectLink>
      </Container>
    );
  }
}

export default withTheme(NextProjectLink);
