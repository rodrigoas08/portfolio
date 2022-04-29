import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    z-index: 2;
    width: 100%;
    bottom: 0rem;
    height: 10rem;
    display: flex;
    position: relative;
    align-items: center;
    color: ${theme.colors.white};
    backdrop-filter: blur(0.5rem);
    justify-content: space-between;
    font-size: ${theme.font.sizes.small};
    background-color: rgba(0, 0, 0, 0.1);
    border-top: 0.1rem solid rgba(255, 255, 255, 0.1);
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      height: auto;
      gap: ${theme.spacings.small};
      flex-direction: column-reverse;
    }
  `}
`;

export const DivCopyright = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakpoints.smallTablet}) {
      text-align: center;
    }
  `}
`;

export const IconsWrapper = styled.nav`
  ${({ theme }) => css`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      width: 70%;
      justify-content: space-between;
    }
  `}
`;
