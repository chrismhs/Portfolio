import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";
import ProgressiveImage from 'react-progressive-image';
import inline from 'react-progressive-image';

const imageStyle = {
    height: '100vh',
    position: 'absolute',
    marginTop: '-80px'
};

const Container = styled.div`
    padding: 80px 0 30px 0;
`

const ProjectLogo = styled.div`
    padding: 30px 0;
`

const SectionHeader = styled.h3`
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
                        <ProgressiveImage
                            src={this.props.mainImg}
                            placeholder={inline}
                            className="img-fluid d-none d-md-block"
                            placeholder={this.props.placeMainImg}
                        >
                            {(image, srcSetData) => {
                                return (
                                <img
                                    style={imageStyle}
                                    src={image}
                                    sizes={srcSetData.sizes}
                                />
                                );
                            }}
                        </ProgressiveImage>
                    </div>
                </div>
            </Container>
        )
    }
}

export default withTheme(ProjectSummary);