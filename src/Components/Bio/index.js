import React from "react";
import styled from "styled-components";
import SplitText from "react-pose-text";

import { headlinePoses, bodyPoses } from "../../Animations/Poses";

import Link from "../Link";

const Container = styled.div`
	padding-top: 120px;
	padding-bottom: 120px;
`;

class Biography extends React.Component {
	render() {
		return (
			<Container>
				<div className="row">
					<div className="col-sm-10 col-lg-7 offset-1">
						<h1>
							<SplitText
								initialPose="exit"
								pose="enter"
								wordPoses={headlinePoses}
							>
								Product designer.
							</SplitText>
						</h1>
						<h4>
							<SplitText initialPose="exit" pose="enter" wordPoses={bodyPoses}>
								Building digital things for 10 years.
							</SplitText>
						</h4>
						<p>
							<SplitText initialPose="exit" pose="enter" wordPoses={bodyPoses}>
								I work at Triptease, helping hotels drive direct bookings. I'm
								obsessed with technology and, by making things constantly, I
								experiment with what's possible. I get my inspiration from the
								people and products around me that I'm natually drawn to.
							</SplitText>
						</p>
					</div>
				</div>
			</Container>
		);
	}
}

export default Biography;
