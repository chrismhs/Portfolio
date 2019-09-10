import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import theme from '../../../styles/theme.style';

import Logo from './box-logo-red.png';
import img1 from './gloved-hand.png';
import img2 from './EM.png';
import img3 from './Process.png';
import img4 from './settings.png';

import ProjectSummary from '../../../Components/ProjectSummary'
import TextSection from '../../../Components/TextSections/TextSection';
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
                    logoalt={"Fixr logo"}
                    projectName="Entry Manager"
                    synopsis="A door management solution built for speed. Built on iOS and Android for both mobile and tablet devices, it aims to be the most efficient ticket scanner in the market, scanning up to 2,000 tickets an hour."
                    mainImg={img1}
                    imagealt={"Pack shot"}
                    year='2017'
                    myrole='Project lead, UX researcher, product designer'
                    technologies="iOS app, android app, graceful service degradation"
                ></ProjectSummary>
                <TextSection
                    sectionHeader="Challenges & opportunities"
                    sectionParagraph={[
                        "Scanning tickets has always been slow. We’ve all been there, the door manager doesn’t have wifi, so the connection is slow, or the person in front has 12 tickets and they are frantically scrolling down a PDF to see which one they haven’t scanned yet.",
                        "As a fast-paced startup, FIXR was keen to make a bold statement; to make the fastest entry manager. Ever. However, this comes with  challenges as the application needs to be secure due to strict capacity laws, it couldn’t ever allow entry to a someone without a valid ticket. A problem made more difficult with real-world usage as many door managers work in areas of patchy reception, like a basement nightclub or even outside at sport events. Also, door managers often wear gloves; albeit the ones with the touch sensitive pads on the thumb and fore-finger, so we had to be wary of fiddly interactions.", 
                        "In terms of technical limitations, it had to be backwards compatible to iPhone 4 and usable on android tablets as many event organisers used them to monitor capacity during the event."
                    ]}
                /> 
                <SingleImage
                    imagesrc={img2}
                    imagealt={"List view product shot"}
                />
                <TextSection
                    sectionHeader="The fastest flow"
                    sectionParagraph={[
                        "Most ticket scanners have a well refined flow. To deliver a quick scan flow, we could simply research other scanners and follow best practices - there’s no point re-inventing the wheel. Our advantage needed to come from our company’s vision; being the best ticketing service for students.",
                        "From the data collected from our early version, we found that there is a significant increase of multiple-ticket purchases to student events because the price is low and student often travel to events together - an opportunity unique to our market.", 
                        "For each scan, the majority of the time taken is during the scan and submit stages, not the ID check stage, so by processing multiple tickets in one scan would speed up entries.",
                        "By making the main requirement of the scanner be that it can scan multiple tickets in one go, we could drastically speed up the entry time for purchases with multiple tickets."
                    ]}
                /> 
                <SingleImage
                    imagesrc={img3}
                    imagealt={"Processing timeline comparison"}
                />
                <TextSection
                    sectionHeader="Iterating & improving"
                    sectionParagraph={[
                        "After testing the original build and running field research trips, we found that many student door managers were even checking the names on the tickets, so the additional 2 clicks to get through the scanning process were slowing down admission. We created a ‘Rapid Scan’ mode, which would stay in a QR scan (camera) mode and automatically check in any ticket it saw, with an undo button to recall the scan if a mistake was made.",
                        "We also found that smaller events only had one door manager, so there wasn’t much need to check the server and wait for a response every single ticket, which is a slow process when there was limited reception (~7s on edge networks). As long as the tickets had a purchase cut-off time, an offline version could be used to scan in locally. For security purposes, we then ran the upload in the background." 
                    ]}
                /> 
                <SingleImage
                    imagesrc={img4}
                    imagealt={"Rapid scanning UI"}
                />
            </Container>
        )
    }
}

export default withTheme(Triptease);