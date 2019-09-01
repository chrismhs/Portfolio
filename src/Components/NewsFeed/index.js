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
                        <p>I write about being a designer embedded within technology product teams and the challenges and opportunities that this role provides. All created and held <Link href="https://medium.com/@chrismhs/latest" target="black">on medium</Link>.</p>
                    </SectionHeader>
                    <div className="col-md-6" >
                        <Article
                            sectionHeader="The Direct Booking Summit: Hotel website design takeaways"
                            sectionBody="In an interactive discussion on how to prioritise a direct booking budget, Triptease co-founder, Charlie Osmond, Starwood’s Joe Pettigrew and CEO of D-EDGE ..."
                            mediumLink="https://medium.com/@chrismhs/the-direct-booking-summit-hotel-website-design-takeaways-a546e34be00b"
                            dateTime="Jun 26 • 5 min read"
                        />
                    </div>
                    <div className="col-md-6" >
                        <Article
                            sectionHeader="The five most damaging hotel website design mistakes - and how to fix them"
                            sectionBody="Spending time and effort bringing customers to your website is only half the battle when it comes to driving direct bookings. You also need to make sure ..."
                            mediumLink="https://medium.com/@chrismhs/the-five-most-damaging-hotel-website-design-mistakes-and-how-to-fix-them-cd44f2e78d30"
                            dateTime="May 13 • 5 min read"
                        />
                    </div>
                    <div className="col-md-6" >
                        <Article
                            sectionHeader="The (business) value of design"
                            sectionBody="There's a growing phrase in the product design industry, that 'design should have an equal seat at the table', but how is that earned? Designers can offer..."
                            mediumLink="https://medium.com/@chrismhs/the-business-value-of-design-6f2a840450a0"
                            dateTime="Apr 3 • 3 min read"
                        />
                    </div>
                    <div className="col-md-6" >
                        <Article
                            sectionHeader="Product Design: Should we push specialisation?"
                            sectionBody="Designers come in all shapes and sizes, so why are so many labeled ‘Product Designers’? Should we be supporting specialisation more or be keeping our ..."
                            mediumLink="https://medium.muz.li/product-design-should-we-push-specialisation-ef392c12e42d"
                            dateTime="Feb 20 • 4 min read"
                        />
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsFeed;