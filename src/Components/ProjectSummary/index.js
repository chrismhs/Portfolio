import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

const MainImg = styled.img`
position: absolute;
margin-top: -80px;
`

const Container = styled.div`
    padding: 80px 0 30px 0;
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
                    <div className="col-md-6 col-sm-10 offset-sm-1 offset-md-0">
                        <ProjectLogo className="col-6 ">
                            <img src={this.props.projectLogo} className="img-fluid"/>
                        </ProjectLogo>
                        <SectionHeader>{this.props.projectName}</SectionHeader>
                        <p>{this.props.synopsis}</p>
                    </div>
                    <div className="col-md-6">
                        <MainImg src={this.props.mainImg} className="img-fluid d-none d-md-block"></MainImg>
                    </div>
                </div>
            </Container>
        )
    }
}

export default withTheme(ProjectSummary);