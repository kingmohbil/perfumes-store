import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 2px 10px 5px rgba(0, 0, 0, 0.4);

  height: 420px;
  width: 300px;
  .card-details {
    align-self: start;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0.8rem;
    flex-grow: 1;
    width: 100%;
    background: #21222d;
    border-radius: 0 40% 0 0;
    color: #fff;
  }

  .card-description {
    font-size: 1rem;
    font-weight: 100;
    flex-grow: 1;
    color: #cbcbcb;
  }

  .card-actions {
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-price {
    font-weight: 700;
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: #35353f;
    color: #fff;
    height: 40px;
    border-radius: 50px;
    font-size: 1.3rem;
    user-select: none;
  }

  .cart {
    width: 160px;
  }

  button:hover {
    opacity: 0.7;
  }

  .card-buttons {
    position: relative;
  }

  .price,
  img {
    user-select: none;
  }
`;

export default Container;
