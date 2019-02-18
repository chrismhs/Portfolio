import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

const Container = styled.div`
    padding: 30px 0 30px 0;
`
const ContentImage = styled.div`
    padding-bottom: 30px;
`

class SingleImage extends Component {
    render() {
        return (
            <Container className="container">
                <div className="row">
                    <ContentImage className="col-lg-8 offset-lg-2">
                        <img src={this.props.imagesrc} className="img-fluid"/>
                    </ContentImage>
                </div>
            </Container>
        )
    }
}

export default withTheme(SingleImage);