import React from "react";
import styled from "styled-components"

const SlideView = styled.div `
    height: 500px;
    background: url('${props => props.src}') no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    border-radius: 15px;
    @media (max-width: 700px) {
        background-position: left;
    }

`

class Slide extends React.Component {
    render() {
        return <SlideView src={this.props.src}/>;
    }
}

export default Slide;