import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

const ButtonModifier = {
  secondary: () => css`
    ${({ theme }) => css`
      background: transparent;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background: ${theme.colors.blueRibbon};
        border: 1px solid ${theme.colors.blueRibbon};
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
};

export const Wrapper = styled.button<
  Pick<ButtonProps, "secondary" | "fullWidth" | "disabled">
>`
  ${({ theme, secondary, disabled, fullWidth }) => css`
    border: none;
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.nunito};
    background: ${({ theme }) => theme.colors.primary};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.small};

    :hover {
      background: ${theme.colors.blueRibbon};
    }

    ${secondary && ButtonModifier.secondary()}
    ${fullWidth && ButtonModifier.fullWidth()}
    ${disabled && ButtonModifier.disabled(theme)}
  `}
`;
