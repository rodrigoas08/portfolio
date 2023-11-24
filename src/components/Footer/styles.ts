import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    z-index: 3;
    width: 100%;
    align-items: center;
    backdrop-filter: blur(0.5rem);
    font-size: ${theme.font.sizes.medium};
    background-color: rgba(0, 0, 0, 0.1);
    border-top: 0.1rem solid ${theme.colors.grayIce};
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};
  `}
`;

export const TextCopyright = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.alabaster};
`;
