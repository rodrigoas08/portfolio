import styled, { css } from "styled-components";

export const Footer = styled.div`
  ${({ theme }) => css`
    height: 8rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.font.sizes.xsmall};
    animation: footerAnimation 4s ease-in-out;
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};

    @keyframes footerAnimation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
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
