import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import theme from '../../../styles/theme.style';

import Logo from './box-logo-red.png';
import img1 from './fixr-main-image.png';
import img2 from './EM.png';
import img3 from './Process.png';

import ProjectSummary from '../../../Components/ProjectSummary'
import TextSection from '../../../Components/TextSections/TextSection';
import ContentImages from '../../../Components/Images/ContentImages';
import SingleImage from '../../../Components/Images/SingleImage';

const Container = styled.div`

`


class Triptease extends Component {   
    changeColor(){
        this.props.changeThemeColor(theme.two)
    }

    render() {
        return (
            <Container onLoad={this.changeColor.bind(this)} className="page">
                <ProjectSummary
                    projectLogo={Logo}
                    projectName="Entry Manager"
                    synopsis="A door management solution built for speed. Built on iOS and Android for both mobile and tablet devices, it aims to be the most efficient ticket scanner in the market, scanning up to 2,000 tickets an hour."
                    mainImg={img1}
                ></ProjectSummary>
                <TextSection
                    sectionHeader="Challenges & opportunities"
                    sectionParagraph={[
                        "Scanning tickets has always been slow. We’ve all been there, the door manager doesn’t have wifi, so the connection is slow, or the person in front has 12 tickets and they are frantically scrolling down a PDF to see which one they haven’t scanned yet.",
                        "As a fast-paced startup, FIXR was keen to make a bold statement; to make the fastest entry manager. Ever. However, this comes with  challenges as the application needs to be secure due to strict capacity laws, it couldn’t ever allow entry to a someone without a valid ticket. A problem made more difficult with real-world usage as many door managers work in areas of patchy reception, like a basement nightclub or even outside at sport events. Also, door managers often wear gloves; albeit the ones with the touch sensitive pads on the thumb and fore-finger, so we had to be wary of fiddley interactions.", 
                        "In terms of technical limitations, it had to be backwards compatable to iPhone 4 and usable on android tablets as many event organisers used them to monitor capacity during the event."
                    ]}
                /> 
                <SingleImage
                    imagesrc={img2}
                />
                <TextSection
                    sectionHeader="The fastest flow"
                    sectionParagraph={[
                        "Most ticket scanners have a well refined flow. Interactions are snappy and there are few steps, but we had an advantage; students purchase tickets differently.",
                        "We found that there is a significant increase of multi-tickets purchases to events because the price is low and student often travel to events together.", 
                        "For each scan, the majority of the time taken is during the scan and submit stages, not the ID check stage, so by processing multiple tickets in one scan would speed up entries.",
                        "By making the main requirement of the scanner be that it can scan multiple tickets in one go, we could drastically speed up the entry time for purchases with multiple tickets."
                    ]}
                /> 
                <SingleImage
                    imagesrc={img3}
                />
            </Container>
        )
    }
}

export default withTheme(Triptease);