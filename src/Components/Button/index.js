import React from "react";
import styled from "styled-components"
import { BrowserRouter as Link } from "react-router-dom";

const ButtonUI = styled.button`
    background-color: rgb(${props => props.theme.link});
    color: rgb(${props => props.theme.background}) !important;
    padding: 12px 15px;
    border: 0;
    display: block;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    font-family: 'HKGrotesk', Roboto, sans-serif;
    font-weight: 700;
    border-radius: 4px;
    box-shadow: 2px 2px 0px 0px rgb(${props => props.theme.background});

    :hover {
        color: rgb(${props => props.theme.background}) !important;
        margin: -1px 1px 0 0;
        box-shadow: 5px 5px 0px 0px rgb(${props => props.theme.foreground});
        filter: brightness(120%);
    }

    :focus {
        outline: 0;
    }
`

class Button extends React.Component {

    render() {
        return (
            <Link to={this.props.onClick.link}>
                <ButtonUI>
                    {this.props.buttonText}
                </ButtonUI>
            </Link>
        );
    }
}

export default Button;