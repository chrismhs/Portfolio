import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { withTheme } from "styled-components"

import Logo from '../../../Pages/Projects/Triptease/Logo.png';
import MainImage from '../../../Pages/Projects/Triptease/AgentPortal-half.png';

const CaseStudyContainer = styled.div`
    background-color: rgb(${props => props.projecttheme.background});
    color: rgb(${props => props.projecttheme.foreground});
    height: 600px;
    border-radius: 20px;
    margin-bottom: 50px;
`

const ProjectImage = styled.img`
    max-height: 600px;
`
const ProjectLogo = styled.div`
    height: auto;
    padding: 100px 0 40px 0;
    width: ${props => props.logoWidth};
`

const ProjectLink =  styled(Link)`
    color: rgb(${props => props.projecttheme.link});

    :hover {
        color: rgb(${props => props.projecttheme.link});
        filter: brightness(120%);
    }

    :after {
        color: rgb(${props => props.projecttheme.background});
        background: rgb(${props => props.projecttheme.link})
    }
`

class CaseStudyRight extends Component {
    render() {
        return (
            <div>
                <CaseStudyContainer projecttheme={this.props.projecttheme}>
                    <div className="row">
                        <div className="col-10 col-lg-5 offset-1">
                            <ProjectImage src={this.props.mainImage} className="img-fluid"/>
                        </div>
                        <div className="col-6">
                            <ProjectLogo logoWidth={this.props.logoWidth}>
                                <img src={this.props.logo} className="img-fluid"/>
                            </ProjectLogo>
                            <h2>{this.props.title}</h2>
                            <p>{this.props.body}</p>
                            <ProjectLink projecttheme={this.props.projecttheme}  to={this.props.projectLink} href="" className="fancy">View case study</ProjectLink>
                        </div>
                    </div>
                </CaseStudyContainer>
            </div>
        )
    }
}

export default withTheme(CaseStudyRight);