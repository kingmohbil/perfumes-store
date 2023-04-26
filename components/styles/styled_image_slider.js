import styled from 'styled-components';

const Container = styled.div`
  grid-column: 1 / 3;
  justify-self: center;
  align-self: center;
  height: 500px;
  .swiper-container {
    height: 100%;
    width: 400px;
    display: flex;
    justify-content: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    cursor: grab;
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
