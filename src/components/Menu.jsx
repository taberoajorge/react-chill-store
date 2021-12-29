import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
  & {
    width: 100px;
    height: auto;
    border: 1px solid var(--very-light-pink);
    border-radius: 6px;
    padding: 20px 20px 0 20px;
  }
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  & ul li {
    text-align: end;
  }
  & ul li:nth-child(1),
  & ul li:nth-child(2) {
    font-weight: bold;
  }
  & ul li:last-child {
    padding-top: 20px;
    border-top: 1px solid var(--very-light-pink);
  }
  & ul li:last-child a {
    color: var(--hospital-green);
    font-size: var(--sm);
  }
  & ul li a {
    color: var(--back);
    text-decoration: none;
    margin-bottom: 20px;
    display: inline-block;
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="/">
            My orders
          </a>
        </li>

        <li>
          <a href="/">My account</a>
        </li>

        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </StyledMenu>
  );
}

export default Menu;
