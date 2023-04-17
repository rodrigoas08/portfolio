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
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0.1rem -0.4rem 1rem rgba(0, 0, 0, 0.9);

    @media (max-width: ${theme.breakpoints.ipad}) {
      padding: 8rem ${theme.spacings.small};

      ${Content} {
        width: 90%;
      }

      ${Form} {
        width: 100%;
      }

      ${CTAWrapper} {
        width: 100%;
        height: auto;
        font-size: ${theme.font.sizes.xsmall};

        > p {
          font-size: ${theme.font.sizes.small};
        }
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      ${Content} {
        flex-direction: row;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 90%;
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.xlarge};
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 45rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.large};
    margin-top: ${theme.spacings.xlarge};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.grayIce};

    ${ButtonStyles.Wrapper} {
      border-radius: 0;
      text-transform: uppercase;
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
    width: auto;
    height: 40rem;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.small};
    margin-top: ${theme.spacings.xlarge};
    font-size: ${theme.font.sizes.medium};

    > h1 {
      font-size: 3.9rem;
      color: ${theme.colors.primary};
      margin-bottom: ${theme.spacings.small};
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
  `}
`;

export const ZapIcon = styled(Whatsapp)`
  width: 2rem;
`;
