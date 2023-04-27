import { CardProps } from '.';
import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';

export const Card = styled.div`
  ${({ theme }) => css`
    width: 25%;
    display: grid;
    height: 30rem;
    grid-template-rows: 1fr 0.8fr;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.alabaster};

    @media (max-width: ${theme.breakpoints.desktop}) {
      width: 35%;
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      width: 50%;
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      width: 30rem;
      padding: ${theme.spacings.xxsmall};

      ${ButtonWrapper} {
        gap: ${theme.spacings.small};
      }

      ${CardTitle} {
        font-size: ${theme.font.sizes.medium};
      }
    }

    :hover {
      background-color: ${theme.colors.primary};

      ${CardImage} {
        transition: all 1s linear;
        transform: scale(103%);
      }

      ${ButtonWrapper} {
        display: flex;
        opacity: 1;
        transform: translateY(3rem);
        animation: animate 1s linear;
        transition: all 1.1s linear ease;
      }
      @keyframes animate {
        from {
          display: none;
          transform: translateY(0rem);
        }
        to {
          transform: translateY(3rem);
        }
      }
    }
  `}
`;

export const CardImage = styled.div<CardProps>`
  ${({ background, theme }) => css`
    background-size: cover;
    transition: all 1s linear;
    background-image: url(${background});
    border-radius: ${theme.border.radius};
    box-shadow: 0 0 0.3rem ${theme.colors.black};
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.xxxsmall};
    padding: ${theme.spacings.xxsmall};
    border-radius: 0 0 0.5rem 0.5rem;
  `}
`;

export const CardTitle = styled.h1`
  ${({ theme }) => css`
    letter-spacing: 0.2rem;
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    opacity: 0;
    top: 6.5rem;
    display: flex;
    position: absolute;
    justify-content: center;
    transition: all 1.1s ease;
    gap: ${theme.spacings.large};

    ${ButtonStyles.Wrapper} {
      padding: 0;
      display: flex;
      align-items: end;
      gap: ${theme.spacings.xxsmall};

      path {
        fill: ${theme.colors.black};
      }

      :hover path {
        fill: ${theme.colors.alabaster};
      }
    }
  `}
`;
