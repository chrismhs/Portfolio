import React, { Component } from "react";
import styled, { withTheme } from "styled-components"

import CaseStudyLeft from './CaseStudyLeft'
import CaseStudyRight from './CaseStudyRight'

import theme from '../../styles/theme.style';

import LogoTriptease from '../../Pages/Projects/Triptease/Logo.png';
import MainImageTriptease from '../../Pages/Projects/Triptease/AgentPortal-half.png';
import LogoFixr from '../../Pages/Projects/Fixr/box-logo-red.png';
import MainImageFixr from '../../Pages/Projects/Fixr/fixr-main-image.png';

const CaseStudyContainer = styled.div `
    margin-bottom: 100px;
`


class CaseStudies extends Component {
    render() {
        return (
            <CaseStudyContainer>
                <CaseStudyLeft
                    projectTheme={theme.one}
                    title={'Augmented A.I. Chat'}
                    body={'Using a conversational interface and IBM Watson to deliver timely answers to hotel website visitors to help increase conversions.'}
                    logo={LogoTriptease}
                    mainImage={MainImageTriptease}
                    projectLink={"/projects/triptease"}
                />
                <CaseStudyRight
                    projectTheme={theme.two}
                    title={'Ticketing millenials'}
                    body={'Building a best-in-class door scanner for educational institutes and student societies that fits into their fast-paced and low-cost lifestyles.'}
                    logo={LogoFixr}
                    mainImage={MainImageFixr}
                    projectLink={"/projects/fixr"}
                />
            </CaseStudyContainer>
        )
    }
}

export default withTheme(CaseStudies);