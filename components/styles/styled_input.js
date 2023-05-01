import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 50px;
  overflow: hidden;
  input {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    border: none;
    outline: none;
    background: var(--foreground);
  }

  label {
    position: absolute;
    bottom: 0px;
    left: 0%;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 2px solid black;
  }

  label::after {
    content: '';
    position: absolute;
    left: 0%;
    bottom: -2px;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid var(--light-blue);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  #placeholder {
    position: absolute;
    bottom: 5px;
    left: 0%;
    transition: all 0.3s ease;
  }

  input:focus + label span,
  input:valid + label span {
    transform: translateY(-150%);
    font-size: 14px;
    color: var(--light-blue);
  }

  input:invalid.invalid + label span {
    color: red;
  }

  input:focus + label::after,
  input:valid + label {
    transform: translateX(0);
  }
`;

export default Container;
