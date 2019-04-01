import React from 'react';
import styled, { withTheme } from "styled-components";

const H3 = styled.h3`
    padding-bottom: 10px;
`

class AnchorHeader extends React.Component {
	name() {
		// NB. If we want to have child elements, this will need to be more complex
		const text = this.props.children;
		return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
	}

	render() {
		return (
			<H3 id={this.name()}>{this.props.children}</H3>
		);
	}
}

export default withTheme(AnchorHeader);