import React from "react";
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ButtonUI = styled.button`
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
    border-radius: 4px;
    box-shadow: 2px 2px 0px 0px ${props => props.theme.link};

    :hover {
        color: ${props => props.theme.link} !important;
        margin: -1px 1px 0 0;
        box-shadow: 5px 5px 0px 0px ${props => props.theme.link};
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