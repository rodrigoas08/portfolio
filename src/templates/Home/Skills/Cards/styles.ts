import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: end;
    justify-content: center;
    row-gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};
    column-gap: ${theme.spacings.small};
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      grid-template-columns: 1fr;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      padding-inline: ${theme.spacings.medium};
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 25rem;
    height: 28rem;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    border: 0.1rem solid transparent;
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
      border-radius: ${theme.border.radius};
      background-image: linear-gradient(
        to right,
        ${theme.colors.black},
        ${theme.colors.primary},
        ${theme.colors.secondary},
        ${theme.colors.primary},
        ${theme.colors.black}
      );
    }

    svg {
      width: 3.5rem;
      height: 3.5rem;
      filter: drop-shadow(0 0.4rem 0.2rem ${theme.colors.black});
    }

    h3,
    strong {
      text-transform: capitalize;
      font-weight: ${theme.font.medium};
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    p {
      line-height: 130%;
      font-weight: ${theme.font.thin};
      font-size: ${theme.font.sizes.medium};
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      width: 100%;
    }
  `}
`;
