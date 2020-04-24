import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import Fade from "react-reveal/Fade";
import SplitText from "react-pose-text";

import { headlinePoses, bodyPoses } from "../../Animations/Poses";

import MyInvolvement from "./MyInvolvement";

const MainImg = styled.img`
  height: 600px;

  @media (max-width: 768px) {
    position: relative;
    height: 400px;
    padding-top: 30px;
  }
`;

const Container = styled.div`
  padding: 80px 0 50px 0;

  @media (max-width: 768px) {
    padding: 30px 0 30px 0;
  }
`;

const SectionHeader = styled.h1`
  padding: 50px 0 10px;
`;

class ProjectSummary extends Component {
  render() {
    return (
      <Container className="container">
        <div className="row">
          <div className="text-center col-12 col-md-6 offset-md-0 order-md-2">
            <Fade delay={500} duration={1000}>
              <MainImg
                src={this.props.mainImg}
                alt={this.props.imagealt}
                className="img-responsive"
              ></MainImg>
            </Fade>
          </div>
          <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-0">
            {/* <ProjectLogo>
							<img
								src={this.props.projectLogo}
								alt={this.props.logoalt}
								className="img-fluid"
							/>
						</ProjectLogo> */}
            <SectionHeader>
              <SplitText
                initialPose="exit"
                pose="enter"
                wordPoses={headlinePoses}
              >
                {this.props.projectName}
              </SplitText>
            </SectionHeader>
            <Fade delay={1500} duration={1000}>
              <div>
                <p>{this.props.synopsis}</p>
                <MyInvolvement
                  year={this.props.year}
                  role={this.props.myrole}
                  technologies={this.props.technologies}
                />
              </div>
            </Fade>
          </div>
        </div>
      </Container>
    );
  }
}

export default withTheme(ProjectSummary);
