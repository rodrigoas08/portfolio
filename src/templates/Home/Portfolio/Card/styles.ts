import { CardProps } from '.';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    width: 45rem;
    display: grid;
    height: 40rem;
    grid-template-rows: 1fr 0.8fr;
    border: 0.1rem solid transparent;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.grayIce};

    :hover {
      border: 0.1rem solid ${theme.colors.primary};
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      width: 35rem;
      padding: ${theme.spacings.xxsmall};

      ${IconWrapper} {
        gap: ${theme.spacings.small};
      }

      ${CardTitle} {
        font-size: ${theme.font.sizes.medium};
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
    box-shadow: 0 0 0.2rem ${theme.colors.alabaster};
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: start;
    flex-direction: column;
    justify-content: space-between;
    color: ${theme.colors.alabaster};
    border-radius: 0 0 0.5rem 0.5rem;
    padding: ${theme.spacings.xxsmall} 0;
    text-shadow: 0 0.1rem 0.4rem ${theme.colors.black};
  `}
`;

export const CardTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const CardDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const CardStack = styled.p`
  ${({ theme }) => css`
    align-self: end;
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    top: 0;
    display: flex;
    align-self: end;
    position: absolute;
    justify-content: center;
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.xxsmall};

    svg {
      cursor: pointer;
      transition: 1.1s ease;
      fill: ${theme.colors.text};
    }

    svg:hover {
      transition: 1.1s ease;
      fill: ${theme.colors.primary};
    }
  `}
`;
