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

      ${About} {
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

      ${About} {
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.large};
  `}
`;

export const About = styled.div`
  ${({ theme }) => css`
    width: 80%;
    display: grid;
    grid-template-columns: auto auto;
    margin-top: ${theme.spacings.large};

    > p {
      width: 100%;
      font-size: 1.8rem;
      line-height: 150%;
      align-self: center;
      word-break: keep-all;
      font-family: ${theme.font.family.josefin};
    }
    a {
      cursor: pointer;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 20rem;
    height: 20rem;
    filter: saturate(210%);
    margin-right: ${theme.spacings.large};
    border-radius: ${theme.border.radius};
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
    width: 100%;
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.medium};
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
