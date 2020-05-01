import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";

import SplitText from "react-pose-text";

import { headlinePoses } from "../../../Animations/Poses";

const Container = styled.div`
	height: 280px;
	/* min-height: 260px;
	max-height: 300px; */
`;

const SideProjectLink = styled(ReactGA.OutboundLink)`
	margin: 0px 20px 5px 0;
	display: inline-block;
	color: rgb(${(props) => props.theme.link}) !important;
	transition: 0.2s ease-in-out;
	font-size: 20px;

	:hover {
		color: rgb(${(props) => props.theme.link});
		filter: brightness(150%);
	}

	:after {
		color: rgb(${(props) => props.theme.background});
		background: rgb(${(props) => props.theme.link});
	}
`;

const ContributorLink = styled.a`
	color: rgb(${(props) => props.theme.link});
	margin: 50px 0 0 0;
	font-weight: 400;
	transition: 0.2s ease-in-out;

	:hover {
		color: rgb(${(props) => props.theme.link});
		filter: brightness(120%);
		text-decoration: underline;
	}

	:after {
		color: rgb(${(props) => props.theme.background});
		background: rgb(${(props) => props.theme.link});
	}
`;

class SideProject extends React.Component {
	render() {
		return (
			<Container>
				{/* <h3>Side hustling</h3> */}
				<h3>
					<SplitText initialPose="exit" pose="enter" wordPoses={headlinePoses}>
						{this.props.project.description}
					</SplitText>
				</h3>
				<SideProjectLink
					eventLabel={this.props.project.eventlabel}
					to={this.props.project.linkurl}
					target="_blank"
					// className="fancy"
				>
					{this.props.project.linktext}
				</SideProjectLink>
				<p>
					With{" "}
					{this.props.project.contributors.map((name, i) => [
						i > 0 && ", ",
						<ContributorLink
							key={i}
							href={this.props.project.contributorscontact[i]}
						>
							{name}
						</ContributorLink>,
					])}
				</p>
			</Container>
		);
	}
}

export default SideProject;
