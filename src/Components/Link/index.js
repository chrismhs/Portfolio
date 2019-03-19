
import styled, { withTheme } from "styled-components"

const Link = styled.a`
    color: rgb(${props => props.theme.link});
    text-decoration: none;
    position: relative;

	:hover {
		color: rgb(${props => props.theme.link});
        filter: brightness(120%);
        transition: all .3s ease-out;
	}
`


export default withTheme(Link);