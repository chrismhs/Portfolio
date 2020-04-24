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
  color: rgb(${(props) => props.theme.alt1});
  transition: 0.4s ease-in-out 0.3s;
`;

const ColorSubHeader = styled.h4`
  color: rgb(${(props) => props.theme.alt1});
  transition: 0.4s ease-in-out 0.3s;
`;

class Biography extends React.Component {
  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-sm-10 col-lg-7 offset-1">
            <CreationImg />
            <ColorSubHeader>
              <SplitText initialPose="exit" pose="enter" wordPoses={bodyPoses}>
                Researching, designing and building digital services for 11
                years. Currently in London.
              </SplitText>
            </ColorSubHeader>
          </div>
        </div>
      </Container>
    );
  }
}

export default Biography;
