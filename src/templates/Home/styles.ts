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
    }
  `}
`;

export const WrapperText = styled.div`
  ${({ theme }) => css`
    h2:nth-of-type(2) {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
      padding-top: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Welcome = styled.h2`
  ${({ theme }) => css`
    padding-left: 0.2rem;
    text-transform: uppercase;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family.josefin};
  `}
`;

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: 7rem;
    font-weight: ${theme.font.bold};
    letter-spacing: ${theme.spacings.xxxsmall};
    padding-bottom: ${theme.spacings.xxxsmall};
    font-family: ${theme.font.family.montserrat};
    filter: drop-shadow(-1px 1px 0px ${theme.colors.primary});

    :hover {
      filter: none;
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
    }
  `}
`;

export const Text = styled(Welcome)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    letter-spacing: ${theme.spacings.xxxsmall};
  `}
`;

export const NavIcons = styled.nav`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.medium};
  `}
`;
