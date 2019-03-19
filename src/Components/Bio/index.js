import React from "react";
import styled from "styled-components"

const Container = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
`

class Biography extends React.Component {
  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-md-10 col-lg-8 offset-md-1">
            <h1>Chris, a product designer based in London.</h1>
            <h4>Builder of digital things for 10 years. Currently working at <a id="fancy" href="http://www.triptease.com" target="blank">Triptease</a>, helping hotels drive direct bookings.</h4>
          </div>
        </div>
      </Container>
    );
  }
}

export default Biography;