import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    z-index: 3;
    width: 100%;
    align-items: center;
    position: relative;
    backdrop-filter: blur(0.3rem);
    font-size: ${theme.font.sizes.medium};
    background-color: rgba(0, 0, 0, 0.1);
    padding: ${theme.spacings.small} 0;

    ::before {
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0.2;
      height: 0.1rem;
      position: absolute;
      background-image: linear-gradient(
        to right,
        ${theme.colors.black},
        ${theme.colors.primary},
        ${theme.colors.secondary},
        ${theme.colors.primary},
        ${theme.colors.black}
      );
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      padding-inline: ${theme.spacings.small};
    }
  `}
`;

export const TextCopyright = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;
