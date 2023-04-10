import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'inicio' })`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 0 15rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: ${theme.spacings.small};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      align-items: center;
      padding: 0 2rem;

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
    h2:nth-of-type(2) {
      color: ${theme.colors.alabaster};
      font-size: ${theme.font.sizes.small};
      padding-top: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Welcome = styled.p`
  ${({ theme }) => css`
    padding-left: 0.2rem;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family.josefin};
  `}
`;

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: 7rem;
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall} 0;
    letter-spacing: ${theme.spacings.xxxsmall};
    font-family: ${theme.font.family.montserrat};
    filter: drop-shadow(-1px 1px 0px ${theme.colors.primary});

    :hover {
      filter: none;
    }
  `}
`;

export const CarrerName = styled(Welcome)`
  ${({ theme }) => css`
    color: white;
    background-clip: text;
    text-transform: uppercase;
    -webkit-background-clip: text;
    font-weight: ${theme.font.bold};
    -webkit-text-fill-color: transparent;
    font-size: ${theme.font.sizes.medium};
    letter-spacing: ${theme.spacings.xxxsmall};
    background-image: linear-gradient(to right, #00aace, #fafafa, steelblue);
  `}
`;

export const NavIcons = styled.nav`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.medium};
  `}
`;
