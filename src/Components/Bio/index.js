import React from "react";
import styled from "styled-components";

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
						<h1>A product designer in London.</h1>
						<h4>Building digital things for 10 years.</h4>
						<p>
							I work at{" "}
							<Link href={"http://www.triptease.com"} target="blank">
								Triptease
							</Link>
							, helping hotels drive direct bookings. I'm obsessed with
							technology and, by making things constantly, I experiment with
							what's possible. I get my inspiration from the people and products
							around me that I'm natually drawn to.
						</p>
					</div>
				</div>
			</Container>
		);
	}
}

export default Biography;
