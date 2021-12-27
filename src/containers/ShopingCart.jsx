/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import img from 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
import svg from '../../public/assets/logos/flechita.svg';

const StyledProductDetail = styled.div`
  width: 360px;
  padding: 24px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  @media (max-width: 640px) {
    & {
      width: 100%;
    }
`;

const StyledTitleContainer = styled.div`
  display: flex;
`;

const StyledTitle = styled.p`
  font-size: var(--lg);
  font-weight: bold;
  & img {
    transform: rotate(180deg);
    margin-right: 14px;
  }
`;

const StyledOrderContent = styled.div``;

const StyledShoppingCart = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;

  & figure {
    margin: 0;
  }
  & figure img {
    width: 70px;
    height: 70px;
    border-radius: 20px;
    object-fit: cover;
  }
  & p:nth-child(2) {
    color: var(--very-light-pink);
  }
  & p:nth-child(3) {
    font-size: var(--md);
    font-weight: bold;
  }
`;

const StyledOrder = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: center;
  background-color: var(--text-input-field);
  margin-bottom: 24px;
  border-radius: 8px;
  padding: 0 24px;

  & p:nth-child(1) {
    display: flex;
    flex-direction: column;
  }
  & p span:nth-child(1) {
    font-size: var(--md);
    font-weight: bold;
  }
  & p:nth-child(2) {
    text-align: end;
    font-weight: bold;
  }
`;

const StyledButton = styled.button`
  background-color: var(--hospital-green);
  border-radius: 8px;
  border: none;
  color: var(--white);
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  height: 50px;
`;

function ShopingCart() {
  return (
    <StyledProductDetail>
      <StyledTitleContainer>
        <img src={svg} alt="arrow" />
        <StyledTitle>My order</StyledTitle>
      </StyledTitleContainer>

      <StyledOrderContent>
        <StyledShoppingCart>
          <figure>
            <img src={img} alt="bike" />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src={svg} alt="close" />
        </StyledShoppingCart>

        <StyledOrder>
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </StyledOrder>

        <StyledButton>Checkout</StyledButton>
      </StyledOrderContent>
    </StyledProductDetail>
  );
}

export default ShopingCart;
