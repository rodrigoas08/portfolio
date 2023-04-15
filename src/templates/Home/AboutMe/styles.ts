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

        div:not(:first-child) {
          display: none;
        }
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      ${Section} {
        display: flex;
        justify-content: center;

        div:not(:first-child) {
          display: none;
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
    place-items: center;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 3fr;
    gap: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.large};
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

export const Div = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.medium};
  `}
`;
