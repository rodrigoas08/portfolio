import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'inicio' })`
  ${({ theme }) => css`
    gap: 2rem;
    width: 100%;
    height: 100vh;
    display: flex;
    padding-left: 15rem;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      padding-left: 0;
      align-items: center;
    }
  `}
`;

export const WrapperText = styled.div`
  ${({ theme }) => css`
    p:nth-of-type(2) {
      font-size: 1.4rem;
      padding-top: 1rem;
      color: ${theme.colors.white};
    }
  `}
`;

export const Welcome = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    padding-left: 0.2rem;
    text-transform: uppercase;
    color: ${theme.colors.primary};
    font-family: ${theme.font.family.josefin};
  `}
`;

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: 7rem;
    letter-spacing: 0.3rem;
    padding-bottom: 0.5rem;
    font-weight: ${theme.font.bold};
    font-family: ${theme.font.family.montserrat};
    filter: drop-shadow(-1px 1px 0px ${theme.colors.primary});

    :hover {
      filter: none;
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      font-size: ${theme.spacings.large};
    }
  `}
`;

export const Text = styled(Welcome)`
  font-size: 16px;
`;

export const NavIcons = styled.nav`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.medium};
  `}
`;
