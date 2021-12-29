import React from 'react';
import styled from 'styled-components';
import OrderItem from '../components/OrderItem';

const StyledOrderContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 300px;
`;

const StyledMyOrder = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const StyledTitle = styled.h1`
  font-size: var(--lg);
  margin-bottom: 40px;
`;

const StyledOrderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

function OrderList() {
  return (
    <StyledMyOrder>
      <StyledOrderContainer>
        <StyledTitle>My orders</StyledTitle>
        <StyledOrderContent>
          <OrderItem />
        </StyledOrderContent>
      </StyledOrderContainer>
    </StyledMyOrder>
  );
}

export default OrderList;
