import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'home' })`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    > a {
      cursor: pointer;
      position: absolute;
      text-decoration: none;
      writing-mode: vertical-rl;
      color: ${theme.colors.primary};
      right: ${theme.spacings.large};
      bottom: ${theme.spacings.small};
      font-size: ${theme.font.sizes.medium};
      animation: is-bouncing 1s ease-in alternate infinite;

      @keyframes is-bouncing {
        to {
          transform: translateY(${theme.spacings.medium});
        }
      }
    }
  `}
`;

export const Section = styled.section`
  display: flex;
  cursor: default;
  position: relative;
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

    :after {
      content: '';
      width: 0%;
      opacity: 0.5;
      display: block;
      height: 0.1rem;
      position: absolute;
      transition: 1s ease-in-out;
      background-color: transparent;
    }

    &:hover {
      :after {
        content: '';
        width: 100%;
        opacity: 0.5;
        display: block;
        height: 0.1rem;
        position: absolute;
        background-color: ${theme.colors.primary};
      }

      ::before {
        content: '';
        opacity: 0.7;
        left: 17.4rem;
        display: block;
        width: 0.86rem;
        height: 0.86rem;
        border-radius: 50%;
        position: absolute;
        top: ${theme.spacings.xsmall};
        background-color: ${theme.colors.primary};
      }
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      font-size: 5rem;
    }
  `}
`;

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    padding-top: 0.6rem;
    text-transform: uppercase;
    color: ${theme.colors.primary};
    padding-bottom: ${theme.spacings.xlarge};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      font-size: 0.8rem;
    }
  `}
`;

export const DivIcons = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: space-around;
`;

export const Arrow = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.medium};
    height: ${theme.spacings.medium};
  `}
`;
