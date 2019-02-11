import React from "react";
import styled from "styled-components"

const ButtonUI = styled.a`
    height: 44px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.link} !important;
    filter: brightness(120%);
    padding: 12px 15px;
    border: 0;
    display: block;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    font-family: 'HKGrotesk', Roboto, sans-serif;
    font-weight: 700;
`



class Button extends React.Component {

    render() {
        return (
            <ButtonUI onClick={this.props.onClick}>
                {this.props.buttonText}
            </ButtonUI>
        );
    }
}

export default Button;