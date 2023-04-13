import styled, { css } from 'styled-components';
import { InputProps } from '.';

type InputType = Pick<InputProps, 'fullWidth'>;

export const Wrapper = styled.div`
  position: relative;

  :focus-within #icon {
    animation: bg 1s;
    filter: brightness(50%);
    transition: all 1s linear ease;

    @keyframes bg {
      from {
        transform: rotate(0deg);
        background-color: transparent;
      }
      to {
        transform: rotate(360deg);
        background-color: transparent;
      }
    }
  }
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    top: 10;
    width: 3rem;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    transition: 1s ease-in-out;
    background-color: ${theme.colors.grayIce};
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
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.large};

    ${fullWidth && InputModifiers.fullWidth()}

    :focus {
      border: 0.1rem solid ${theme.colors.primary};
    }
  `}
`;
