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
import { CertificatedList } from './mock';

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true
        }}
        pagination={{
          clickable: true
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {CertificatedList.map((item) => {
          return (
            <SwiperSlide key={crypto.randomUUID()}>
              <CertificateCard background={item.path} />
            </SwiperSlide>
          );
        })}
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
      scale: 1.2;
      z-index: 5;
    }
  `}
`;
