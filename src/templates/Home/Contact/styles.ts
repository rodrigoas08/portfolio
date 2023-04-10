import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'contato' })`
  width: 100%;
  height: auto;
  display: flex;
  padding-top: 8rem;
  background-color: black;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.xlarge};

    > section {
      gap: 1rem;
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
    }
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
      background-color: ${theme.colors.alabaster};
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 40%;
    height: 40rem;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.large};
    margin-top: ${theme.spacings.xlarge};
    background-color: ${theme.colors.grayIce};

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
    border-radius: 0.1rem;
    color: ${theme.colors.alabaster};
    border: 0.1rem solid transparent;
    background-color: ${theme.colors.grayIce};
    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxsmall};

    :focus {
      border-color: ${theme.colors.primary};

      ::placeholder {
        color: ${theme.colors.gray};
      }
    }
  `}
`;

export const WhatsAppWrapper = styled.div`
  ${({ theme }) => css`
    width: 40%;
    height: 40rem;
    margin-top: ${theme.spacings.xlarge};
    /* background-color: ${theme.colors.grayIce}; */
  `}
`;
