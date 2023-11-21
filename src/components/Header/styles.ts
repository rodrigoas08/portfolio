import styled, { css } from 'styled-components';

export type HeaderProps = {
  isOpen?: boolean;
};

export const Wrapper = styled.header<HeaderProps>`
  ${({ theme, color, isOpen }) => css`
    z-index: 3;
    width: 100%;
    height: 12rem;
    display: flex;
    position: fixed;
    align-items: center;
    background: ${color};
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} 15rem;
    box-shadow: ${color === 'black'
      ? '0 0.1rem 0.5rem rgba(0, 172, 238, 0.25)'
      : 'transparent'};

    svg {
      display: none;
      fill: ${theme.colors.primary};
    }

    ${isOpen &&
    css`
      width: 100%;
      height: 50rem;
      align-items: center;
      flex-direction: column;
      justify-content: start;
      background-color: ${theme.colors.black};
    `}

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      padding: 0 ${theme.spacings.large};

      ${NavWrapper} {
        gap: ${theme.spacings.large};
        display: ${isOpen ? 'flex' : 'none'};
      }

      svg {
        top: 4.8rem;
        right: 4rem;
        cursor: pointer;
        position: absolute;
        display: inline-block;
        fill: ${theme.colors.primary};
      }
    }
  `}
`;

export const ImgProfile = styled.img<HeaderProps>`
  ${({ theme, isOpen }) => css`
    cursor: pointer;
    width: ${theme.spacings.xlarge};
    height: ${theme.spacings.xlarge};
    border-radius: ${theme.border.rounded};

    ${isOpen &&
    css`
      display: none;
    `}
  `}
`;

export const NavWrapper = styled.ul<HeaderProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.medium};
    padding: ${theme.spacings.xlarge} 0;
    flex-direction: ${isOpen ? 'column' : 'row'};
  `}
`;

export const LinkText = styled.button<HeaderProps>`
  ${({ theme }) => css`
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    font-family: ${theme.font.Saira};
    color: ${theme.colors.alabaster};
    font-size: ${theme.font.sizes.large};

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
      background-image: linear-gradient(
        to right,
        ${theme.colors.primary},
        ${theme.colors.secondary},
        ${theme.colors.black}
      );
    }

    :before {
      content: '';
      width: 100%;
      opacity: 0.5;
      height: 0.1rem;
      display: block;
      transition: 1s all ease-in-out;
    }

    :hover,
    :focus {
      :after {
        width: 100%;
      }
      :before {
        width: 0%;
        background-image: linear-gradient(
          to right,
          ${theme.colors.primary},
          ${theme.colors.secondary},
          ${theme.colors.black}
        );
      }
    }
  `}
`;
