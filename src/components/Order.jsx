import React from 'react';
import styled from 'styled-components';

const StyledOrder = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  margin-bottom: 12px;

  & p:nth-child(1) {
    display: flex;
    flex-direction: column;
  }
  & p span:nth-child(1) {
    font-size: var(--md);
    font-weight: bold;
  }
  & p span:nth-child(2) {
    font-size: var(--sm);
    color: var(--very-light-pink);
  }
  & p:nth-child(2) {
    text-align: end;
    font-weight: bold;
  }
`;

function Order() {
  return (
    <StyledOrder>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src="./icons/flechita.svg" alt="arrow" />
    </StyledOrder>
  );
}

export default Order;
