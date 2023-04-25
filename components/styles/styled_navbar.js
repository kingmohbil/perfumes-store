import styled from 'styled-components';

const Container = styled.div`
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

  a {
    font-size: 24px;
    color: #1c1c1c;
    font-weight: 500;
    border-bottom: 4px solid transparent;
    transition: all 0.2s;
    transition-origin: bottom right;
  }

  a {
    h1 {
    }
  }

  a:hover,
  a.active {
    border-bottom: 4px solid black;
  }

  .toggle {
    display: none;
  }
`;

export default Container;
