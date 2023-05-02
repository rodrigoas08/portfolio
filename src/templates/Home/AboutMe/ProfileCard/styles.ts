import styled, { css } from 'styled-components';

export const AboutCard = styled.div`
  width: 32rem;
  height: auto;
  grid-area: aboutCard;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};
    border: 0.4rem solid ${theme.colors.primary};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small}
      ${theme.spacings.small};
    background: linear-gradient(
      to top,
      ${theme.colors.grayIce} 26rem,
      ${theme.colors.primary} 0%
    );
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 15rem;
    height: 15rem;
    border-radius: ${theme.border.rounded};
    border: 0.4rem solid ${theme.colors.primary};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.gray};

    a {
      color: inherit;
      cursor: pointer;
      text-decoration: none;
    }

    strong {
      color: ${theme.colors.alabaster};
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`;
