import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'contato' })`
  width: 100%;
  height: auto;
  display: flex;
  padding-top: 8rem;
  align-items: start;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 80rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.xlarge};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 4rem;
    position: relative;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.light};
    padding-bottom: ${theme.spacings.xlarge};

    :before {
      content: '';
      top: 30%;
      left: -2%;
      width: 98%;
      height: 20%;
      z-index: -1;
      opacity: 0.3;
      position: absolute;
      background-color: ${theme.colors.white};
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 40%;
    gap: 0.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.large};
    /* border: 1px solid white; */
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    align-self: start;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
   
    :not(:first-child) {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    outline: none;
    height: 4rem;
    text-transform: lowercase;
    backdrop-filter: blur(1.5rem);
    border: 0.1rem solid transparent;
    border-radius: ${theme.border.radius};
    background-color: rgba(255, 255, 255, 0.1);
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall};

    &:focus {
      border-color: ${theme.colors.primary};
    }

    :nth-child(0n + 2) {
      text-transform: capitalize;
    }
  `}
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    resize: none;
    height: 15rem;
    outline: none;
    color: ${theme.colors.white};
    backdrop-filter: blur(1.5rem);
    border: 0.1rem solid transparent;
    padding: ${theme.spacings.xxxsmall};
    border-radius: ${theme.border.radius};
    background-color: rgba(255, 255, 255, 0.1);

    &:focus {
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xxsmall};
  `}
`;

export const FormAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
