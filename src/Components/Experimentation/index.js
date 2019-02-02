import React from "react";
import styled from "styled-components"

const Container = styled.div`
    padding-bottom: 100px;
`


class Experimentation extends React.Component {
    render() {
      return (
          <Container>
            <div className="row">
                <div className="col-md-10 col-lg-8 offset-md-1">
                <h2>Experiment</h2>
                <p>Creative experimentation propels our culture forward. We seek out new things which change our perspective on the old. Sometimes you have to admit you don't have the answer and propel yourself into the unknown.</p>
                </div>
            </div>
          </Container>
      );
    }
  }


export default Experimentation;