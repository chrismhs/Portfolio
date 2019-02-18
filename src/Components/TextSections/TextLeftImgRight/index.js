import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

const Container = styled.div`
    padding: 30px 0 80px 0;
`

const SectionHeader = styled.h3`
    padding-bottom: 10px;
`

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
                    <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1">
                        <img src={this.props.imagesrc} className="img-fluid"/>
                    </div>
                </div>
            </Container>
        )
    }
}

export default withTheme(TextSection);