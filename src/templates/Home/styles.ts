import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'inicio' })`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 0 15rem;
    align-items: center;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      align-items: center;
      padding: 0 ${theme.spacings.xxsmall};

      ${WrapperText} {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      ${Name} {
        text-align: center;
      }
      ${CarrerName} {
        white-space: nowrap;
        font-size: ${theme.font.sizes.xsmall};
      }
    }
  `}
`;

export const WrapperText = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.small};

    h2:nth-of-type(2) {
      color: ${theme.colors.alabaster};
      font-size: ${theme.font.sizes.small};
      padding-top: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: 7rem;
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall} 0;
    letter-spacing: ${theme.spacings.xxxsmall};
    text-shadow: 0.1rem 0.2rem 0.2rem ${theme.colors.primary};
  `}
`;

export const CarrerName = styled.h2`
  ${({ theme }) => css`
    padding-left: 0.2rem;
    background-clip: text;
    text-transform: uppercase;
    -webkit-background-clip: text;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.alabaster};
    -webkit-text-fill-color: transparent;
    font-size: ${theme.font.sizes.medium};
    letter-spacing: ${theme.spacings.xxxsmall};
    text-shadow: 0.1rem 0.1rem 0.9rem ${theme.colors.black};
    background-image: linear-gradient(
      to right,
      ${theme.colors.primary},
      ${theme.colors.alabaster},
      ${theme.colors.primary}
    );
  `}
`;

export const NavIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.medium};

    svg {
      fill: url('#gradient');
      filter: drop-shadow(0 0.3rem 0.2rem ${theme.colors.black});
    }

    svg:hover {
      opacity: 0.3;
      transition: 1s linear;
    }
  `}
`;
