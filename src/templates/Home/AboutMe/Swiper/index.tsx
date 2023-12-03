// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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
    width: 25rem;
    height: 17rem;
    transition: 2s;
    border-radius: 1rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${background});
    box-shadow: 0.3rem 0.4rem 0.9rem rgba(0, 0, 0, 0.9);

    :hover {
      scale: 1.5;
      z-index: 2;
    }
  `}
`;
