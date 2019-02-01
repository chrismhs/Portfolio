import React from "react";
import Slider from "react-slick";
import styled from "styled-components"
import Slide from '../Slide';
import img1 from './CMS-on-red copy.jpg';
import img2 from './AgentPortal.png';
import img3 from './EM.png';
import sliderarrow from './right-arrow.png';
import theme from '../../styles/theme.style';

const Container = styled.div`
  padding-bottom: 100px;
`
const SliderWrapper = styled.div`
  border-radius: 15px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);  
  height: 500px;
`


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img src={sliderarrow}
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img src={sliderarrow}
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

const slides = [
  {src:img1, color:theme.PROJECT_ONE_BG},
  {src:img2, color:theme.PROJECT_TWO_BG},
  {src:img3, color:theme.PROJECT_THREE_BG},
]

class SimpleSlider extends React.Component {

  slideChanged (currentSlide) {
    this.props.changeThemeColor(slides[currentSlide].color)
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      afterChange: this.slideChanged.bind(this)
    };
    return (
      <Container>
        <SliderWrapper>
          <Slider {...settings}>
            {slides.map((slide,i) => {
              return(
                <div key={i}>
                  <Slide src={slide.src}>
                  </Slide>
                </div>
              )
            })}
          </Slider>
        </SliderWrapper>
      </Container>
    );
  }
}

export default SimpleSlider