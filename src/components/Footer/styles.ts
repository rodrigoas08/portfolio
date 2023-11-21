import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    z-index: 3;
    width: 100vw;
    left: -15rem;
    position: relative;
    align-items: center;
    backdrop-filter: blur(0.5rem);
    font-size: ${theme.font.sizes.small};
    background-color: rgba(0, 0, 0, 0.1);
    border-top: 0.1rem solid ${theme.colors.grayIce};
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};

    @media (max-width: ${theme.breakpoints.desktop}) {
      left: -15rem;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      left: -1rem;
    } ;
  `}
`;

export const TextCopyright = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.alabaster};
`;
