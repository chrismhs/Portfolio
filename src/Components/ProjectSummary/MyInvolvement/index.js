import React from "react";
import styled, { withTheme } from 'styled-components';

const InvolvementContainer = styled.div`
   background: rgba(${props => props.theme.foreground}, 0.1);
   padding: 20px 20px 10px 20px;
   margin-top: 20px;
   border-radius: 10px;
   transition: 0.5s ease;
`

const LeftColumn = styled.div`
    font-weight: 700;
    width: 150px;
    float: left;

    @media (max-width: 992px) {
        width: 100%;
    }
`
const RightColumn = styled.div`
    float: none;
    width: auto;
    overflow: hidden;
    @media (max-width: 992px) {
        overflow: visible;
    }
`
const InvRow = styled.div`
    margin: 10px 0;
`
const InvHeader = styled.h5`
    font-size: 18px;
    margin-top: -5px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(${props => props.theme.foreground}, 0.2);
`



class MyInvolvement extends React.Component {

    render() {
        return (
            <InvolvementContainer>
                <InvHeader>About my involvement</InvHeader>
                <InvRow>
                    <LeftColumn>Year</LeftColumn>
                    <RightColumn>{this.props.year}</RightColumn>
                </InvRow>
                <InvRow>
                    <LeftColumn>Role</LeftColumn>
                    <RightColumn>{this.props.role}</RightColumn>
                </InvRow>
                <InvRow>
                    <LeftColumn>Technologies</LeftColumn>
                    <RightColumn>{this.props.technologies}</RightColumn>
                </InvRow>
            </InvolvementContainer>
        );
    }
}

export default withTheme(MyInvolvement);