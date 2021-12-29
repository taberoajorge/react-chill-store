import React from 'react';
import styled from 'styled-components';

const StyledProductInfo = styled.div`
  margin: 24px 24px 0 24px;

  & p:nth-child(1) {
    font-weight: bold;
    font-size: var(--md);
    margin-top: 0;
    margin-bottom: 4px;
  }
  & p:nth-child(2) {
    color: var(--very-light-pink);
    font-size: var(--md);
    margin-top: 0;
    margin-bottom: 36px;
  }
  & p:nth-child(3) {
    color: var(--very-light-pink);
    font-size: var(--sm);
    margin-top: 0;
    margin-bottom: 36px;
  }
`;

const StyledCartButton = styled.button`
  background-color: var(--hospital-green);
  border-radius: 8px;
  border: none;
  color: var(--white);
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Product() {
  return (
    <StyledProductInfo>
      <p>$35,00</p>
      <p>Bike</p>
      <p>
        With its practical position, this bike also fulfills a decorative
        function,
        add your hall or workspace.
      </p>
      <StyledCartButton>
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
        Add to cart
      </StyledCartButton>
    </StyledProductInfo>
  );
}

export default Product;
