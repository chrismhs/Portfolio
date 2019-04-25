import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import Fade from 'react-reveal/Fade';

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
                        <Fade>
                            <img
                                src={this.props.imagesrc}
                                alt={this.props.imagealt}
                                className="img-fluid"
                            />
                        </Fade>
                    </ContentImage>
                </div>
            </Container>
        )
    }
}

export default withTheme(SingleImage);