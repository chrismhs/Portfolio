import React from "react";
import styled from "styled-components";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";
import ReactGA from "react-ga";

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

const SocialLink = styled(ReactGA.OutboundLink)`
  margin: 0 20px 20px 0;
  color: rgb(${(props) => props.theme.link}) !important;
  transition: 0.4s ease-in-out 0.3s;

  :hover {
    color: rgb(${(props) => props.theme.link});
    filter: brightness(120%);
  }

  :after {
    color: rgb(${(props) => props.theme.background});
    background: rgb(${(props) => props.theme.link});
  }
`;

const ContactLink = styled(Link)`
  margin: 0 20px 20px 0;
  color: rgb(${(props) => props.theme.link});
  transition: 0.4s ease-in-out 0.3s;

  :hover {
    color: rgb(${(props) => props.theme.link});
    filter: brightness(120%);
  }

  :after {
    color: rgb(${(props) => props.theme.background});
    background: rgb(${(props) => props.theme.link});
  }
`;

const Alt1 = styled.span`
  color: rgb(${(props) => props.theme.alt1});
  transition: 0.4s ease-in-out 0.3s;
`;
const Alt2 = styled.span`
  color: rgb(${(props) => props.theme.alt2});
  transition: 0.4s ease-in-out 0.3s;
`;
const Alt3 = styled.span`
  color: rgb(${(props) => props.theme.alt3});
  transition: 0.4s ease-in-out 0.3s;
`;

const Spacer = styled.div`
  height: 100px;
`;

class PastWork extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-10 col-lg-7 offset-1">
            <h3>Previously worked with...</h3>
            <h4>
              <Alt1>Deliveroo,</Alt1> <Alt2>Albion London,</Alt2>{" "}
              <Alt3>Transport for London,</Alt3>{" "}
              <Alt1>Compare the Market,</Alt1> <Alt2>Vodafone,</Alt2>{" "}
              <Alt3>BAE Systems Applied Intelligence,</Alt3> <Alt1>FIXR.</Alt1>
            </h4>
            <Spacer />
            <SocialLinks>
              <SocialLink
                eventLabel="linkedin"
                to="https://uk.linkedin.com/in/chrismhs"
                target="_blank"
                className="fancy"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                eventLabel="github"
                to="https://github.com/chrismhs"
                target="_blank"
                className="fancy"
              >
                Github
              </SocialLink>
              <SocialLink
                eventLabel="medium"
                to="https://medium.com/@chrismhs"
                target="_blank"
                className="fancy"
              >
                Medium
              </SocialLink>
              <ContactLink to="/contact" href="" className="fancy">
                Contact
              </ContactLink>
            </SocialLinks>
          </div>
        </div>
      </div>
    );
  }
}

export default PastWork;
