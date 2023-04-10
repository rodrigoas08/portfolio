import styled, { css } from 'styled-components';
import { InputProps } from '.';

type InputType = Pick<InputProps, 'fullWidth'>;

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    top: 0;
    left: 0.8rem;
    position: absolute;
    pointer-events: none;
    letter-spacing: 0.05rem;
    transition: all 0.3s ease;
    transform: translateY(-50%);
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};
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
    border-radius: 0.1rem;
    border: 0.1rem solid transparent;
    background-color: ${theme.colors.grayIce};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall};

    ${fullWidth && InputModifiers.fullWidth()}
  `}
`;
