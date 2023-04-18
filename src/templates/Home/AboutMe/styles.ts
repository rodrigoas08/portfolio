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

    @media (max-width: ${theme.breakpoints.ipad}) {
      ${Section} {
        display: flex;
        justify-content: center;
      }

      ${AboutText} {
        display: none;
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
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 90%;
    height: auto;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1.5fr;
    column-gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.xxlarge};
    grid-template-areas: 'aboutCard aboutText';
  `}
`;

export const AboutText = styled.div`
  width: 100%;
  height: auto;
  grid-area: aboutText;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    line-height: 160%;
    font-family: sans-serif;
    font-size: ${theme.font.sizes.medium};
  `}

  a {
    cursor: pointer;
  }
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
