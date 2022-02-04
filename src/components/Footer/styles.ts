import styled, { css } from "styled-components";

export const Footer = styled.div`
  ${({ theme }) => css`
    bottom: 0;
    width: 100vw;
    height: 300px;
    display: flex;
    font-size: 10rem;
    position: absolute;
    border-top: 5px solid;
    justify-content: center;
    background-image: linear-gradient(
      120deg,
      #a1c4fd 0%,
      ${theme.colors.primary} 100%
    );
    font-family: 'Azonix', sans-serif;
    border-image: linear-gradient(to left, ${theme.colors.secondary} 90%, white)
      1;
  `}
`;
