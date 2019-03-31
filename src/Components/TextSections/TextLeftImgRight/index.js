import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

import ProgressiveImage from 'react-progressive-image';
import inline from 'react-progressive-image';

const Container = styled.div`
    padding: 30px 0 80px 0;
`

const SectionHeader = styled.h3`
    padding-bottom: 10px;
`

const imageStyle = {
    height: '100vh',
};


class TextSection extends Component {
    render() {
        return (
            <Container className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1 offset-xl-2">
                        <SectionHeader>{this.props.sectionHeader}</SectionHeader>
                        {this.props.sectionParagraph.map((paragraph,i) => {
                            return(
                                <p key={i}>{paragraph}</p>
                            )
                        })}
                    </div>
                    <div className="col-12 col-md-6">
                        <img
                            src={this.props.imagesrc}
                            className="img-fluid"
                        />
                    </div>
                </div>
            </Container>
        )
    }
}

export default withTheme(TextSection);