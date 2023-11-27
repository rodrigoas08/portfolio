import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp';
import { LuSendHorizonal } from 'react-icons/lu';

export const Wrapper = styled.section.attrs({ id: 'contato' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    align-items: center;
    padding-bottom: 14rem;
    flex-direction: column;

    @media (max-width: ${theme.breakpoints.tablet}) {
      ${Content} {
        gap: 0;
        align-items: center;
        flex-direction: column;
      }
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      ${Content} {
        padding-right: ${theme.spacings.xxlarge};
        :after {
          display: none;
        }
      }

      ${Form} {
        width: 100%;
        padding-inline: 0;
      }

      ${CTAWrapper} {
        width: 100%;
        height: auto;
        font-size: ${theme.font.sizes.large};
      }
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      padding: 8rem 0;

      ${Content} {
        padding-right: 0;
      }

      ${Form} {
        width: 100%;
        padding-inline: 0;
        :after {
          display: none;
        }
      }

      ${SubTitle} {
        font-size: ${theme.font.sizes.xxlarge};
      }

      ${CTAWrapper} {
        width: 100%;
        height: auto;
        padding-inline: 0;
        font-size: ${theme.font.sizes.large};
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;

    p:nth-child(3n) {
      font-size: ${theme.font.sizes.xxxlarge};
    }

    :after {
      content: '';
      top: 9.7rem;
      left: 50%;
      opacity: 0.2;
      height: 67.7%;
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

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    text-align: center;
    flex-direction: column;
    gap: ${theme.spacings.small};
    background-color: transparent;
    margin-top: ${theme.spacings.xlarge};
    padding-inline: ${theme.spacings.xlarge};

    ${ButtonStyles.Wrapper} {
      height: 4rem;
      display: flex;
      min-width: 12rem;
      align-items: center;
      align-self: flex-end;
      justify-content: center;
      gap: ${theme.spacings.xxxsmall};
      font-size: ${theme.font.sizes.medium};
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
    width: 100%;
    height: auto;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xlarge};
    padding-inline: ${theme.spacings.small};

    > p {
      line-height: 150%;
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.small};
    }

    ${ButtonStyles.Wrapper} {
      height: 4rem;
      display: flex;
      align-items: center;
      gap: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.medium};
      background: ${theme.colors.whatsapp};
    }
  `}
`;

export const ZapIcon = styled(Whatsapp)`
  width: 2rem;
`;

export const SendIcon = styled(LuSendHorizonal)`
  width: 2rem;
`;
