import styled from 'styled-components';

const Container = styled.div`
  opacity: 0;
  display: flex;
  transform: scaleX(0);
  transition: all 0.2s;
  transform-origin: right top;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 500px;
  flex-direction: column;
  gap: 30px;
  box-shadow: -10px 0 5px rgba(0, 0, 0, 0.2);

  &.active {
    opacity: 1;
    transform: scaleX(1);
  }
  button {
    width: fit-content;
    align-self: flex-end;
  }
  button:hover {
    border-color: transparent;
  }

  .total-container {
    display: flex;
    justify-content: flex-end;
  }

  .checkout-btn {
    display: flex;
    align-self: center;
  }
`;

export default Container;
