import React from "react";
import styled, { withTheme } from "styled-components";

const GridContainer = styled.div`
    position: relative;
    background-color: ${props => props.theme.foreground};
    transition: 0.3s ease-in-out;
    margin-bottom: 30px;
    border-radius: 15px;
    cursor: pointer;


    &:hover {
        transform: scale(1.03);
        transition: 0.3s ease-in-out;
        z-index: 1000;
    }
`

const Grid = styled.div`
    height: 300px;
    background-color: #000000;
    background: ${props => props.theme.background};
    mask: url('${props => props.imgbg}') no-repeat 50% 50%;
    mask-size: cover;
    position: relative;
    opacity: 1;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: scale(1.03);
        transition: 0.3s ease-in-out;
        z-index: 1000;
    }
    
`

const ExperimentImage = styled.div`
    position: absolute;
    height: 300px;
    width: 100%;
    top: 0;
    background: url('${props => props.imgexp}') no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: scale(1.07);
        transition: 0.3s ease-in-out;
        z-index: 1000;
    }
`


class GridItem extends React.Component {
    render() {
        return (
            <GridContainer>
                <Grid imgbg={this.props.imgbg}/>
                <ExperimentImage imgexp={this.props.imgexp}/>
            </GridContainer>
            
        );
    }
}


export default withTheme(GridItem);