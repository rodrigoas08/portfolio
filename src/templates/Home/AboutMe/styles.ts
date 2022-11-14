import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'sobre' })`
  width: 100%;
  display: flex;
  max-height: 100vh;
  padding-top: 8rem;
  align-items: start;
  justify-content: center;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 4px 1rem black;
    background-color: rgba(0, 0, 0, 0.9);
    padding: ${theme.spacings.xlarge} 0;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    z-index: 1;
    font-size: 3rem;
    position: relative;
    font-family: 'Gotham';
    text-transform: uppercase;
    font-weight: ${theme.font.light};
    padding-bottom: ${theme.spacings.xlarge};

    :before {
      content: '';
      left: -2%;
      width: 100%;
      height: 50%;
      z-index: -1;
      opacity: 0.5;
      position: absolute;
      border-radius: 1rem 4rem;
      background-color: ${theme.colors.primary};
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: ${theme.spacings.large} 25rem;

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      padding: 0 5rem;
    }
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-right: ${theme.spacings.small};
    background-image: url(/img/euPedro.jpg);

    @media (max-width: ${theme.breakpoints.smallTablet}) {
    }
  `}
`;

export const Article = styled.article`
  ${({ theme }) => css`
    width: 35rem;
    height: 25rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.medium};
    column-gap: ${theme.spacings.xxsmall};
    border-radius: 0.5rem 0.5rem 1rem 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-top: 0.1rem solid ${theme.colors.primary};

    > p {
      color: ${theme.colors.text};
      a {
        cursor: pointer;
      }
    }
    > ul {
      align-self: flex-start;
      padding-left: ${theme.spacings.small};
    }
    > ul,
    li {
      color: ${theme.colors.text};
      padding-bottom: ${theme.spacings.xxxsmall};
    }
    li::marker {
      color: ${theme.colors.primary};
    }
  `}
`;

export const TitleCard = styled.h3`
  ${({ theme }) => css`
    text-decoration: underline;
    text-transform: capitalize;
    text-underline-offset: 0.3rem;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    padding-bottom: ${theme.spacings.xxsmall};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      padding-top: ${theme.spacings.small};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const DivIcons = styled.div`
  gap: 1rem;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
