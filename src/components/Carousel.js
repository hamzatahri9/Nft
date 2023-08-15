import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/Nfts/bighead.svg';
import img2 from '../assets/Nfts/bighead-1.svg';
import img3 from '../assets/Nfts/bighead-2.svg';
import img4 from '../assets/Nfts/bighead-3.svg';
import img5 from '../assets/Nfts/bighead-4.svg';
import img6 from '../assets/Nfts/bighead-5.svg';
import img7 from '../assets/Nfts/bighead-6.svg';
import img8 from '../assets/Nfts/bighead-7.svg';
import img9 from '../assets/Nfts/bighead-8.svg';
import img10 from '../assets/Nfts/bighead-9.svg';

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  .carousel .slider-wrapper {
    height: 100%;
    width: 100%;
  }
  .carousel-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CarouselComponent = () => {
  return (
    <Container>
      <Carousel showThumbs={false} infiniteLoop autoPlay interval={2000}>
        <div>
          <img src={img1} alt="The Weirdos" />
        </div>
        <div>
          <img src={img2} alt="The Weirdos" />
        </div>
        <div>
          <img src={img3} alt="The Weirdos" />
        </div>
        <div>
          <img src={img4} alt="The Weirdos" />
        </div>
        <div>
          <img src={img5} alt="The Weirdos" />
        </div>
        <div>
          <img src={img6} alt="The Weirdos" />
        </div>
        <div>
          <img src={img7} alt="The Weirdos" />
        </div>
        <div>
          <img src={img8} alt="The Weirdos" />
        </div>
        <div>
          <img src={img9} alt="The Weirdos" />
        </div>
        <div>
          <img src={img10} alt="The Weirdos" />
        </div>
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;
