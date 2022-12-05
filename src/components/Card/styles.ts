import styled, { css } from 'styled-components';
import { CardProps } from '.';

export const Card = styled.div<CardProps>`
  ${({ theme, background }) => css`
    width: 35%;
    min-height: 30rem;
    background-size: cover;
    backdrop-filter: blur(1.5rem);
    background-image: url(${background});
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};
    background-color: rgba(255, 255, 255, 0.1);
    border-top: 0.3rem solid ${theme.colors.primary};

    @media (max-width: ${theme.breakpoints.mobile}) {
      width: 80%;
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      width: 100%;
    }
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    bottom: 0;
    width: 100%;
    height: 20%;
    cursor: pointer;
    position: absolute;
    transition: height 1s ease-out;
    background: ${theme.colors.primary};
    border-radius: 1.5rem 1.5rem 0.3rem 0.3rem;
    box-shadow: 0.1rem 0rem 1.5rem rgba(0, 0, 0, 1);

    :hover {
      height: 50%;
      transition: height 1s ease-out;
    }
  `}
`;

export const Cardtext = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-family: 'Gotham';
    letter-spacing: 0.2rem;
    padding: ${theme.spacings.small} 0;
    > a {
      font-family: inherit;
      text-decoration: none;
    }
  `}
`;
