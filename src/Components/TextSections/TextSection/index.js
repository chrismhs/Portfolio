import React, { Component } from 'react';
import styled, { withTheme } from "styled-components";

const Container = styled.div`
    padding: 30px 0 30px 0;
`

const SectionHeader = styled.h3`
    padding-bottom: 10px;
`

class TextSection extends Component {
    render() {
        return (
            <Container className="container">
                <div className="row">
                    <div className="col-sm-10 col-lg-8 col-xl-6 offset-sm-1 offset-lg-2 offset-xl-3">
                        <SectionHeader>{this.props.sectionHeader}</SectionHeader>
                        {this.props.sectionParagraph.map((paragraph,i) => {
                            return(
                                <p key={i}>{paragraph}</p>
                            )
                        })}
                    </div>
                </div>
            </Container>
        )
    }
}

export default withTheme(TextSection);