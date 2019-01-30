import React, { Component } from 'react';
import styled from "styled-components"

const Container = styled.div`
  padding-bottom: 100px;
`

class Biography extends Component {
  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-md-10 col-lg-8">
            <h1>Chris, a product designer based in London.</h1>
            <h2>Currently working at Triptease, helping hotels drive direct bookings.</h2>
          </div>
        </div>
      </Container>
    );
  }
}

export default Biography;