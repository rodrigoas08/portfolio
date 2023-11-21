import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'sobre' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    padding: 15rem 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.desktop}) {
      ${DivIcons} h2 {
        font-size: ${theme.font.sizes.large};
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
        word-break: keep-all;
        padding-inline: ${theme.spacings.xlarge};
      }

      ${DivIcons} h2 {
        font-size: ${theme.font.sizes.xlarge};
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
          font-size: ${theme.font.sizes.small};
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
    justify-content: space-between;
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
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

export const Span = styled.b`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const DivIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.small};

    h2 {
      font-size: 2.4rem;
      text-shadow: 0.1rem 0.4rem 0.2rem ${theme.colors.black};
    }

    svg {
      fill: url('#gradient');
      filter: drop-shadow(0.1rem 0.3rem 0.2rem ${theme.colors.black});
    }

    svg:hover {
      opacity: 0.3;
      transition: 1s linear;
    }
  `}
`;
