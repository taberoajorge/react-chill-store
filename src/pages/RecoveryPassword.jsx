import React from 'react';
import styled from 'styled-components';
import logo from '../../public/assets/logos/logo_yard_sale.svg';
import email from '../../public/assets/logos/logo_bota_fora.svg';

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
  justify-items: center;
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

const StyledPrimaryButton = styled.button`
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

const StyledEmail = styled.div`
width: 132px;
height: 132px;
border-radius: 50%;
background-color: var(--text-input-field);
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 24px;
}
& > img {
width: 80px;
}`;

const StyledResend = styled.div`
font-size: var(--sm);
}
& > span {
  color: var(--very-light-pink);
}
& > a {
  color: var(--hospital-green);
  text-decoration: none;
}`;

function RecoveryPassword() {
  return (
    <StyledLogin>
      <StyledFormContainer>
        <StyledLogo src={logo} alt="logo" />

        <StyledTitle>Email has been sent!</StyledTitle>
        <StyledSubtitle>
          Please check your inbox for instructions on how to reset the password
        </StyledSubtitle>

        <StyledEmail>
          <img src={email} alt="email" />
        </StyledEmail>

        <StyledPrimaryButton type="submit">Login</StyledPrimaryButton>

        <StyledResend>
          <span>Didn&lsquo;t receive the email?</span>
          <a href="/">Resend</a>
        </StyledResend>
      </StyledFormContainer>
    </StyledLogin>
  );
}

export default RecoveryPassword;
