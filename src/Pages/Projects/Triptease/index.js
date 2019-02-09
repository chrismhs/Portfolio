import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import Logo from './Logo.png';
import img1 from './AgentPortal-half.png';
import img2 from './Chat.jpg';

import ProjectSummary from '../../../Components/ProjectSummary'
import TextSection from '../../../Components/TextSection';
import ContentImages from '../../../Components/Images/ContentImages';

const Container = styled.div`

`
const AnchorContainer = styled.div`
    display: inline-block;
    margin-bottom: 100px;
`

const Anchor = styled.a`
    color: ${props => props.theme.link} !important;
    margin-bottom: 5px;
    clear:both;
    float:left;

    :after {
        color: ${props => props.theme.background}
        background: ${props => props.theme.link}
    }
    
`


class Triptease extends Component {
    render() {
        return (
            <Container>
                <ProjectSummary
                    projectLogo={Logo}
                    projectName="Entry Manager"
                    synopsis="A door managament solution built for speed. Built on iOS and Android for both mobile and tablet devices, it aims to be the most efficient ticket scanner in the market, scanning up to 2,000 tickets an hour."
                    mainImg={img1}
                ></ProjectSummary>
                <AnchorContainer>
                    <Anchor>Challenges & opportunities</Anchor>
                    <Anchor>The users</Anchor>
                    <Anchor>Design process</Anchor>
                    <Anchor>Testing</Anchor>
                    <Anchor>In hindsight...</Anchor>
                </AnchorContainer>
                <TextSection
                    sectionHeader="Challenges & opportunities"
                    sectionParagraph={[
                        "Scanning tickets has always been slow. We’ve all been there, the door manager doesn’t have wifi, so the connection is slow, or the person in front has 12 tickets and they are frantically scrolling down a PDF to see which one they haven’t scanned yet.",
                        "As a fast-paced startup, FIXR was keen to make a bold statement; to make the fastest entry manager. Ever. This doesn’t come without considerations though as the application needs to be secure due to strict capacity laws, it couldn’t ever allow entry to a someone without a valid ticket. A problem made more difficult with real-world usage as many door managers would be working in areas of patchy reception, like a basement nightclub or even outside at sport events. Also, door managers often wear gloves; albeit the ones with the touch sensitive pads on the thumb and fore-finger, so we weren’t totally limited, but we couldn't create fiddley interactions.", 
                        "In terms of technical limitations, it had to be backwards compatable to iPhone 4 and usable on android tablets as many event organisers used them to monitor capacity during the event."
                    ]}
                /> 
                <ContentImages
                    ContentImage={[
                        {src:img2},
                        {src:img2},
                        {src:img2},
                        {src:img2},
                    ]}
                />

            </Container>
        )
    }
}

export default withTheme(Triptease);