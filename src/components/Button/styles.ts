import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

const ButtonModifier = {
  secondary: () => css`
    border: none;
    background-color: transparent;

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
  Pick<ButtonProps, "secondary" | "fullWidth" | "disabled">
>`
  ${({ theme, secondary, disabled, fullWidth }) => css`
    border: none;
    cursor: pointer;
    margin-left: 1rem;
    border-radius: 5px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.family.nunito};
    border: 1px solid ${theme.colors.primary};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxsmall};

    animation: buttonAnimation 5s ease-in-out;

    @keyframes buttonAnimation {
      0% {
        color: rgba(0, 0, 0, 0);
      }
      100% {
        color: rgba(0, 0, 0, 0).1;
      }
    }

    :first-child {
      margin-left: 0rem;
    }

    ${secondary && ButtonModifier.secondary()}
    ${fullWidth && ButtonModifier.fullWidth()}
    ${disabled && ButtonModifier.disabled(theme)}
  `}
`;
