import styled from 'styled-components';

const Container = styled.div`
  form {
    width: 30vw;
    display: grid;
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

  input[type='submit'],
  button {
    justify-self: center;
    padding: 6px 12px;
    font-size: 18px;
    font-family: var(--main-font);
    cursor: pointer;
    border-color: transparent;
    transition: border-color 0.3s ease;
    background: transparent;
  }

  input[type='submit']:focus,
  button {
    outline-color: var(--light-blue);
  }

  input[type='submit']:hover,
  button:hover {
    border-color: var(--light-blue);
  }

  .col-6 {
    display: flex;
    justify-content: space-between;
  }

  label[for='productImage'] {
    cursor: pointer;
  }
`;

export default Container;
