import React from 'react';
import styled from 'styled-components';
import ProductInfo from '../components/ProductInfo';

const StyledProductDetail = styled.aside`
  width: 360px;
  padding-bottom: 24px;
  position: absolute;
  right: 0;
  & > img:nth-child(2) {
    width: 100%;
    height: 360px;
    object-fit: cover;
    border-radius: 0 0 20px 20px;
  }

  @media (max-width: 640px) {
    & {
      width: 100%;
    }
  }
`;

const StyledProductDetailClose = styled.div`
  background: var(--white);
  width: 14px;
  height: 14px;
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 2;
  padding: 12px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

function ProductDetail() {
  return (
    <StyledProductDetail>
      <StyledProductDetailClose>
        <img src="./icons/icon_close.png" alt="close" />
      </StyledProductDetailClose>
      <ProductInfo />
    </StyledProductDetail>
  );
}

export default ProductDetail;
