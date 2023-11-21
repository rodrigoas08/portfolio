import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp';

export const Wrapper = styled.div.attrs({ id: 'contato' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding-bottom: 14rem;
    flex-direction: column;

    @media (max-width: ${theme.breakpoints.ipad}) {
      padding: 8rem 0;

      ${Content} {
        width: 90%;
      }

      ${Form} {
        width: 100%;
      }

      ${Textarea} {
        :focus {
          font-size: ${theme.font.sizes.medium};
        }
      }

      ${CTAWrapper} {
        width: 100%;
        height: auto;
        font-size: ${theme.font.sizes.large};
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      ${Content} {
        gap: 0;
        align-items: center;
        flex-direction: column;
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

    p:nth-child(3n) {
      font-size: ${theme.font.sizes.xxxlarge};
    }
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
      height: 3.5rem;
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

      ::placeholder {
        color: transparent;
      }
    }
  `}
`;

export const CTAWrapper = styled.div`
  ${({ theme }) => css`
    width: auto;
    height: auto;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    padding: 0 ${theme.spacings.small};
    margin-top: ${theme.spacings.xlarge};
    font-size: ${theme.font.sizes.xxlarge};
    text-shadow: 0.1rem 0.4rem 0.2rem ${theme.colors.black};

    > h1 {
      font-size: 3.9rem;
      color: ${theme.colors.primary};
      margin-bottom: ${theme.spacings.small};
    }

    > p {
      line-height: 150%;

      > b {
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
      background: ${theme.colors.whatsapp};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const ZapIcon = styled(Whatsapp)`
  width: 2rem;
`;
