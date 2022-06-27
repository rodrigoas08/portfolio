import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'home' })`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const MediumContent = css`
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
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

    :after {
      content: '';
      width: 0%;
      opacity: 0.5;
      display: block;
      height: 0.1rem;
      ${MediumContent};
      position: absolute;
      transition: 1s ease-in-out;
      background-color: transparent;
    }

    &:hover {
      :after {
        width: 33%;
        background-color: ${theme.colors.primary};
      }
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
    > a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${theme.colors.white};
      column-gap: ${theme.spacings.small};
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
