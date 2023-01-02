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
    height: 3rem;
    outline: none;
    backdrop-filter: blur(1.5rem);
    border: 0.1rem solid transparent;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall};

    &:focus {
      border-color: ${theme.colors.primary};
    }

    ${fullWidth && InputModifiers.fullWidth()}
  `}
`;
