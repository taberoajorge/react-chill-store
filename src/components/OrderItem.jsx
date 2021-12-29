import React from 'react';
import styled from 'styled-components';
import svg from '../../public/assets/icons/flechita.svg';

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

function OrderItem() {
  return (
    <StyledShoppingCart>
      <figure>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src={svg} alt="close" />
    </StyledShoppingCart>
  );
}

export default OrderItem;
