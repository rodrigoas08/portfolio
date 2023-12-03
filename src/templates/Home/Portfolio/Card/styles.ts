import { CardProps } from '.';
import styled, { css } from 'styled-components';
import ImageEmConstrucao from 'assets/portfolios/em_construcao.webp';

export const Card = styled.div<CardProps>`
  ${({ theme, background }) => css`
    width: 40rem;
    height: 40rem;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    border-radius: 1rem 1rem 0 0;
    box-shadow: 0.3rem 0.4rem 0.9rem rgba(0, 0, 0, 0.9);
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(0, 0, 0, 0.6)
      ),
      url(${background || ImageEmConstrucao});

    :after {
      content: '';
      left: 0;
      bottom: 0;
      width: 100%;
      opacity: 0.2;
      height: 0.1rem;
      position: absolute;
      background-image: linear-gradient(
        to right,
        ${theme.colors.black},
        ${theme.colors.primary},
        ${theme.colors.secondary},
        ${theme.colors.primary},
        ${theme.colors.black}
      );
    }

    :before {
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0.2;
      height: 0.1rem;
      position: absolute;
      background-image: linear-gradient(
        to right,
        ${theme.colors.black},
        ${theme.colors.primary},
        ${theme.colors.secondary},
        ${theme.colors.primary},
        ${theme.colors.black}
      );
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      max-width: 30rem;

      ${CardInfo} {
        height: 50%;
      }

      ${IconWrapper} {
        gap: ${theme.spacings.small};
      }

      ${CardTitle} {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    height: 15rem;
    display: flex;
    position: relative;
    align-items: start;
    word-break: normal;
    word-wrap: break-word;
    flex-direction: column;
    justify-content: start;
    color: ${theme.colors.text};
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.background};
    text-shadow: 0 0.1rem 0.4rem ${theme.colors.black};
  `}
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  ${({ theme }) => css`
    text-transform: capitalize;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const CardDescription = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.thin};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};

    svg {
      cursor: pointer;
      fill: url('#gradient');
      transition: 1s linear;
      filter: drop-shadow(0 0.3rem 0.1rem ${theme.colors.black});
    }

    svg:hover {
      opacity: 0.3;
      transition: 1s linear;
    }
  `}
`;
