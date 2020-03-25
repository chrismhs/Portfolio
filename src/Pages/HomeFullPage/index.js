import React from "react";
import styled, { withTheme } from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";

import Biography from "../../Components/Bio";
import CaseStudyLeft from "../../Components/CaseStudies/CaseStudyLeft";
import theme from "../../styles/theme.style";

import MainImageExpress from "../../Pages/Projects/ExpressBooking/express-cover.png";
import MainImageExpressMobile from "../../Pages/Projects/ExpressBooking/Express-Mobile.png";

import LogoTriptease from "../../Pages/Projects/Triptease/Logo.png";
import MainImageTriptease from "../../Pages/Projects/Triptease/chat-flow.png";
import MainImageTripteaseMobile from "../../Pages/Projects/Triptease/Chat-Mobile.png";
import LogoFixr from "../../Pages/Projects/Fixr/box-logo-red.png";
import MainImageFixr from "../../Pages/Projects/Fixr/two-apps.png";
import MainImageFixrMobile from "../../Pages/Projects/Fixr/EntryManager-Mobile.png";

const sections = [
	{
		projecttheme: theme.three,
		title: "Book hotels faster",
		body:
			"Using a conversational interface and IBM Watson to deliver timely answers to hotel website visitors to help increase conversions.",
		logo: LogoTriptease,
		logoalt: "Triptease logo",
		logoWidth: "200px",
		mainImage: MainImageExpress,
		mainImageMobile: MainImageExpressMobile,
		imagealt: "Chat dialog UI",
		projectLink: "/projects/triptease"
	},
	{
		projecttheme: theme.one,
		title: "A.I. in hospitality",
		body:
			"Using a conversational interface and IBM Watson to deliver timely answers to hotel website visitors to help increase conversions.",
		logo: LogoTriptease,
		logoalt: "Triptease logo",
		logoWidth: "200px",
		mainImage: MainImageTriptease,
		mainImageMobile: MainImageTripteaseMobile,
		imagealt: "Chat dialog UI",
		projectLink: "/projects/triptease"
	},
	{
		projecttheme: theme.two,
		title: "Ticketing millenials",
		body:
			"Building a best-in-class door scanner for educational institutes and student societies that fits into their fast-paced and low-cost lifestyles.",
		logo: LogoFixr,
		logoalt: "Fixr logo",
		logoWidth: "150px",
		mainImage: MainImageFixr,
		mainImageMobile: MainImageFixrMobile,
		imagealt: "Scanner main list view",
		projectLink: "/projects/fixr"
	}
];

// There is one item before the case study sections in the fullpage wrapper
const offset = 1;

const HomeFullPage = ({ changeThemeColor }) => (
	<ReactFullpage
		//fullpage options
		licenseKey={"A341060D-3A10479E-BD586A91-E1D154F8"}
		scrollingSpeed={1000}
		easingcss3={"cubic-bezier(.65,0,.35,1)"}
		onLeave={(o, destination, d) => {
			const usePrimaryTheme =
				destination.index < offset ||
				destination.index >= sections.length + offset;

			const newTheme = usePrimaryTheme
				? theme.primary
				: sections[destination.index - 1].projecttheme;
			changeThemeColor(newTheme);
		}}
		navigation={true}
		navigationPosition={"left"}
		fadingEffect={false}
		/* Options here */

		render={({ state, fullpageApi }) => {
			return (
				<ReactFullpage.Wrapper>
					<div className="section">
						<Biography />
					</div>
					{sections.map(details => (
						<div key={details.title} className="section">
							<CaseStudyLeft changeThemeColor={changeThemeColor} {...details} />
						</div>
					))}
				</ReactFullpage.Wrapper>
			);
		}}
	/>
);

export default withTheme(HomeFullPage);
