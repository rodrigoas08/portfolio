import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme, color }) => css`
    z-index: 2;
    width: 100%;
    height: 8rem;
    display: flex;
    position: fixed;
    align-items: center;
    background: ${color};
    justify-content: space-between;
    transition: all 0.1s ease-in-out;
    padding: ${theme.spacings.xxsmall} 15rem;
    box-shadow: ${color === 'black'
      ? '0 0.1rem 0.5rem rgba(0, 172, 238, 0.25)'
      : 'transparent'};

    @media (max-width: ${theme.breakpoints.mobile}) {
      justify-content: center;
    }
  `}
`;

export const ImgProfile = styled.img`
  ${({ theme }) => css`
    cursor: pointer;
    border-radius: 50%;
    width: ${theme.spacings.xlarge};
    height: ${theme.spacings.xlarge};

    @media (max-width: ${theme.breakpoints.mobile}) {
      display: none;
    }
  `}
`;

export const NavWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    list-style: none;
    gap: ${theme.spacings.xlarge};
  `}
`;

export type LinkMenuProps = {
  activeLink?: boolean;
};

export const LinkText = styled.p<LinkMenuProps>`
  ${({ theme, activeLink }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};

    ${activeLink &&
    css`
      transition: all 1.5s ease-in-out;
      color: ${theme.colors.primary};
    `}

    :first-child {
      margin-left: 0rem;
    }

    :after {
      content: '';
      width: 0%;
      opacity: 0.5;
      height: 0.1rem;
      display: block;
      transition: all 1s ease-in-out;
      background-color: ${theme.colors.primary};
    }

    :before {
      content: '';
      width: 100%;
      opacity: 0.5;
      height: 0.1rem;
      display: block;
      transition: 1s all ease-in-out;
    }

    :hover {
      :after {
        width: 100%;
      }
      :before {
        width: 0%;
        background-color: ${theme.colors.primary};
      }
    }
  `}
`;
