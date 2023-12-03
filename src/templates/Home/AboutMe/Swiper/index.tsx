// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { CardProps } from 'templates/Home/Portfolio/Card';
import styled, { css } from 'styled-components';

import Certificate1 from 'assets/certificates/html_css.webp';
import Certificate2 from 'assets/certificates/acessibilidade.webp';
import Certificate3 from 'assets/certificates/reactjs.webp';
import Certificate4 from 'assets/certificates/frontend-one.webp';

const Carousel = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CertificateCard background={Certificate1} />
        </SwiperSlide>
        <SwiperSlide>
          <CertificateCard background={Certificate2} />
        </SwiperSlide>
        <SwiperSlide>
          <CertificateCard background={Certificate3} />
        </SwiperSlide>
        <SwiperSlide>
          <CertificateCard background={Certificate4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

export const CertificateCard = styled.div<CardProps>`
  ${({ background }) => css`
    width: 23rem;
    height: 15rem;
    transition: 2s;
    border-radius: 1rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${background});
    box-shadow: 0.3rem 0.4rem 0.9rem rgba(0, 0, 0, 0.9);

    :hover {
      /* scale: 2;
      z-index: 2; */
    }
  `}
`;
