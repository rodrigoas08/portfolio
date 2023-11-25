import { CardProps } from '.';
import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    width: 35rem;
    display: grid;
    height: 40rem;
    grid-template-rows: 1fr 0.8fr;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.black};

    :after {
      content: '';
      bottom: 0;
      left: 0rem;
      width: 100%;
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
      left: 0rem;
      width: 100%;
      height: 0.1rem;
      position: absolute;
      border-radius: ${theme.border.radius};;
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
    background-image: url(${background});
    border-radius: ${theme.border.radius};
    box-shadow: 0 0 0.2rem ${theme.colors.text};
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: start;
    flex-direction: column;
    justify-content: start;
    color: ${theme.colors.text};
    gap: ${theme.spacings.xxsmall};
    border-radius: 0 0 0.5rem 0.5rem;
    padding: ${theme.spacings.xxsmall} 0;
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

export const WrapperStacks = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: ${theme.spacings.xxxsmall};
  `}
`;

export const WrapperStack = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: fit-content;
    height: fit-content;
    border-radius: 50rem;
    padding-inline: 0.8rem;
    justify-content: center;
    background-color: ${theme.colors.grayIce};
  `}
`;

export const CardStack = styled.p`
  ${({ theme }) => css`
    align-self: end;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
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
