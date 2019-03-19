import React from "react";
import styled from "styled-components"

const SlideView = styled.div `
    height: 600px;
    background: url('${props => props.src}') no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    border-radius: 15px;

    @media (min-height: 700px) {
        height: 700px;
      }


`

class Slide extends React.Component {
    render() {
        return (
            <SlideView src={this.props.src}>
            </SlideView>
        );
    }
}

export default Slide;