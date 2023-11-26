import styled, { css } from 'styled-components';

export type HeaderProps = {
  isOpen?: boolean;
};

export const Wrapper = styled.header<HeaderProps>`
  ${({ theme }) => css`
    z-index: 3;
    top: 50%;
    right: 1rem;
    width: 6rem;
    height: auto;
    display: flex;
    position: fixed;
    align-items: center;
    border-radius: 1rem;
    flex-direction: column;
    backdrop-filter: blur(3px);
    transform: translateY(-50%);
    gap: ${theme.spacings.large};
    justify-content: space-between;
    padding: ${theme.spacings.small};
    background-color: rgba(0, 0, 0, 0.08);

    svg {
      scale: 1.5;
      fill: url('#gradient');
      transition: 0.2s linear;
      filter: drop-shadow(0 0.3rem 0.2rem ${theme.colors.black});

      :hover {
        scale: 1.8;
      }
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      top: 0;
      left: 50%;
      width: 100%;
      height: 8rem;
      position: fixed;
      border-radius: 0;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      transform: translateX(-50%);
      gap: ${theme.spacings.small};
      padding-inline: ${theme.spacings.large};

      a:has(${ImgProfile}) {
        display: none;
      }

      ${NavWrapper} {
        width: 100%;
        height: 4rem;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  `}
`;

export const ImgProfile = styled.img<HeaderProps>`
  ${({ theme }) => css`
    cursor: pointer;
    width: ${theme.spacings.xlarge};
    height: ${theme.spacings.xlarge};
    border-radius: ${theme.border.rounded};
  `}
`;

export const NavWrapper = styled.ul<HeaderProps>`
  ${({ theme }) => css`
    display: flex;
    list-style: none;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.medium};
  `}
`;

export const LinkText = styled.button<HeaderProps>`
  ${({ theme }) => css`
    width: auto;
    height: auto;
    border: none;
    outline: none;
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: center;
    flex-direction: column;
    color: ${theme.colors.text};
    background-color: transparent;
    font-size: ${theme.font.sizes.medium};

    /*
    *****************************************
        CÓDIGO PRESERVADO PARA USO FUTURO
        efeito linha quando passa o mouse
    *****************************************
    */

    /* :after {
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
    } */
  `}
`;
