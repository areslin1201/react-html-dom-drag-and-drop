import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <StyledUl>
        <li>
          <Link to="/">Simple</Link>
        </li>
        <li>
          <Link to="/zone">Zone</Link>
        </li>
      </StyledUl>
    </header>
  )
}

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: center;
  li {
    padding: 10px;
  }
`

export default Header