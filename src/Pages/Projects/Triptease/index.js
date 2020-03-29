import React, { Component } from "react";
import styled, { withTheme } from "styled-components";

import theme from "../../../styles/theme.style";

import Logo from "./Logo.png";
import img1 from "./chat-flow-main.png";
import img2 from "./response-flow.png";
import img3 from "./example-response-screenshot.png";
import img4 from "./fallback.png";
import img5 from "./Enclosed-Chat.png";

// import ParticleBackground from '../../../Components/Backgrounds/Particles';

import ProjectSummary from "../../../Components/ProjectSummary";
import TextSection from "../../../Components/TextSections/TextSection";
import SingleImage from "../../../Components/Images/SingleImage";

const Container = styled.div``;

class Triptease extends Component {
	changeColor() {
		this.props.changeThemeColor(theme.one);
	}

	render() {
		return (
			<Container onLoad={this.changeColor.bind(this)} className="page">
				{/* <ParticleBackground/> */}
				<ProjectSummary
					projectLogo={Logo}
					logoalt={"Triptease logo"}
					projectName="A.I. in hospitality"
					synopsis="Communication is exceptionally important in the hotel industry and with overseas calls still costing a small fortune, many guests turn to online chat to get answers to their questions. But, with profit margins being squeezed, hotels don’t have the resource to sit by the phone. That's why we built the Auto-Agent."
					mainImg={img1}
					imagealt={"Chat flow UI"}
					year="2018"
					myrole="Product designer, Conversational interfaces"
					technologies="Natural language processing, Intent-based analysis, State management"
				></ProjectSummary>

				<TextSection
					sectionHeader="Challenges & opportunities"
					sectionParagraph={[
						"Technology is almost at the point where humans can have quality conversations with machines. Almost. The biggest challenge with A.I. is that, for years, many companies have tried to impress people with gimmicks - you put a chat bot in front of someone and say ‘ask a question’ and that person will type ‘how’s the weather’... which is a question we found is asked less than 0.01% in reality.",
						"We knew this because we were running a successful hotel chat product for a year. We could analyse millions of real conversations and expose the most common questions. This gave us a unique opportunity to create a chat bot that is actually useful.",
						"The challenge was always very real though. Dialect is hard, technology is new and building an automatic communication service in a hospitality industry leaves little room for error."
					]}
				/>
				<SingleImage imagesrc={img2} imagealt={"Conversation flow diagram"} />
				<TextSection
					sectionHeader="Shortcutting onboarding"
					sectionParagraph={[
						"Triptease provide for many types of hotels and when building a new solution you need to tackle a significant part of the puzzle in one go to prove the value to early adopters. Without these first few customers, you simply have no-one to test iterations on.",
						"We highlighted a set of 70 FAQ questions that were asked regularly worldwide. By answering these questions, we estimated a response rate of 40%-50%.",
						"Our excited early adopters were happy to fill out these questions, but as we grew, the size of the initial onboarding task was too great for many prospects, so we created an automatic FAQ generator, born from a hackday, which took data from a 3rd party API and spat out up to 25 well-written responses."
					]}
				/>
				<SingleImage
					imagesrc={img3}
					imagealt={"Pre-filled responses screenshot"}
				/>
				<TextSection
					sectionHeader="Graceful degradation"
					sectionParagraph={[
						"The biggest challenge in conversational interfaces is failing gracefully. If the chatbot is unable to continue conversation, it needs to be able to get hold an email address to allow the conversation to continue with hotel staff but personal details are a valuable commodity, which people are wising up to. So, the challenge is to have the guest want to leave contact their contact information.",
						"The most important thing is making sure there are no dead ends. Imagine a maze. The most disappointing and heart-breaking moments are when you are presented with no more obvious options, but if we keep the journey going, the user never feels forced. By keeping options for conversation open, yet provide the ability to leave contact details at any time, we saw a significant uplift in email submission."
					]}
				/>
				<SingleImage imagesrc={img4} imagealt={"Clarification UX flow"} />
				<TextSection
					sectionHeader="What’s next?"
					sectionParagraph={[
						"As Triptease expands into Asia, internationalisation is the main focus. The first challenge will be to make the bot multi-lingual, which is surprisingly hard. IBM Watson, doesn’t yet have advanced support for a number languages, but more challenging for Triptease is that for each language, you need to train responses, which can only be done in the native tongue. There is a possibility to Google Translate, but in initial tests, the nuance of dialect is lost and IBM Watson misses the context, meaning a higher failure rate.",
						"Additionally, many APAC hotels have different operating procedures. Some have more available staff, so they have the chat solution staffed 24/7. Their problem is classification of incoming chats; figuring out where their time is better spent and improve speed of response for the higher-value conversations.",
						"Regardless of what’s next, Conversational A.I. is a challenging, yet exciting space."
					]}
				/>
				<SingleImage imagesrc={img5} imagealt={"Clarification UI prototype"} />
			</Container>
		);
	}
}

export default withTheme(Triptease);
