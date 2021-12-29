import React from 'react';
import styled from 'styled-components';

const StyledMobileMenu = styled.div`
  padding: 24px;

  & a {
    text-decoration: none;
    color: var(--black);
    font-weight: bold;
    /* margin-bottom: 24px; */
  }
  & ul {
    padding: 0;
    margin: 24px 0 0;
    list-style: none;
  }
  & ul:nth-child(1) {
    border-bottom: 1px solid var(--very-light-pink);
  }
  & ul li {
    margin-bottom: 24px;
  }
`;

const StyledEmail = styled.a`
  font-size: var(--sm);
  font-weight: 300 !important;
`;

const StyledSignOut = styled.a`
  font-size: var(--sm);
  color: var(--hospital-green) !important;
`;

function MobileMenu() {
  return (
    <StyledMobileMenu>
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <StyledEmail href="/">
            platzi@example.com
          </StyledEmail>
        </li>
        <li>
          <StyledSignOut href="/">
            Sign out
          </StyledSignOut>
        </li>
      </ul>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
