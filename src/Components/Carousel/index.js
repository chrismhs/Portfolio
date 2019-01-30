import React from "react";
import Slider from "react-slick";
import styled from "styled-components"
import img1 from './CMS-on-red copy.jpg';
import img2 from './Dashboard.jpg';
import img3 from './EM.png';

const Container = styled.div`
`

const Slide = styled.div`
  height: 500px;
  background-image: url(${img1}) no-repeat center / cover;
  background-color: red;
`
const Img = styled.img`
  height: 100%;
`


class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container>
        <Slider {...settings}>
          <div>
            <Slide>
              <Img></Img>
            </Slide>
          </div>
          <div>
            <Slide>
              <Img src={img2}></Img>
            </Slide>
          </div>
          <div>
          <Slide>
              <Img src={img3}></Img>
            </Slide>
          </div>
        </Slider>
      </Container>
    );
  }
}

export default SimpleSlider