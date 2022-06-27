import styled, { css } from 'styled-components';
import { InputProps } from '.';

type InputType = Pick<InputProps, 'fullWidth'>;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
  `}
`;

const InputModifiers = {
  fullWidth: () => css`
    width: 100%;
  `
};

export const Input = styled.input<InputType>`
  ${({ theme, fullWidth }) => css`
    outline: none;
    height: 3rem;
    backdrop-filter: blur(1.5rem);
    border: 0.1rem solid transparent;
    border-radius: ${theme.border.radius};
    background-color: rgba(255, 255, 255, 0.1);
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall};

    &:focus {
      border-color: ${theme.colors.primary};
    }

    ${fullWidth && InputModifiers.fullWidth()}
  `}
`;
