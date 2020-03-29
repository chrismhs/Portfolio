import React from "react";
import styled from "styled-components";
import SplitText from "react-pose-text";

import { headlinePoses, bodyPoses } from "../../Animations/Poses";

const Container = styled.div`
	padding-top: 120px;
	padding-bottom: 120px;
`;

class PastWork extends React.Component {
	render() {
		return (
			<Container>
				<div className="row">
					<div className="col-sm-10 col-lg-7 offset-1">
						<h3>
							<SplitText
								initialPose="exit"
								pose="enter"
								wordPoses={headlinePoses}
							>
								Previously...
							</SplitText>
						</h3>
						<h4>
							<SplitText
								initialPose="exit"
								pose="enter"
								wordPoses={headlinePoses}
							>
								Deliveroo, Albion London, Transport for London, Compare the
								Market, Vodafone, BAE Systems Applied Intelligence.
							</SplitText>
						</h4>
					</div>
				</div>
			</Container>
		);
	}
}

export default PastWork;
