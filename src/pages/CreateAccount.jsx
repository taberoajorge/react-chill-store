import React from 'react';
import styled from 'styled-components';

const StyledLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const StyledFormContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 300px;
  @media (max-width: 640px) {
    & {
      height: 100%;
    }
  }
`;

const StyledTitle = styled.h1`
  font-size: var(--lg);
  margin-bottom: 36px;
  text-align: start;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  & div {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 640px) {
    & {
      height: 100%;
      justify-content: space-between;
    }
  }
`;

const StyledLabel = styled.label`
  font-size: var(--sm);
  font-weight: bold;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  background-color: var(--text-input-field);
  border: none;
  border-radius: 8px;
  height: 30px;
  font-size: var(--md);
  padding: 6px;
  margin-bottom: 22px;
`;

const StyledPrimaryButton = styled.input`
  background-color: var(--hospital-green);
  border-radius: 8px;
  border: none;
  color: var(--white);
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  height: 50px;
  margin-top: 14px;
  margin-bottom: 30px;
`;

function CreateAccount() {
  return (
    <StyledLogin>
      <StyledFormContainer>
        <StyledTitle>My account</StyledTitle>

        <StyledForm action="/">
          <div>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput type="text" id="name" placeholder="Teff" />

            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput type="text" id="email" placeholder="platzi@example.com" />

            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledInput type="password" id="password" placeholder="*********" />
          </div>

          <StyledPrimaryButton type="submit" value="Create" />
        </StyledForm>
      </StyledFormContainer>
    </StyledLogin>
  );
}

export default CreateAccount;
