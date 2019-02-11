import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);  
  height: 500px;

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
  margin-top: -30px;
  cursor:'pointer'

  @media (max-width: 768px) {
    right: 0;
  }
`
const PartialLine = styled.div`
  width: 120px;
  height: 4px;
  background-color: ${props => props.theme.foreground};
  margin-top: 5px;
  transition: 0.5s linear;
`

const SliderArrow = styled.img`
  display: ;
  height: 30px;
  width: 20px;
  margin-right: 50px;
  z-index: 1000;
  color: #000000;
  fill: currentColor;
  border: 1px;

`

const SliderArrowLeft = styled(SliderArrow)`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  margin-top: -15px;
  margin-left: 50px;
`


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <SliderArrow src={sliderarrow}
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <SliderArrowLeft left src={sliderarrow}
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
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
          <Link to={slides[this.state.currentSlide].link}>
            <Button buttonText="View project"/>
          </Link>
        </ProjectLink>
      
        <ProjectsHeader className="col-md-10 col-lg-8 offset-md-1">Projects
          <PartialLine />
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