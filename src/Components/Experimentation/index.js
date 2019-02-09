import React from "react";
import styled from "styled-components"
import GridItem from '../GridItem';
import img1 from './bg-1.svg';
import img2 from './bg-2.svg';
import img3 from './bg-3.svg';
import exp1 from './exp1.png';

const Container = styled.div`
    padding-bottom: 100px;
`

const ExperimentGrid = styled.div`
    padding-top: 40px;
`

const gridItems = [
    {imgbg:img1, imgexp: exp1},
    {imgbg:img2, imgexp: exp1},
    {imgbg:img3, imgexp: exp1},
    {imgbg:img1, imgexp: exp1},
  ]

class Experimentation extends React.Component {
    render() {
      return (
          <Container>
            <div className="row">
                <div className="col-md-10 col-lg-8 offset-md-1">
                    <h2>Experiments</h2>
                    <p>Creative experimentation propels our culture forward. We seek out new things which change our perspective on the old. Sometimes you have to admit you don't have the answer and propel yourself into the unknown.</p>
                </div>
            </div>
            <ExperimentGrid className="row">
                {gridItems.map((grid,i) => {
                return(
                    <div key={i} className="col-sm-6 col-md-6 col-lg-4">
                    <GridItem imgbg={grid.imgbg} imgexp={grid.imgexp}>
                    </GridItem>
                    </div>
                )
                })}
            </ExperimentGrid>
          </Container>
      );
    }
  }


export default Experimentation;