import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";

import theme from "../../../styles/theme.style";

import img1 from "./express-cover.png";

import ProjectSummary from "../../../Components/ProjectSummary";
import InformationNotice from "../../../Components/InformationNotice";
import NextProjectLink from "../../../Components/Link/NextProjectLink";

const Container = styled.div``;

class Express extends Component {
  changeColor() {
    this.props.changeThemeColor(theme.three);
  }

  render() {
    return (
      <Container onLoad={this.changeColor.bind(this)} className="page">
        <ProjectSummary
          logoalt={"Triptease logo"}
          projectName="An easier booking experience"
          synopsis="'Meta Express' layers on top of a hotel's booking engine and provides a streamlined, 3-step booking process for guests booking on mobile from metasearch. Built from the ground up, it was designed to be the fastest and most reliable booking experience for hotels on mobile."
          mainImg={img1}
          imagealt={"Chat flow UI"}
          year="2019 - 2020"
          myrole="Product designer, Research"
          technologies="Transaction automation, Metasearch, Conversion optimisation"
        ></ProjectSummary>
        <InformationNotice
          sectionHeader={"Sensitive project"}
          sectionParagraph={[
            "This project is still in development, so it's too sensitive to release a case study at this time. If you would like to see more, please get in touch."
          ]}
        />
        <NextProjectLink
          to="/projects/triptease"
          nextprojectname={"A.I. In hospitality"}
        />
      </Container>
    );
  }
}

export default withTheme(Express);
