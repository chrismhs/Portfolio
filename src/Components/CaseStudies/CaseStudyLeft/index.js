import React, { Component } from "react";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import SplitText from "react-pose-text";

import { headlinePoses, bodyPoses } from "../../../Animations/Poses";

import Fade from "react-reveal/Fade";

const CaseStudyContainer = styled.div`
	/* background-color: rgb(${props => props.projecttheme.background}); */
	color: rgb(${props => props.projecttheme.foreground});
	border-radius: 20px;

	@media (max-width: 992px) {
		height: 450px;
	}
`;

const ProjectLogo = styled.div`
	height: auto;
	padding: 100px 0 40px 0;
	width: ${props => props.logoWidth};

	@media (max-width: 992px) {
		padding: 40px 0 40px 0;
	}
	@media (max-width: 767px) {
		display: none;
	}
`;

const ProjectLink = styled(Link)`
	color: rgb(${props => props.projecttheme.link});
	padding-bottom: 4px;
	border-bottom: 2px solid rgb(${props => props.projecttheme.link});

	:hover {
		color: rgb(${props => props.projecttheme.link});
		filter: brightness(120%);
	}

	:after {
		color: rgb(${props => props.projecttheme.background});
		background: rgb(${props => props.projecttheme.link});
	}
	@media (max-width: 767px) {
		display: table;
		margin: 0 auto;
	}
`;

const MainImg = styled.img`
	height: 500px;
	padding: 30px;
`;

const MainImgMobile = styled.img`
	padding: 30px 0;
	@media (min-width: 767px) {
		display: none;
	}
`;

const ProjectTitle = styled.h2`
	@media (max-width: 767px) {
		text-align: center;
		font-size: 3rem;
	}
`;

const BodyText = styled.p`
	@media (max-width: 767px) {
		display: none;
	}
`;

class CaseStudyLeft extends Component {
	render() {
		return (
			<div>
				<CaseStudyContainer projecttheme={this.props.projecttheme}>
					<div className="row">
						<div className="col-10 col-md-6 offset-1  offset-md-0">
							<ProjectLogo logoWidth={this.props.logoWidth}>
								<img
									src={this.props.logo}
									alt={this.props.logoalt}
									className="img-fluid"
								/>
							</ProjectLogo>
							<ProjectTitle>{this.props.title}</ProjectTitle>
							<BodyText>{this.props.body}</BodyText>
							<Fade>
								<MainImgMobile
									className="img-fluid"
									showAnim={this.props.showAnim}
									src={this.props.mainImageMobile}
									alt={this.props.imagealt}
								></MainImgMobile>
							</Fade>
							<ProjectLink
								projecttheme={this.props.projecttheme}
								to={this.props.projectLink}
								href=""
							>
								View case study
							</ProjectLink>
						</div>
						<div className="text-center col-6 d-none d-md-block overflow-hidden">
							<Fade>
								<MainImg
									showAnim={this.props.showAnim}
									src={this.props.mainImage}
									alt={this.props.imagealt}
									className="rounded"
								></MainImg>
							</Fade>
						</div>
					</div>
				</CaseStudyContainer>
			</div>
		);
	}
}

export default withTheme(CaseStudyLeft);
