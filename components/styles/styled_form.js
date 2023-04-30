import styled from 'styled-components';

const Container = styled.div`
  form {
    width: 30vw;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  textarea {
    resize: none;
    font-size: 18px;
    padding: 8px;
    height: 128px;
  }

  textarea:focus {
    outline-color: #5fa8d3;
  }
`;

export default Container;
