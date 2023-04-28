import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'sobre' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    padding: 14rem 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.desktop}) {
      ${DivIcons} h2 {
        font-size: 1.8rem;
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      ${Section} {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: ${theme.spacings.medium};
      }

      ${AboutText} {
        padding-inline: 5rem;
        word-break: keep-all;
      }

      ${DivIcons} h2 {
        font-size: 2rem;
      }
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      ${Section} {
        display: flex;
        justify-content: center;
      }

      ${AboutText} ${Text} {
        display: none;
      }

      ${AboutText} {
        width: 32rem;
      }

      ${DivIcons} {
        flex-wrap: wrap;

        h2 {
          font-size: 1.4rem;
        }
      }
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    height: auto;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr auto;
    column-gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.xxlarge};
    grid-template-areas: 'aboutCard aboutText';
  `}
`;

export const AboutText = styled.div`
  ${({ theme }) => css`
    width: 64rem;
    height: auto;
    display: flex;
    align-items: start;
    grid-area: aboutText;
    flex-direction: column;
    justify-content: space-around;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.grayIce};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    line-height: 3rem;
    font-size: ${theme.font.sizes.medium};
    text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};
  `}

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const DivIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.small};

    h2 {
      font-size: 2.4rem;
    }

    svg {
      transition: 1s ease;
    }

    svg:hover {
      transition: 1s ease;
      fill: ${theme.colors.primary};
    }
  `}
`;
