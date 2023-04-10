import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    z-index: 2;
    width: 100%;
    bottom: 0rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.alabaster};
    backdrop-filter: blur(0.5rem);
    font-size: ${theme.font.sizes.small};
    background-color: rgba(0, 0, 0, 0.1);
    border-top: 0.1rem solid ${theme.colors.grayIce};
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      height: auto;
      gap: ${theme.spacings.small};
      flex-direction: column-reverse;
    }
  `}
`;

export const TextCopyright = styled.p``;
