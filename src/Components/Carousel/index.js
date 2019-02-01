import React from "react";
import Slider from "react-slick";
import styled from "styled-components"
import Slide from '../Slide';
import img1 from './CMS-on-red copy.jpg';
import img2 from './Dashboard.jpg';
import img3 from './EM.png';

const Container = styled.div`
padding-bottom: 100px;
`


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Container>
        <Slider {...settings}>
          <div>
            <Slide src={img1}>
            </Slide>
          </div>
          <div>
            <Slide src={img2}>
            </Slide>
          </div>
          <div>
            <Slide src={img3}>
            </Slide>
          </div>
        </Slider>
      </Container>
    );
  }
}

export default SimpleSlider