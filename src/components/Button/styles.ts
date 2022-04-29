import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

const ButtonModifier = {
  secondary: () => css`
    ${({ theme }) => css`
      border: none;
      background: transparent;
      color: ${theme.colors.white};

      :hover {
        background: ${theme.colors.blueRibbon};
      }
    `}
  `,
  navMenuHeader: () => css`
    ${({ theme }) => css`
      padding: 0;
      border: none;
      text-transform: uppercase;
      color: ${theme.colors.white};
      background-color: transparent;
      font-size: ${theme.font.sizes.small};
      > a {
        text-decoration: none;
        color: ${theme.colors.white};
      }

      :first-child {
        margin-left: 0rem;
      }

      :after {
        content: '';
        width: 0%;
        opacity: 0.5;
        height: 0.1rem;
        display: block;
        transition: 1s all ease-in-out;
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
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    color: ${theme.colors.gray};
  `,

  rippling: () => css`
    ${({ theme }) => css`
      position: relative;
      color: ${theme.colors.primary};
      background: ${theme.colors.white};
      margin-top: ${theme.spacings.medium};
      border-radius: ${theme.border.radius};

      ::before {
        inset: 0;
        content: '';
        position: absolute;
        border-radius: ${theme.border.radius};
        border: 0.9rem solid ${theme.colors.white};
      }

      :hover,
      :focus {
        &:before {
          animation: rippling 1.75s cubic-bezier(0.33, 1, 0.68, 1) infinite;
        }
      }

      @keyframes rippling {
        to {
          opacity: 0;
          transform: scale(1.12, 1.5);
        }
      }
    `}
  `
};

export const Wrapper = styled.button<
  Pick<ButtonProps, 'secondary' | 'fullWidth' | 'disabled' | 'rippling' | 'navMenuHeader'>
>`
  ${({ theme, secondary, disabled, fullWidth, rippling, navMenuHeader }) => css`
    border: none;
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.nunito};
    background: ${({ theme }) => theme.colors.primary};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.small};

    ${secondary && ButtonModifier.secondary()}
    ${fullWidth && ButtonModifier.fullWidth()}
    ${disabled && ButtonModifier.disabled(theme)}
    ${rippling && ButtonModifier.rippling()}
    ${navMenuHeader && ButtonModifier.navMenuHeader()}
  `}
`;
