import { CardProps } from '.';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    width: 25%;
    display: grid;
    min-height: 30rem;
    grid-template-rows: 1fr 0.8fr;
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: ${theme.colors.black};

    @media (max-width: ${theme.breakpoints.desktop}) {
      width: 35%;
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      width: 50%;
    }
  `}
`;

export const CardImage = styled.div<CardProps>`
  ${({ background }) => css`
    background-size: cover;
    background-image: url(${background});
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(0.5rem);
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.grayIce};
    border-radius: 0 0 0.5rem 0.5rem;

    > div {
      display: flex;
      justify-content: center;
      gap: ${theme.spacings.xxsmall};
    }
  `}
`;

export const CardTitle = styled.h1`
  ${({ theme }) => css`
    letter-spacing: 0.2rem;
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.family.roboto};
  `}
`;
