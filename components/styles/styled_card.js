import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 2px 10px 5px rgba(0, 0, 0, 0.4);

  height: 400px;
  width: 300px;
  .card-details {
    align-self: start;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 18px 36px;
    flex-grow: 1;
    width: 100%;
    background: #f0f0f0;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    color: gray;
    flex-grow: 1;
  }

  .card-price {
    color: var(--green-color);
  }

  img {
    transition: all 0.2s;
  }
  img:hover {
    transform: scale(1.2);
  }
`;

export default Container;
