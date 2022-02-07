import styled, { css } from "styled-components";

export const Footer = styled.div`
  ${({ theme }) => css`
    bottom: 0;
    width: 100vw;
    height: auto;
    display: flex;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    font-size: ${theme.font.sizes.xsmall};
    animation: footerAnimation 4s ease-in-out;
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};

    @keyframes footerAnimation {
      0% {
        background: rgba(0, 0, 0, 0);
        color: transparent;
      }
      100% {
        background: rgba(0, 0, 0, 0) 0.1;
      }
    }
  `}
`;

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    width: 10%;
    display: flex;
    margin-left: 1rem;
    letter-spacing: 1.6rem;
    justify-content: space-around;
    font-size: ${theme.font.sizes.xlarge};
  `}
`;
