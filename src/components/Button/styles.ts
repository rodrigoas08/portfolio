import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: auto;
    height: auto;
    cursor: pointer;
    border-style: none;
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.sizes.xxlarge};
    background-color: ${theme.colors.black};
    font-family: ${theme.font.family.nunito};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall};

    animation: navAnimation ease-out;
    animation-duration: 3s;

    @keyframes navAnimation {
      0% {
        color: transparent;
        background-color: transparent;
      }
      95% {
        color: transparent;
        background-color: transparent;
      }
      100% {
        color: white;
        background-color: black;
      }
    }
  `}
`;
