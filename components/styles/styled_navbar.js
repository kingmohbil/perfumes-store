import styled from 'styled-components';

const Container = styled.nav`
  grid-column: 1 / 3;
  min-width: 100%;
  nav {
    display: flex;
    padding: 20px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-links {
    display: flex;
    gap: 16px;
  }

  a,
  button {
    font-size: 24px;
    color: #1c1c1c;
    font-weight: 500;
    border-bottom: 4px solid transparent;
    transition: all 0.2s;
    transition-origin: bottom right;
  }

  a:hover,
  a.active,
  button:hover {
    border-bottom: 4px solid black;
  }

  .toggle {
    display: none;
  }
  button {
    border-color: transparent;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default Container;
