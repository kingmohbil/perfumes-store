import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 450px;
  transform: translateY(15vh);

  .swiper-container {
    height: 100%;
    width: 400px;
    display: flex;
    justify-content: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper {
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--secondary-color);
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: var(--secondary-color);
  }
`;

export default Container;
