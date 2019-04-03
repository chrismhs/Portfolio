import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import theme from '../../../styles/theme.style';

import Logo from './Logo.png';
import img1 from './chat-flow.png';
import img2 from './response-flow.png';
import img3 from './example-response-screenshot.png';
import img4 from './fallback.png';

import ParticleBackground from '../../../Components/Backgrounds/Particles';

import ProjectSummary from '../../../Components/ProjectSummary';
import TextSection from '../../../Components/TextSections/TextSection';
import SingleImage from '../../../Components/Images/SingleImage';

const Container = styled.div`

`


class Triptease extends Component {
    changeColor(){
        this.props.changeThemeColor(theme.one)
    }

    render() {
        return (
            <Container onLoad={this.changeColor.bind(this)} className="page">
                <ParticleBackground/>
                <ProjectSummary
                    projectLogo={Logo}
                    projectName="A.I. Augmented Chat"
                    synopsis="Communication is exceptionally important in the hotel industry and with overseas calls still costing a small fortune, many guests want to turn to online chat to get answers to their questions. But, with profit margins being squeezed, hotels simply don’t have the resource to sit by the phone, waiting for a message. Enter, the Auto-Agent."
                    mainImg={img1}
                ></ProjectSummary>
                
                <TextSection
                    sectionHeader="Challenges & opportunities"
                    sectionParagraph={[
                        "Technology is almost at the point where humans can have quality conversations with machines. Almost. The biggest challenge with A.I. is that, for years, many companies have tried to impress people with gimmicks - you put a chat bot in front of someone and say ‘ask a question’ and that person will type ‘how’s the weather’... which is a question we found is asked less than 0.01% in reality.",
                        "We knew this because we were running a successful hotel chat product for a year. We could analyse millions of real conversations and expose the most common questions. This gave us a unique opportunity to create a chat bot that is actually useful.", 
                        "The challenge was always very real though. Dialect is hard, technology is new and building an automatic communication service in a hospitality industry leaves little room for error."
                    ]}
                /> 
                <SingleImage
                    imagesrc={img2}
                />
                <TextSection
                    sectionHeader="Shortcutting onboarding"
                    sectionParagraph={[
                        "Triptease provide for many types of hotels and when building a new solution you need to tackle a significant part of the puzzle in one go to prove the value to early adoptors. Without these first few customers, you simply have no-one to test iterations on.",
                        "We highlighted a set of 70 FAQ questions that were asked regularly worldwide. By answering these questions, we estimated a response rate of 40%-50%.", 
                        "Our excited early adoptors were happy to fill out these questions, but as we grew, the size of the initial onboarding task was too great for many prospects, so we created an automatic FAQ generator, born from a hackday, which took data from a 3rd party API and spat out up to 25 well-written responses."
                    ]}
                /> 
                <SingleImage
                    imagesrc={img3}
                />
                <TextSection
                    sectionHeader="Graceful degregation"
                    sectionParagraph={[
                        "The biggest challenge in conversational interfaces is admitting defeat whilst allowing users to continue to make decisions. Personal details are a valuable commodity, a fact that people are wising up to, but also one the hotel badly needs. The guest should want to leave contact their contact information, so the hotel can continue the conversation, resulting in a higher conversion rate.",
                        "Imagine a maze. The most disappointing and heart-breaking moments are when you are presented with a dead end, but if we keep the journey going, the user never feels forced. By keeping options for conversation open, we would see a significant uplift."
                    ]}
                /> 
                <SingleImage
                    imagesrc={img4}
                />
            </Container>
        )
    }
}

export default withTheme(Triptease);