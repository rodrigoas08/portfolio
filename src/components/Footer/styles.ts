import styled, { css } from "styled-components";

export const Footer = styled.div`
  ${({ theme }) => css`
    bottom: 0;
    width: 100vw;
    height: auto;
    display: flex;
    position: absolute;
    padding: 2rem 2rem;
    border-top: 2px solid;
    background: rgba(0,0,0,0.7);
    font-size: ${theme.font.sizes.xxsmall};
    border-image: linear-gradient(to left, ${theme.colors.secondary} 90%, white)
      1;
  `}
`;
