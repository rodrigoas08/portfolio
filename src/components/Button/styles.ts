import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

const ButtonModifier = {
  secondary: () => css`
    ${({ theme }) => css`
      border: none;
      background: transparent;

      :hover {
        background: ${theme.colors.blueRibbon};
      }
    `}
  `,

  fullWidth: () => css`
    width: 100%;
  `,
  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    background: ${theme.colors.gray};
  `,

  rippling: () => css`
    ${({ theme }) => css`
      position: relative;
      font-weight: bold;
      color: ${theme.colors.primary};
      background: ${theme.colors.alabaster};
      border-radius: ${theme.border.radius};

      ::before {
        inset: 0;
        content: '';
        position: absolute;
        border-radius: ${theme.border.radius};
        border: 0.6rem solid ${theme.colors.alabaster};
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
          transform: scale(1.12, 1.3);
        }
      }
    `}
  `
};

export const Wrapper = styled.button<
  Pick<ButtonProps, 'secondary' | 'fullWidth' | 'disabled' | 'rippling'>
>`
  ${({ theme, secondary, disabled, fullWidth, rippling }) => css`
    border: none;
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.alabaster};
    background: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.small};

    ${secondary && ButtonModifier.secondary()}
    ${fullWidth && ButtonModifier.fullWidth()}
    ${disabled && ButtonModifier.disabled(theme)}
    ${rippling && ButtonModifier.rippling()}
  `}
`;
