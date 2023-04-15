import styled, { css } from 'styled-components';

export const AboutCard = styled.div`
  ${({ theme }) => css`
    width: 32rem;
    height: auto;
    grid-area: aboutCard;
    border-radius: ${theme.border.radius};
    border: 0.4rem solid ${theme.colors.primary};

    @media (max-width: ${theme.breakpoints.tablet}) {
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
    }
  `}
`;

export const TopInfo = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small}
      ${theme.spacings.small};
    background: linear-gradient(
      to top,
      ${theme.colors.grayIce} 32rem,
      ${theme.colors.primary} 0%
    );
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 15rem;
    height: 15rem;
    filter: saturate(210%);
    border-radius: ${theme.border.rounded};
    border: 0.4rem solid ${theme.colors.primary};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-family: sans-serif;
    color: ${theme.colors.text};

    b {
      font-family: inherit;
    }

    a {
      color: inherit;
      cursor: pointer;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: sans-serif;
    margin-top: ${theme.spacings.small};
  `}
`;

export const DivIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.small};

    svg {
      transition: 1s ease;
    }

    svg:hover {
      transition: 1s ease;
      fill: ${theme.colors.primary};
    }
  `}
`;
