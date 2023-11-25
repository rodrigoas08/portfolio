import styled, { css } from 'styled-components';

export const Wrapper = styled.section.attrs({ id: 'inicio' })`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${theme.spacings.small};

    @media (max-width: ${theme.breakpoints.ipad}) {
      padding: 0 ${theme.spacings.xxsmall};
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
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
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const WrapperText = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: 7rem;
    font-weight: ${theme.font.medium};
    letter-spacing: ${theme.spacings.xxxsmall};
    text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};
  `}
`;

export const CarrerName = styled.h2`
  ${({ theme }) => css`
    padding-left: 0.2rem;
    text-transform: uppercase;
    color: ${theme.colors.text};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xxlarge};
    letter-spacing: ${theme.spacings.xxxsmall};
    text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};
  `}
`;

export const Image = styled.img`
  width: 30rem;
  height: 30rem;
`;

export const NavIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.medium};

    svg {
      fill: url('#gradient');
      transition: 0.2s linear;
      filter: drop-shadow(0 0.3rem 0.2rem ${theme.colors.black});
    }

    svg:hover {
      scale: 1.2;
    }
  `}
`;
