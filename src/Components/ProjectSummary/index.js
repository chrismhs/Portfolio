import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import Particles from 'react-particles-js';

const MainImg = styled.img`
position: absolute;
margin-top: -80px;
`

const Background = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 800px;
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
            <Background>
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: "50",
                                density: {
                                  enable: true,
                                  value_area: "800"
                                }
                              },
                              color: {
                                value: "#CCCCCC"
                              },
                              shape: {
                                type: "circle",
                                stroke: {
                                  width: "0",
                                  color: "#000000"
                                },
                                polygon: {
                                  nb_sides: "5"
                                },
                                image: {
                                  src: "img/github.svg",
                                  width: "100",
                                  height: "100"
                                }
                              },
                              opacity: {
                                value: "1",
                                random: false,
                                anim: {
                                  enable: true,
                                  speed: "0.001",
                                  opacity_min: "0.1",
                                  sync: true
                                }
                              },
                              size: {
                                value: "2",
                                random: false,
                                anim: {
                                  enable: false,
                                  speed: "20",
                                  size_min: "0.1",
                                  sync: false
                                }
                              },
                            line_linked: {
                                enable: true,
                                distance: "150",
                                color: "#CCCCCC",
                                opacity: "1",
                                width: "1"
                            }
                        }
                    }}
                  style={{
                    width: '100%',
                  }}
                />
            </Background>
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