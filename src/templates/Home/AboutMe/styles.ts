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

      ${SkillsCard}, ${AboutText} {
        display: none;
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      ${Section} {
        display: flex;
        justify-content: center;
      }

      ${SkillsCard}, ${AboutText} {
        display: none;
      }
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 90%;
    height: auto;
    display: grid;
    place-items: center;
    grid-template-rows: 1fr 0.6fr;
    grid-template-columns: 1fr 3fr;
    gap: ${theme.spacings.xxxsmall};
    margin-top: ${theme.spacings.xxlarge};
    grid-template-areas:
      'aboutCard aboutText'
      'aboutCard skills';
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

export const AboutText = styled.div`
  width: 100%;
  height: auto;
  grid-area: aboutText;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    line-height: 150%;
    font-size: ${theme.font.sizes.large};
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
  grid-area: skills;
  align-items: end;
  justify-content: center;
`;

export const HR = styled.div`
  z-index: 2;
  width: 100%;
  height: 0.1rem;
  opacity: 0.3;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Div = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: end;
    justify-content: center;
    gap: ${theme.spacings.medium};

    div svg {
      opacity: 0.4;
    }

    div:hover svg {
      transform: scale(1.1);
      opacity: 1;
    }
  `}
`;
