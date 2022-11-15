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
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 0.9);
    padding: ${theme.spacings.xlarge} 15rem;
    box-shadow: 0.1rem 0.4rem 1rem rgba(0, 0, 0, 0.9);
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: ${theme.spacings.large} 0;
    background-image: url(/img/euPedro.jpg);

    @media (max-width: ${theme.breakpoints.smallTablet}) {
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: ${theme.spacings.small};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
    }
  `}
`;

export const Article = styled.article`
  ${({ theme }) => css`
    width: 45rem;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    column-gap: ${theme.spacings.xxsmall};
    background-color: rgba(255, 255, 255, 0.1);
    border-top: 0.1rem solid ${theme.colors.primary};

    > p {
      color: ${theme.colors.text};
      line-height: 140%;
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
      padding-bottom: ${theme.spacings.xsmall};
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
    padding-bottom: ${theme.spacings.xsmall};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
    }
  `}
`;

export const DivIcons = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    gap: ${theme.spacings.xxsmall};
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;