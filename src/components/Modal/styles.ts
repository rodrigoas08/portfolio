import styled, { css } from "styled-components";
import * as ButtonStyles from "components/Button/styles";

export const Shadow = styled.div`
  top: 0;
  left: 0;
  z-index: 2;
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
    width: 45rem;
    color: black;
    height: 60rem;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium} ${theme.spacings.medium};
    animation: openModal 1s linear;

    @keyframes openModal {
      0% {
        transform: scaleX(0) rotateX(180deg);
      }
      100% {
        transform: scaleZ(1) rotateZ(360deg);
      }
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    align-self: start;
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.xxxlarge};
  `}
`;

export const Hr = styled.hr`
  width: 50%;
`;

export const Form = styled.form`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.large};
  `}

  >:nth-child(2n+2) {
    margin-bottom: 2rem;
  }

  ${ButtonStyles.Wrapper} {
    ${({ theme }) => css`
      color: ${theme.colors.white};
      margin-top: ${theme.spacings.xxsmall};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      :hover {
        background-color: ${theme.colors.blueRibbon};
      }
    `}
  }
`;

export const Label = styled.label`
  ${({ theme }) => css`
    align-self: start;
    color: ${theme.colors.text};
    padding-left: ${theme.spacings.xxxsmall};
    > span {
      color: red;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    outline: none;
    height: 3.5rem;
    border-style: none;
    text-transform: lowercase;
    border: 1px solid ${theme.colors.primary};
    border-left: 10px solid ${theme.colors.primary};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall};

    :nth-child(0n + 2) {
      text-transform: capitalize;
    }
  `}
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 39rem;
    resize: none;
    height: 15rem;
    outline: none;
    border-radius: 4px;
    border: 1px solid ${theme.colors.primary};
    border-left: 10px solid ${theme.colors.primary};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall};
  `}
`;
