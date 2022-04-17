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
  fullWidth: () => css`
    width: 100%;
  `,
  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    color: ${theme.colors.gray};
  `,

  rippling: () => css`
    ${({ theme }) => css`
      margin-top: 3rem;
      position: relative;
      color: ${theme.colors.primary};
      background: ${theme.colors.white};
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
  Pick<ButtonProps, 'secondary' | 'fullWidth' | 'disabled' | 'rippling'>
>`
  ${({ theme, secondary, disabled, fullWidth, rippling }) => css`
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
  `}
`;
