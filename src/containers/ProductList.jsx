import React from 'react';
import styled from 'styled-components';
import ProductItem from '../components/ProductItem';

const StyledMainContainer = styled.section``;
const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  gap: 26px;
  place-content: center;
  @media (max-width: 640px) {
    & {
      grid-template-columns: repeat(auto-fill, 140px);
    }
  }
`;

function ShopList() {
  return (
    <StyledMainContainer>
      <StyledCardsContainer>
        <ProductItem />
      </StyledCardsContainer>
    </StyledMainContainer>
  );
}

export default ShopList;
