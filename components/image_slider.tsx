import Card from '../components/product_card';
import StyledSlider from './styles/styled_image_slider';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider = () => {
  return (
    <StyledSlider>
      <div className="swiper-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card
              id="1"
              name="Cool Water"
              description="A perfect perfume in winter occasions"
              image="/images/CoolWater.jpeg"
              price={200}
              category="men"
              rating={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              id="1"
              name="Cool Water"
              description="A perfect perfume in winter occasions"
              image="/images/CoolWater.jpeg"
              price={200}
              category="men"
              rating={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              id="1"
              name="Cool Water"
              description="A perfect perfume in winter occasions"
              image="/images/CoolWater.jpeg"
              price={200}
              category="men"
              rating={1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              id="1"
              name="Cool Water"
              description="A perfect perfume in winter occasions"
              image="/images/CoolWater.jpeg"
              price={200}
              category="men"
              rating={1}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </StyledSlider>
  );
};

export default ImageSlider;
