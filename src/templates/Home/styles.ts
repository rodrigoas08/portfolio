import styled, { css } from 'styled-components';

export const Wrapper = styled.section.attrs({ id: 'inicio' })`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.ipad}) {
      padding: 0 ${theme.spacings.small};

      ${WrapperText} {
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
      }
      ${Name} {
        font-size: 5rem;
        line-height: 105%;
      }
      ${CarrerName} {
        font-size: ${theme.font.sizes.xlarge};
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
    letter-spacing: ${theme.spacings.xxxsmall};
  `}
`;

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: 7rem;
    font-weight: ${theme.font.medium};
    text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};
  `}
`;

export const CarrerName = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xxlarge};
    text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};
  `}
`;

export const NavIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.medium};
  `}
`;
