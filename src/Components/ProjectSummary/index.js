import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

const Container = styled.div`
    padding: 80px 0 30px 0;
`

const MainImg = styled.img`
position: absolute;
margin-top: -80px;
`

const ProjectLogo = styled.div`
    padding: 30px 0;
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
                        <h3>{this.props.projectName}</h3>
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