// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

import './styles.css';
import { CardList } from '../mock';
import Card from '../Card';

const SwiperJS = () => {
  return (
    <Swiper
      spaceBetween={5}
      centeredSlides={false}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        991: {
          slidesPerView: 2,
          grid: {
            rows: 2
          }
        }
      }}
      pagination={true}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
        waitForTransition: true
      }}
      //   effect="flip"
      modules={[Autoplay, Pagination, Navigation]}
      //   className="mySwiper"
    >
      {CardList.map((card) => {
        return (
          <SwiperSlide>
            <Card
              key={crypto.randomUUID()}
              link={card.link}
              repository={card.repository}
              background={card.background}
              title={card.title}
              description={card.description}
              stack={card.stack}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperJS;
