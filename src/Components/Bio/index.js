import React from "react";
import styled from "styled-components";
import SplitText from "react-pose-text";

import { headlinePoses, bodyPoses } from "../../Animations/Poses";

import CreationImg from "./CreationImg";

const Container = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
`;

const ColorHeader = styled.h1`
  color: rgb(${props => props.theme.alt1});
  transition: 0.4s ease-in-out 0.3s;
`;

const ColorSubHeader = styled.h4`
  color: rgb(${props => props.theme.alt1});
  transition: 0.4s ease-in-out 0.3s;
`;

class Biography extends React.Component {
  render() {
    console.log(this.props.currentTheme);
    return (
      <Container>
        <div className="row">
          <div className="col-sm-10 col-lg-7 offset-1">
            {/* <ColorHeader>
              <SplitText
                initialPose="exit"
                pose="enter"
                wordPoses={headlinePoses}
              >
                All in the name of
              </SplitText>
            </ColorHeader> */}
            <CreationImg />
            <ColorSubHeader>
              <SplitText initialPose="exit" pose="enter" wordPoses={bodyPoses}>
                Researching, designing and building digital services for 11
                years. Currently in London.
              </SplitText>
            </ColorSubHeader>
            {/* <p>
              <SplitText initialPose="exit" pose="enter" wordPoses={bodyPoses}>
                I work at Triptease, helping hotels drive direct bookings. I'm
                obsessed with technology and, by making things constantly, I
                experiment with what's possible. I get my inspiration from the
                people and products around me that I'm natually drawn to.
              </SplitText>
            </p> */}
          </div>
        </div>
      </Container>
    );
  }
}

export default Biography;
