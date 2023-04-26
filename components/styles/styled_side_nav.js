import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 50px 20px;
  width: 200px;
  grid-row: 2 / 4;

  a {
    font-size: 24px;
    color: #1c1c1c;
    font-weight: 500;
    border-bottom: 4px solid transparent;
    transition: all 0.2s;
    transition-origin: bottom right;
  }

  a:hover,
  .active {
    border-bottom: 4px solid black;
  }
`;

export default Container;
