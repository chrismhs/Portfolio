import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import ReactGA from 'react-ga';

const ArticleContent = styled.div`
    height: 270px;
    //border: 1px solid rgba(${props => props.theme.foreground},.15);
    border-radius: 10px;
    padding: 30px;
    color: rgb(${props => props.theme.foreground});
    transition: 0.5s ease;
    margin-bottom: 30px;
    background-color: rgba(${props => props.theme.foreground},.03);

    :hover {
        background-color: rgba(${props => props.theme.foreground},.05);
        transition: 0.5s ease;
    }
`
const DateandReadingTime = styled.p`
    margin-bottom: 5px;
    font-size: 14px;
    color: rgba(${props => props.theme.foreground},.7);
`

const ContentCopy = styled.p`
    position: relative;
    height: 4.5em;
    overflow: hidden;
    opacity: 0.7;

`

const LinkContainer = styled.div`
    position: absolute;
    bottom: 60px;
`

const ArticleLink = styled(ReactGA.OutboundLink)`
    color: rgb(${props => props.theme.link}) !important;

    :hover {
		color: rgb(${props => props.theme.link});
		filter: brightness(120%);
	}
	
	:after {
        color: rgb(${props => props.theme.background});
        background: rgb(${props => props.theme.link})
    }
`

class Article extends Component {
    render() {
        return (
                <a href={this.props.mediumLink} target="blank">
                    <ArticleContent>
                        <DateandReadingTime>{this.props.dateTime}</DateandReadingTime>
                        <h5>{this.props.sectionHeader}</h5>
                        <ContentCopy>{this.props.sectionBody}</ContentCopy>
                        <LinkContainer>
                            <ArticleLink  eventLabel={this.props.sectionHeader} className="fancy" to={this.props.mediumLink} target="_blank">Read on...</ArticleLink>
                        </LinkContainer>
                    </ArticleContent>
                </a>

        )
    }
}

export default withTheme(Article);