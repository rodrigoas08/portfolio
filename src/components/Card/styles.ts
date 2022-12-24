import styled, { css } from 'styled-components';
import { CardProps } from '.';

export const Card = styled.div`
  ${({ theme }) => css`
    width: 40%;
    display: grid;
    row-gap: 0.1rem;
    min-height: 30rem;
    backdrop-filter: blur(1.5rem);
    grid-template-rows: 1fr 0.8fr;
    transition: grid-template-rows 0.8s ease-in-out;
    border-radius: ${theme.border.radius};
    background-color: rgba(255, 255, 255, 0.1);
    border-top: 0.3rem solid ${theme.colors.primary};

    :hover {
      grid-template-rows: 0.2fr 1fr;
      transition: grid-template-rows 0.8s ease-in-out;

      ${CardImage} {
        transition: 0.8s;
        opacity: 0.2;
      }

      ${CardInfo} {
        background: transparent;
      }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      width: 80%;
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      width: 100%;
    }
  `}
`;

export const CardImage = styled.div<CardProps>`
  ${({ background }) => css`
    transition: 1.8s ease-in-out;
    background-size: cover;
    background-image: url(${background});
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    opacity: 0.9;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
    border-radius: 0 0 0.3rem 0.3rem;
    transition: all 0.4s ease-in-out;
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.primary};
    box-shadow: 0.1rem 0rem 1.5rem rgba(0, 0, 0, 1);

    > div {
      display: flex;
      justify-content: center;
      gap: ${theme.spacings.xxsmall};
    }

    > a {
      cursor: pointer;
      font-family: inherit;
      text-decoration: none;
    }
  `}
`;

export const CardTitle = styled.h1`
  ${({ theme }) => css`
    font-family: 'Gotham';
    letter-spacing: 0.2rem;
    font-size: ${theme.font.sizes.xlarge};
  `}
`;
