import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp';

export const Wrapper = styled.div.attrs({ id: 'contato' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    padding: 8rem 0;
    align-items: center;
    flex-direction: column;
    background-color: black;
    box-shadow: 0.1rem -0.4rem 1rem rgba(0, 0, 0, 0.9);

    @media (max-width: ${theme.breakpoints.ipad}) {
      padding: ${theme.spacings.small};
      padding-top: ${theme.spacings.xxlarge};
    }

    > section {
      width: 80%;
      display: flex;
      flex-direction: row-reverse;

      @media (max-width: ${theme.breakpoints.ipad}) {
        display: flex;
        flex-direction: column-reverse;
        padding: ${theme.spacings.small};
      }
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    height: 40rem;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.large};
    margin-top: ${theme.spacings.xlarge};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.grayIce};

    > button {
      border-radius: 0;
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
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
    }
  `}
`;

export const CTAWrapper = styled.div`
  ${({ theme }) => css`
    gap: 1rem;
    width: 100%;
    height: 40rem;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.small};
    margin-top: ${theme.spacings.xlarge};
    font-size: ${theme.font.sizes.medium};

    > h1 {
      font-size: 39px;
      margin-bottom: 2rem;
      color: ${theme.colors.primary};
    }

    > p {
      line-height: 150%;

      > strong {
        text-transform: uppercase;
        color: ${theme.colors.primary};
      }
    }

    ${ButtonStyles.Wrapper} {
      height: 4rem;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      gap: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.whatsapp};

      :hover {
        opacity: 0.9;
      }
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      width: 100%;
      height: auto;
      font-size: ${theme.font.sizes.xsmall};

      > p {
        font-size: ${theme.font.sizes.small};
      }
    }
  `}
`;

export const ZapIcon = styled(Whatsapp)`
  width: 2rem;
`;
