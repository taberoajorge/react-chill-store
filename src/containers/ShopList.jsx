import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { img } from 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

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
const StyledProductCard = styled.div`
  width: 240px;

  & > img {
    width: 240px;
    height: 240px;
    border-radius: 20px;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    & {
      width: 140px;
    }
    & img {
      width: 140px;
      height: 140px;
    }
`;
const StyledProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;

  & > figure {
    margin: 0;
  }
  & > figure img {
    width: 35px;
    height: 35px;
  }
  & > div p:nth-child(1) {
    font-weight: bold;
    font-size: var(--md);
    margin-top: 0;
    margin-bottom: 4px;
  }
  & > div p:nth-child(2) {
    font-size: var(--sm);
    margin-top: 0;
    margin-bottom: 0;
    color: var(--very-light-pink);
  }
`;

function ShopList() {
  return (
    <StyledMainContainer>
      <StyledCardsContainer>
        <StyledProductCard>
          <img
            src={img}
            alt=""
          />
          <StyledProductInfo>
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <img src="./icons/bt_add_to_cart.svg" alt="" />
            </figure>
          </StyledProductInfo>
        </StyledProductCard>
      </StyledCardsContainer>
    </StyledMainContainer>
  );
}

export default ShopList;
