import React from 'react';
import styled from 'styled-components';
// import menu from './icons/icon_menu.svg';
// import logo from './logos/logo_yard_sale.svg';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid var(--very-light-pink);
`;

const StyledMenu = styled.img`
display: none;
@media (max-width: 640px) {
  & {
    display: block;
  }
`;

const StyledLogo = styled.img`
  width: 100px;
`;

const StyledNavBarRight = styled.div`
    & > ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      height: 60px;
    }
    & ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      height: 60px;
    }   
      & ul li a {
      text-decoration: none;
      color: var(--very-light-pink);
      border: 1px solid var(--white);
      padding: 8px;
      border-radius: 8px;
    }
    & ul li a:hover {
      border: 1px solid var(--hospital-green);
      color: var(--hospital-green);
    }
    @media (max-width: 640px) {
      & ul {
        display: none;
      }
`;

const StyledNavBarLeft = styled.div`
  & > ul {
    margin-left: 12px;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    height: 60px;
  }
  & > ul li a {
    text-decoration: none;
    color: var(--very-light-pink);
    border: 1px solid var(--white);
    padding: 8px;
    border-radius: 8px;
  }
  & > ul li a:hover {
    border: 1px solid var(--hospital-green);
    color: var(--hospital-green);
  }
`;

const StyledNavBarEmail = styled.li`
  color: var(--very-light-pink);
  font-size: var(--sm);
  margin-right: 12px;
  @media (max-width: 640px) {
    & {
      display: none;
    }
  }
`;

const StyledNavBarShoppingCart = styled.li`
  position: relative;
  & > div {
    width: 16px;
    height: 16px;
    background-color: var(--hospital-green);
    border-radius: 50%;
    font-size: var(--sm);
    font-weight: bold;
    position: absolute;
    top: -6px;
    right: -3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Header() {
  return (
    <StyledNav>
      <StyledMenu src="ss" alt="menu" />

      <StyledNavBarLeft>
        <StyledLogo src="logo" alt="logo" />

        <ul>
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
            <a href="/">Others</a>
          </li>
        </ul>
      </StyledNavBarLeft>

      <StyledNavBarRight>
        <ul>
          <StyledNavBarEmail>platzi@example.com</StyledNavBarEmail>
          <StyledNavBarShoppingCart>
            <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div>2</div>
          </StyledNavBarShoppingCart>
        </ul>
      </StyledNavBarRight>
    </StyledNav>
  );
}

export default Header;
