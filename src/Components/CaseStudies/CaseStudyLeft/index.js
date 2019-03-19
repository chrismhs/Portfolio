import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { withTheme } from "styled-components"

import theme from '../../../styles/theme.style';

const CaseStudyContainer = styled.div`
    background-color: rgb(${props => props.projectTheme.background});
    color: rgb(${props => props.projectTheme.foreground});
    height: 600px;
    border-radius: 20px;
    margin-bottom: 50px;

    @media (max-width: 992px) {
        height: 450px;
      }
`

const ProjectImage = styled.img`
    max-height: 600px;
`
const ProjectLogo = styled.div`
    height: auto;
    padding: 100px 0 40px 0;
    width: ${props => props.logoWidth};

    @media (max-width: 992px) {
        padding: 40px 0 40px 0;
      }
`

const ProjectLink =  styled(Link)`
    color: rgb(${props => props.projectTheme.link});

    :hover {
        color: rgb(${props => props.projectTheme.link});
        filter: brightness(120%);
    }

    :after {
        color: rgb(${props => props.projectTheme.background});
        background: rgb(${props => props.projectTheme.link})
    }
`

class CaseStudyLeft extends Component {
    render() {
        return (
            <div>
                <CaseStudyContainer projectTheme={this.props.projectTheme}>
                    <div className="row">
                        <div className="col-10 col-lg-5 offset-1">
                        <ProjectLogo logoWidth={this.props.logoWidth}>
                                <img src={this.props.logo} className="img-fluid"/>
                            </ProjectLogo>
                            <h2>{this.props.title}</h2>
                            <p>{this.props.body}</p>
                            <ProjectLink projectTheme={this.props.projectTheme} to={this.props.projectLink} href="" className="fancy">View case study</ProjectLink>
                        </div>
                        <div className="col-6">
                            <ProjectImage src={this.props.mainImage} className="img-fluid d-none d-lg-block"/>
                        </div>
                    </div>
                </CaseStudyContainer>
            </div>
        )
    }
}

export default withTheme(CaseStudyLeft);