import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

const InputUI = styled.input`
    display: flex;
    width: 100%;
    height: 44px;
    padding: 10px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: none;
    -webkit-appearance: none;
`

class Input extends React.Component {
    render() {
        return (
            <InputUI/>
        );
    }
}

export default withTheme(Input);