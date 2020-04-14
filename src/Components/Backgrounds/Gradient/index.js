import React from "react";
import styled from "styled-components";

const FadeContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh
    width: 100%
    // background: -moz-linear-gradient(#520d15 0%, #0f0e0e 100%); /* FF3.6-15 */
    // background: -webkit-linear-gradient(#520d15 0%,#0f0e0e 100%); /* Chrome10-25,Safari5.1-6 */
    // background: linear-gradient(#520d15 0%,#0f0e0e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#520d15', endColorstr='#0f0e0e',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

export default class FadeBackground extends React.Component {
	render() {
		return <FadeContainer />;
	}
}
