import React from 'react';
import styled from 'styled-components';
import logo from '../../public/assets/logos/logo_yard_sale.svg';

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
`;

const StyledLogo = styled.img`
  width: 150px;
  margin-bottom: 48px;
  justify-self: center;
  display: none;
  
  @media (max-width: 640px) {
    & {
      display: block;
    }
`;

const StyledTitle = styled.h1`
  font-size: var(--lg);
  margin-bottom: 12px;
  text-align: center;
`;

const StyledSubtitle = styled.p`
  color: var(--very-light-pink);
  font-size: var(--md);
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 32px;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 12px;
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

function Login() {
  return (
    <StyledLogin>
      <StyledFormContainer>
        <StyledLogo src={logo} alt="logo" />

        <StyledTitle>Create a new password</StyledTitle>
        <StyledSubtitle>Enter a new passwrd for yue account</StyledSubtitle>

        <StyledForm action="/">
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput type="password" id="password" placeholder="*********" />

          <StyledLabel htmlFor="new-password">Password</StyledLabel>
          <StyledInput type="password" id="new-password" placeholder="*********" />

          <StyledPrimaryButton type="submit" value="Confirm" />
        </StyledForm>
      </StyledFormContainer>
    </StyledLogin>
  );
}

export default Login;
