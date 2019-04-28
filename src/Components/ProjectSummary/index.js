import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";
import Fade from 'react-reveal/Fade';

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

class ProjectSummary extends Component {
    render() {
        return (
            <Container className="container">
                <div className="row">
                    <div className="text-center col-12 col-md-6 offset-md-0 order-md-2">
                        <Fade>
                            <MainImg
                                src={this.props.mainImg}
                                alt={this.props.imagealt}
                                className="img-responsive">
                            </MainImg>
                        </Fade>
                    </div>
                    <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-0">
                        <ProjectLogo>
                            <img
                                src={this.props.projectLogo}
                                alt={this.props.imagealt}
                                className="img-fluid"
                            />
                        </ProjectLogo>
                        <SectionHeader>{this.props.projectName}</SectionHeader>
                        <p>{this.props.synopsis}</p>
                        <MyInvolvement
                            year={this.props.year}
                            role={this.props.myrole}
                            technologies={this.props.technologies}
                        />
                    </div>
                </div>
            </Container>
        )
    }
}

export default withTheme(ProjectSummary);