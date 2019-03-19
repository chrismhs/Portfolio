import React from "react";
import Slider from "react-slick";
import styled, { withTheme } from "styled-components"
import Slide from '../Slide';
import img1 from './TT.png';
import img2 from './CMS-on-red copy.jpg';
import img3 from './EM.png';
import img4 from './Main_layup.jpg';
import sliderarrow from './right-arrow.svg';
import Button from '../Button';

import theme from '../../styles/theme.style';

const Container = styled.div`
  padding-bottom: 100px;
  position: relative;
`
const SliderWrapper = styled.div`
  border-radius: 15px;
  // box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);  
  height: 600px;

  @media (min-height: 700px) {
    height: 700px;
  }

`
const ProjectsHeader = styled.h2`
  position: absolute;
  z-index: 1000;
  margin-top: -35px;
  padding: 0;
`
const ProjectLink = styled.div`
  z-index: 1000;
  position: absolute;
  right: 50px;
  margin-top: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 30px;
  }
`

const Polygon = styled.polygon`
  fill: rgb(${props => props.theme.link});
  transition: 0.5s linear;
  
`

const ArrowWrapper = styled.svg`
  height: 34px !important
  width: 21px !important
  margin-right: 60px;
  -webkit-filter: drop-shadow( 3px 3px 1px rgba(0, 0, 0, .5));
  filter: drop-shadow( 2px 2px 1px rgba(0, 0, 0, .5));

  @media (max-width: 768px) {
      margin-right: 40px;
  }
`

const ArrowWrapperLeft = styled(ArrowWrapper)`
  margin-left: 60px;
  z-index: 1000;

  @media (max-width: 768px) {
    margin-left: 40px;
  }
`


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowWrapper height="34" width="21"  className={className} style={{ ...style}} onClick={onClick}>
      <Polygon className="prev" points="0,4 13,17 0,30 4,34 21,17 4,0"/>
    </ArrowWrapper>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <ArrowWrapperLeft height="34" width="21"  className={className} style={{ ...style}} onClick={onClick}>
    <Polygon className="prev" points="21,4 8,17 21,30 17,34 0,17 17,0"/>
  </ArrowWrapperLeft>
  );
}

const slides = [
  {src:img1, color:theme.one, link:"/projects/triptease"},
  {src:img2, color:theme.two, link:"/projects/fixr"},
  {src:img3, color:theme.three, link:"/projects/fixr"},
  {src:img4, color:theme.four, link:"/projects/fixr"},
]

class Carousel extends React.Component {
  state = {
      currentSlide: 0,
    }

  slideChanged (currentSlide) {
    this.setState({ currentSlide });
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
        
        <ProjectLink>
            <Button buttonText="View case study" onClick={slides[this.state.currentSlide]}/>
        </ProjectLink>
      
        <ProjectsHeader className="col-md-10 col-lg-8 offset-md-1">Case studies
        </ProjectsHeader>
        
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

export default withTheme(Carousel);