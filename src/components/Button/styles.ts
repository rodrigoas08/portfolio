import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: auto;
    height: auto;
    cursor: pointer;
    border-style: none;
    margin-left: 1rem;
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.sizes.xxlarge};
    font-family: ${theme.font.family.nunito};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall};

    animation: navAnimation ease-out;
    animation-duration: 3s;

    @keyframes navAnimation {
      0% {
        color: transparent;
      }
      95% {
        color: transparent;
      }
      100% {
        color: white;
      }
    }

    :first-child {
      margin-left: 0rem;
    }
  `}
`;
