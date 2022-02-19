import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

const ButtonModifier = {
  btnMenu: () => css`
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.white};

    &:after {
      content: "";
      width: 0%;
      height: 1px;
      display: block;
      transition: 1s ease-in-out;
      background: ${({ theme }) => theme.colors.white};
    }

    &:before {
      content: "";
      width: 100%;
      height: 1px;
      display: block;
      background: transparent;
      transition: 1s ease-in-out;
    }

    &:hover {
      &:after {
        width: 100%;
      }
      :before {
        width: 0%;
        height: 1px;
        background: ${({ theme }) => theme.colors.white};
      }
      background-color: transparent;
    }
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
  Pick<ButtonProps, "btnMenu" | "fullWidth" | "disabled">
>`
  ${({ theme, btnMenu, disabled, fullWidth }) => css`
    border: none;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    text-transform: capitalize;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.family.nunito};
    background: ${({ theme }) => theme.colors.white};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.small};

    :hover {
      color: ${theme.colors.white};
      background: ${({ theme }) => theme.colors.primary};
    }

    ${btnMenu && ButtonModifier.btnMenu()}
    ${fullWidth && ButtonModifier.fullWidth()}
    ${disabled && ButtonModifier.disabled(theme)}
  `}
`;
