import React from "react";
import styled from "styled-components"

const ButtonUI = styled.a`
    height: 44px;
    background-color: ${props => props.theme.link};
    color: ${props => props.theme.foreground};
    padding: 12px 15px;
    border: 0;
    display: block;
    cursor:pointer;
    transition: 0.5s ease-in-out;
    text-decoration: none;
`



class Button extends React.Component {

    render() {
        return (
            <ButtonUI onClick={this.props.onClick} href="#">
                {this.props.buttonText}
            </ButtonUI>
        );
    }
}

export default Button;