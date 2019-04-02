import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

const MainImg = styled.img`
position: absolute;

    @media (max-width: 768px) {
        position: relative;
    }
`

const Background = styled.div`
`

const Container = styled.div`
    padding: 80px 0 30px 0;
    
    @media (max-width: 768px) {
        padding: 30px 0 30px 0;
    }
`

const ProjectLogo = styled.div`
    padding: 30px 0;
    
`

const SectionHeader = styled.h2`
    padding-bottom: 10px;
`


class ProjectSummary extends Component {
    render() {
        return (
            <Container className="container">
                <div className="row">
                    <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 order-md-2">
                        <MainImg src={this.props.mainImg} className="img-fluid"></MainImg>
                    </div>
                    <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-0">
                        <ProjectLogo className="col-6 ">
                            <img src={this.props.projectLogo} className="img-fluid"/>
                        </ProjectLogo>
                        <SectionHeader>{this.props.projectName}</SectionHeader>
                        <p>{this.props.synopsis}</p>
                    </div>
                    
                </div>
            </Container>
        )
    }
}

export default withTheme(ProjectSummary);