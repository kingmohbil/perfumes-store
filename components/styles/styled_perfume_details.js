import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  width: ${(props) => props.percentage * 20}px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-family: var(--font-mono);
`;

export default Container;
