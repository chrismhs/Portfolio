import React, { Component } from "react";
import styled from "styled-components"

import Article from './Article'
import Link from "../Link"

const SectionHeader = styled.div`
margin-bottom: 30px;
`

class NewsFeed extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <SectionHeader className="col-md-8 col-lg-6 offset-md-1">
                        <h2>Writings</h2>
                        <p>I realise that time doesn't favour tech articles, so I doubt that my list of available articles will reach above a handful but hopefully those few will be relevant. All created and held <Link href="https://medium.com/@chrismhs/latest" target="black">on medium</Link>.</p>
                    </SectionHeader>
                    <div className="col-md-6" >
                        <Article
                            sectionHeader="The (business) value of design"
                            sectionBody="There's a growing phrase in the product design industry, that 'design should have an equal seat at the table', but how is that earned? Designers can offer..."
                            mediumLink="https://medium.com/@chrismhs/the-business-value-of-design-6f2a840450a0"
                        />
                    </div>
                    <div className="col-md-6" >
                        <Article
                            sectionHeader="Product Design: Should we push specialisation?"
                            sectionBody="Designers come in all shapes and sizes, so why are so many labeled ‘Product Designers’? Should we be supporting specialisation more or be keeping our ..."
                            mediumLink="https://medium.muz.li/product-design-should-we-push-specialisation-ef392c12e42d"
                        />
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsFeed;