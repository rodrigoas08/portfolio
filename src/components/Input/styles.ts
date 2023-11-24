import styled, { css } from 'styled-components';
import { InputProps } from '.';

type InputType = Pick<InputProps, 'fullWidth' | 'textArea'>;

export const Wrapper = styled.div<InputType>`
  ${({ theme, fullWidth, textArea }) => css`
    height: auto;
    position: relative;
    background-color: transparent;
    margin-bottom: ${theme.spacings.small};
    border-bottom: ${textArea
      ? 'none'
      : `0.1rem solid ${theme.colors.primary}`};

    ${fullWidth && InputModifiers.fullWidth()}

    :focus-within #label {
      transition: 1s linear;
      filter: brightness(50%);
    }

    :focus-within #icon {
      animation: bg 1s;
      filter: brightness(50%);
      transition: 1s ease-in-out;

      @keyframes bg {
        from {
          transform: rotate(0deg);
          transition: 1s ease-in-out;
        }
        to {
          transform: rotate(360deg);
          transition: 1s ease-in-out;
        }
      }
    }
  `}
`;

export const Icon = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  transition: 1s linear;
  justify-content: flex-start;
`;

const InputModifiers = {
  fullWidth: () => css`
    width: 100%;
  `
};

export const Label = styled.span`
  ${({ theme }) => css`
    top: -1.3rem;
    line-height: 100%;
    position: absolute;
    transition: 1s linear;
    letter-spacing: 0.1rem;
    filter: brightness(100%);
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: none;
    outline: none;
    height: 3.5rem;
    position: relative;
    border-radius: 0.1rem;
    background-color: transparent;
    color: ${theme.colors.alabaster};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.small};

    ::placeholder {
      font-size: ${theme.font.sizes.medium};
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      :focus {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    resize: none;
    height: 10rem;
    outline: none;
    position: relative;
    border-radius: 0.1rem;
    background-color: transparent;
    color: ${theme.colors.alabaster};
    border: 0.1rem solid transparent;
    border-bottom: 0.1rem solid ${theme.colors.primary};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxsmall} 0 0;

    ::placeholder {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const ErrorMessage = styled.p<InputType>`
  ${({ theme, textArea }) => css`
    display: block;
    position: absolute;
    padding-left: 0.5rem;
    color: ${theme.colors.error};
    top: ${textArea ? '10rem' : '3.5rem'};
    font-size: ${theme.font.sizes.xsmall}!important;
  `}
`;
