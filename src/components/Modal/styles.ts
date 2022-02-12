import styled, { css } from "styled-components";

export const Shadow = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  position: fixed;
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
    position: fixed;
    top: 10rem;
    left: 37.3%;
    width: 60rem;
    right: 0rem;
    height: 60rem;
    background-color: ${theme.colors.white};
    border: 1px solid red;
    z-index: 2;
    color: black;
  `}
`;
