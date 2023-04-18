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

      ${Div} {
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(3, 1fr);
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
        padding-inline: 10rem;
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
    gap: ${theme.spacings.small};
    grid-template-rows: 1fr 0.6fr;
    grid-template-columns: 34rem 3fr;
    margin-top: ${theme.spacings.xxlarge};
    grid-template-areas:
      'aboutCard aboutText'
      'aboutCard skills';
  `}
`;

export const AboutText = styled.div`
  width: 100%;
  height: auto;
  grid-area: aboutText;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    line-height: 120%;
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.montserrat};
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

export const SkillsCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  grid-area: skills;
  justify-content: center;
`;

export const Div = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: end;
    justify-content: center;
    row-gap: ${theme.spacings.large};
    column-gap: ${theme.spacings.small};
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);

    div svg {
      opacity: 0.4;
    }

    div:hover svg {
      opacity: 1;
      transform: scale(1.1);
    }
  `}
`;
