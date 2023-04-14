import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'sobre' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    padding: 9rem 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0.1rem 0.4rem 1rem rgba(0, 0, 0, 0.9);

    @media (max-width: ${theme.breakpoints.largeDestkop}) {
      ${Card} {
        font-size: ${theme.font.sizes.small};
      }

      ${AboutCard} {
        display: inline;
        > img {
          float: left;
        }
        > p {
          font-size: ${theme.font.sizes.medium};
        }
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      align-items: center;
      padding: 9rem ${theme.spacings.small};

      ${AboutCard} {
        display: flex;
        align-items: center;
        flex-direction: column;

        > img {
          margin: 0;
        }

        > p {
          text-align: center;
          word-break: keep-all;
          padding: ${theme.spacings.xxsmall};
          font-size: ${theme.font.sizes.small};
        }
      }
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      ${Section} {
        > div {
          width: 100%;
        }
      }
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 90%;
    height: auto;
    display: grid;
    gap: 1rem;
    place-items: center;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'aboutCard aboutText'
      'aboutCard skills';
    margin-top: ${theme.spacings.large};
  `}
`;

export const AboutCard = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    grid-area: aboutCard;
    border-radius: ${theme.border.radius};
    border: 0.4rem solid ${theme.colors.primary};
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
      ${theme.colors.grayIce} 65%,
      ${theme.colors.primary} 0%
    );

    h1 {
      margin-top: 2rem;
      font-family: sans-serif;
    }

    p:not(:last-child) {
      text-align: center;
      font-family: sans-serif;
      color: ${theme.colors.text};
    }

    b {
      letter-spacing: 0.2rem;
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

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    column-gap: ${theme.spacings.xxsmall};
  `}
`;

export const TitleCard = styled.h1`
  ${({ theme }) => css`
    text-decoration: underline;
    text-underline-offset: 0.3rem;
    font-weight: ${theme.font.normal};
    padding-bottom: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const DivIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.medium};
  `}
`;
