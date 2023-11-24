import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp';
import { LuSendHorizonal } from 'react-icons/lu';

export const Wrapper = styled.section.attrs({ id: 'contato' })`
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
        :after {
          display: none;
        }
      }

      ${CTAWrapper} {
        width: 100%;
        height: auto;
        font-size: ${theme.font.sizes.large};
      }
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      ${Content} {
        width: 100%;
      }

      ${Form} {
        width: 100%;
        :after {
          display: none;
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
    width: 100%;
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.xxxsmall};

    p:nth-child(3n) {
      font-size: ${theme.font.sizes.xxxlarge};
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 30%;
    height: auto;
    display: flex;
    position: relative;
    flex-direction: column;
    gap: ${theme.spacings.small};
    background-color: transparent;
    padding: 0 ${theme.spacings.small};
    margin-top: ${theme.spacings.xlarge};
    border-radius: ${theme.border.radius};

    ${ButtonStyles.Wrapper} {
      height: 4rem;
      display: flex;
      min-width: 12rem;
      border-radius: 0;
      align-items: center;
      align-self: flex-end;
      justify-content: center;
      gap: ${theme.spacings.xxxsmall};
      font-size: ${theme.font.sizes.medium};
    }

    :after {
      content: '';
      top: 1px;
      left: -2rem;
      height: 100%;
      width: 0.1rem;
      position: absolute;
      background-image: linear-gradient(
        to bottom,
        ${theme.colors.black},
        ${theme.colors.primary},
        ${theme.colors.secondary},
        ${theme.colors.primary},
        ${theme.colors.black}
      );
    }
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.medium};
    margin-bottom: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xxxlarge};
    text-shadow: 0.1rem 0.4rem 0.2rem ${theme.colors.black};
  `}
`;

export const CTAWrapper = styled.div`
  ${({ theme }) => css`
    width: 30%;
    height: auto;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    padding: 0 ${theme.spacings.large};
    margin-top: ${theme.spacings.xlarge};

    > p {
      line-height: 150%;
      font-size: ${theme.font.sizes.large};
    }

    ${ButtonStyles.Wrapper} {
      height: 4rem;
      display: flex;
      align-items: center;
      gap: ${theme.spacings.xxsmall};
      background: ${theme.colors.whatsapp};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const ZapIcon = styled(Whatsapp)`
  width: 2rem;
`;

export const SendIcon = styled(LuSendHorizonal)`
  width: 2rem;
`;
