import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import MyInvolvement from './MyInvolvement';

const MainImg = styled.img`
height: 600px;

    @media (max-width: 768px) {
        position: relative;
        height: 400px;
        padding-top: 30px;
    }
`

const Container = styled.div`
    padding: 80px 0 30px 0;
    
    @media (max-width: 768px) {
        padding: 30px 0 30px 0;
    }
`

const ProjectLogo = styled.div`
    padding: 30px 0;
    width: 200px
    
`

const SectionHeader = styled.h2`
    padding-bottom: 10px;
`

const AnchorContainer = styled.div`
    display: inline-block;
    margin: 30px 0 100px 0;

    @media (max-width: 768px) {
        margin-bottom: 0;
    }
`

const Anchor = styled.a`
    color: rgb(${props => props.theme.link}) !important;
    margin-bottom: 5px;
    clear:both;
    float:left;

    :after {
        color: rgb(${props => props.theme.background});
        background: rgb(${props => props.theme.link})
    }
    
`


class ProjectSummary extends Component {
    render() {
        return (
            <Container className="container">
                <div className="row">
                    <div className="text-center col-12 col-md-6 offset-md-0 order-md-2">
                        <MainImg src={this.props.mainImg} className="img-responsive"></MainImg>
                    </div>
                    <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-0">
                        <ProjectLogo>
                            <img src={this.props.projectLogo} className="img-fluid"/>
                        </ProjectLogo>
                        <SectionHeader>{this.props.projectName}</SectionHeader>
                        <p>{this.props.synopsis}</p>
                        <MyInvolvement
                            year={this.props.year}
                            role={this.props.role}
                            technologies={this.props.technologies}
                        />
                        {/* <AnchorContainer className="offset-sm-1 offset-md-0">
                            <Anchor className="fancy">Challenges & opportunities</Anchor>
                            <Anchor className="fancy">The users</Anchor>
                            <Anchor className="fancy">Design process</Anchor>
                            <Anchor className="fancy">Testing</Anchor>
                            <Anchor className="fancy">In hindsight...</Anchor>
                        </AnchorContainer> */}
                    </div>
                    
                </div>
            </Container>
        )
    }
}

export default withTheme(ProjectSummary);