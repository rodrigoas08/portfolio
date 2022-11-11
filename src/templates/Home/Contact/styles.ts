import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'contato' })`
  width: 100%;
  display: flex;
  padding-top: 8rem;
  height: 100vh;
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
    height: auto;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.large};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      width: 100%;
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
