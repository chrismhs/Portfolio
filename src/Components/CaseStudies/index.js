import React, { Component } from "react";
import styled, { withTheme } from "styled-components"

import CaseStudyLeft from './CaseStudyLeft'
import ChatAnim from '../../Animations/ChatAnim'

import theme from '../../styles/theme.style';

import LogoTriptease from '../../Pages/Projects/Triptease/Logo.png';
import MainImageTriptease from '../../Pages/Projects/Triptease/chat-flow.png';
import LogoFixr from '../../Pages/Projects/Fixr/box-logo-red.png';
import MainImageFixr from '../../Pages/Projects/Fixr/two-apps.png';

const CaseStudyContainer = styled.div `
    margin-bottom: 100px;
`

class CaseStudies extends Component {
    render() {
        return (
            <CaseStudyContainer>
                <CaseStudyLeft
                    changeThemeColor={this.props.changeThemeColor}
                    projecttheme={theme.one}
                    title={'A.I. in hospitality'}
                    body={'Using a conversational interface and IBM Watson to deliver timely answers to hotel website visitors to help increase conversions.'}
                    logo={LogoTriptease}
                    logoalt={'Triptease logo'}
                    logoWidth={"200px"}
                    mainImage={MainImageTriptease}
                    imagealt={'Chat dialog UI'}
                    showAnim={true}
                    imgAnim={ChatAnim}
                    projectLink={"/projects/triptease"}
                />
                <CaseStudyLeft
                    changeThemeColor={this.props.changeThemeColor}
                    projecttheme={theme.two}
                    title={'Ticketing millenials'}
                    body={'Building a best-in-class door scanner for educational institutes and student societies that fits into their fast-paced and low-cost lifestyles.'}
                    logo={LogoFixr}
                    logoalt={'Fixr logo'}
                    logoWidth={"150px"}
                    mainImage={MainImageFixr}
                    imagealt={'Scanner main list view'}
                    projectLink={"/projects/fixr"}
                />  
            </CaseStudyContainer>
        )
    }
}

export default withTheme(CaseStudies);