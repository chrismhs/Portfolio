import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";
import ProgressiveImage from 'react-progressive-image';
import inline from 'react-progressive-image';

const imageStyle = {
    height: '100vh',
};

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
                        <ProgressiveImage
                            src={this.props.imagesrc}
                            placeholder={inline}
                            className="img-fluid"
                            placeholder={this.props.placeImageSrc}
                        >
                            {(image, srcSetData) => {
                                return (
                                <img
                                    style={imageStyle}
                                    src={image}
                                    sizes={srcSetData.sizes}
                                />
                                );
                            }}
                        </ProgressiveImage>
                    </ContentImage>
                </div>
            </Container>
        )
    }
}

export default withTheme(SingleImage);