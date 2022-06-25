import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'home' })`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
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
        background-color: ${theme.colors.primary};
      }
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      font-size: ${theme.spacings.xlarge};
    }
  `}
`;

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    padding-top: 0.6rem;
    text-transform: uppercase;
    color: ${theme.colors.primary};
    font-size: 1.5rem;
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
