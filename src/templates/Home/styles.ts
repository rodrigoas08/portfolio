import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'home' })`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 7rem;
    position: relative;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-family: ${theme.font.family.montserrat};
    > span {
      color: ${theme.colors.primary};
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      font-size: ${theme.spacings.large};
    }
  `}
`;

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    padding-top: 0.6rem;
    text-transform: uppercase;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    padding-bottom: ${theme.spacings.xlarge};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      font-size: ${theme.spacings.xxsmall};
    }
  `}
`;

export const NavIcons = styled.nav`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.medium};
  `}
`;
