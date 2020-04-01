import React, { Component } from "react";
import styled, { withTheme } from "styled-components";

const Container = styled.div`
	padding: 0px 0 50px 0;
`;

const Svg = styled.svg`
	margin-right: 60px;
`;

const SvgPath = styled.path`
	mix-blend-mode: screen;
	stroke-width: 12px;
	stroke-dasharray: ${props => props.length}px;
	stroke-dashoffset: ${props => props.length};
	animation: dash 1s cubic-bezier(0.76, 0.48, 0, 1) forwards;
	animation-delay: ${props => props.delay}s;
	stroke: rgb(${props => props.theme[props.color]});
	transition: all 1s linear;

	animation-fill-mode: forwards;

	@keyframes dash {
		to {
			stroke-dashoffset: 0;
		}
	}
`;

class CreationImg extends Component {
	render() {
		return (
			<Container className="container">
				<Svg
					viewBox="0 0 381 74"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g>
						{/* C */}
						<SvgPath
							d="M41.8 31.7C38 27.9 32.76 25.56 26.97 25.56C21.18 25.56 15.94 27.91 12.14 31.7C8.35 35.49 6 40.74 6 46.53C6 52.32 8.35 57.56 12.14 61.36C15.93 65.16 21.18 67.5 26.97 67.5C32.76 67.5 38 65.15 41.8 61.36"
							length="99"
							delay="1"
							color="alt1"
							stroke="rgb(0,0,0)"
						/>
						{/* r */}
						<SvgPath
							d="M54.47 73.32V19.74"
							length="55"
							delay="1.2"
							color="alt2"
							stroke="rgb(0,0,0)"
						/>
						<SvgPath
							className="second"
							d="M54.47 46.5301C54.47 40.7401 56.82 35.5001 60.61 31.7001C64.4 27.9001 69.65 25.5601 75.44 25.5601C81.23 25.5601 86.47 27.9101 90.27 31.7001"
							length="50"
							delay="1.3"
							color="alt3"
							stroke="rgb(0,0,0)"
						/>
						{/* e */}
						<SvgPath
							d="M96.3201 46.53H138.27"
							length="42"
							delay="1.35"
							color="alt2"
							stroke="rgb(0,0,0)"
						/>
						<SvgPath
							d="M132.12 61.3601C128.32 65.1601 123.08 67.5001 117.29 67.5001C111.5 67.5001 106.26 65.1501 102.46 61.3601C98.6601 57.5601 96.3201 52.3201 96.3201 46.5301C96.3201 40.7401 98.6701 35.5001 102.46 31.7001C106.25 27.9001 111.5 25.5601 117.29 25.5601C123.08 25.5601 128.32 27.9101 132.12 31.7001C135.92 35.5001 138.26 40.7401 138.26 46.5301V52.5901"
							length="122"
							delay="1.4"
							color="alt1"
							stroke="rgb(0,0,0)"
						/>
						{/* a */}
						<SvgPath
							d="M194.92 46.5301C194.92 52.3201 192.57 57.5601 188.78 61.3601C184.99 65.1601 179.74 67.5001 173.95 67.5001C168.16 67.5001 162.92 65.1501 159.12 61.3601C155.32 57.5601 152.98 52.3201 152.98 46.5301C152.98 40.7401 155.33 35.5001 159.12 31.7001C162.91 27.9001 168.16 25.5601 173.95 25.5601C179.74 25.5601 184.98 27.9101 188.78 31.7001C192.57 35.5001 194.92 40.7401 194.92 46.5301Z"
							length="135"
							delay="1.5"
							color="alt3"
							stroke="rgb(0,0,0)"
						/>
						<SvgPath
							d="M194.92 73.32V19.74"
							length="55"
							delay="1.55"
							color="alt2"
							stroke="rgb(0,0,0)"
						/>
						{/* t */}
						<SvgPath
							d="M220.5 -0.5V47C220.5 61 235.5 72 249.5 66"
							length="89"
							delay="1.6"
							color="alt1"
							stroke="rgb(0,0,0)"
						/>
						<SvgPath
							d="M206.69 25.74H246.59"
							length="42"
							delay="1.65"
							color="alt3"
							stroke="rgb(0,0,0)"
						/>
						{/* i */}
						<SvgPath
							d="M260.31 19.7401L260.31 73.3201"
							length="55"
							delay="1.7"
							color="alt2"
							stroke="rgb(0,0,0)"
						/>
						<SvgPath
							d="M260.31 12.8999V2.8999"
							length="10"
							delay="1.8"
							color="alt2"
							stroke="rgb(0,0,0)"
						/>

						{/* o */}
						<SvgPath
							d="M275.51 46.53C275.51 40.74 277.86 35.5 281.65 31.7C285.44 27.9 290.69 25.56 296.48 25.56C302.27 25.56 307.51 27.91 311.31 31.7C315.11 35.5 317.45 40.74 317.45 46.53C317.45 52.32 315.1 57.56 311.31 61.36C307.51 65.16 302.27 67.5 296.48 67.5C290.69 67.5 285.45 65.15 281.65 61.36C277.86 57.56 275.51 52.32 275.51 46.53Z"
							length="132"
							delay="1.85"
							color="alt3"
							stroke="rgb(0,0,0)"
						/>
						{/* n */}
						<SvgPath
							d="M332.16 19.7401L332.16 73.3201"
							length="55"
							delay="1.85"
							color="alt2"
							stroke="rgb(0,0,0)"
						/>
						<SvgPath
							d="M332.16 46.5301C332.16 40.7401 334.51 35.5001 338.3 31.7001C342.1 27.9001 347.34 25.5601 353.13 25.5601C358.92 25.5601 364.16 27.9101 367.96 31.7001C371.76 35.5001 374.1 40.7401 374.1 46.5301V73.3201"
							length="95"
							delay="1.9"
							color="alt1"
							stroke="rgb(0,0,0)"
						/>
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="380.11" height="73.5" fill="white" />
						</clipPath>
					</defs>
				</Svg>
			</Container>
		);
	}
}

export default withTheme(CreationImg);
