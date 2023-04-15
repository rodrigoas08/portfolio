import styled, { css } from 'styled-components';

export const AboutCard = styled.div`
  ${({ theme }) => css`
    width: 32rem;
    height: auto;
    grid-area: aboutCard;
    border-radius: ${theme.border.radius};
    border: 0.4rem solid ${theme.colors.primary};

    @media (max-width: ${theme.breakpoints.tablet}) {
      ${TopInfo} {
        background: linear-gradient(
          to top,
          ${theme.colors.grayIce} 28rem,
          ${theme.colors.primary} 0%
        );
      }
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      ${TopInfo} {
        background: linear-gradient(
          to top,
          ${theme.colors.grayIce} 28rem,
          ${theme.colors.primary} 0%
        );
      }
    }
  `}
`;

export const TopInfo = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    padding: 1rem ${theme.spacings.small} ${theme.spacings.small};
    background: linear-gradient(
      to top,
      ${theme.colors.grayIce} 33rem,
      ${theme.colors.primary} 0%
    );

    h1 {
      font-family: sans-serif;
      margin-top: ${theme.spacings.small};
    }

    p {
      text-align: center;
      font-family: sans-serif;
      color: ${theme.colors.text};
    }

    b {
      font-family: sans-serif;
    }
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

export const DivIcons = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.medium};
  `}
`;
