import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

const Container = styled.div`
    padding: 30px 0 30px 0;
`
const ContentImage = styled.div`
    padding-bottom: 30px;
`

class ContentImages extends Component {
    render() {
        return (
            <Container className="container">
                <div className="row">
                    {this.props.ContentImage.map((image,i) => {
                        return(
                            <ContentImage className="col-md-3">
                                <img key={i} src={image.src} className="img-fluid"/>
                            </ContentImage>
                        )
                    })}
                </div>
            </Container>
        )
    }
}

export default withTheme(ContentImages);