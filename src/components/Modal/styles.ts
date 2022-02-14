import styled, { css } from "styled-components";
import * as ButtonStyles from "components/Button/styles";

export const Shadow = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0, 0.4);
  animation: openShadow 1s linear;

  @keyframes openShadow {
    0% {
      background: rgba(0, 0, 0, 0);
    }

    100% {
      background: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    z-index: 2;
    right: 0rem;
    width: 60rem;
    color: black;
    height: 60rem;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium} ${theme.spacings.medium};
  `}

  ${ButtonStyles.Wrapper} {
    animation: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    align-self: center;
    color: ${theme.colors.mineShaft};
    font-size: ${theme.font.sizes.xxxlarge};
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${theme.font.sizes.large};
    padding-top: 2rem;
  `}

  >:nth-child(2n+2){
    margin-bottom: 2rem;
  }
`;
