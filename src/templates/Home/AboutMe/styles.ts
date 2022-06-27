import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'aboutme' })`
  width: 100%;
  min-height: 100vh;
  display: flex;
  color: #cccccc;
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
    background-color: rgba(0, 0, 0, 0.9);
    padding: ${theme.spacings.xlarge} 0;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    z-index: 1;
    font-size: 4rem;
    position: relative;
    font-weight: ${theme.font.light};
    padding-bottom: ${theme.spacings.xlarge};

    :before {
      content: '';
      top: 30%;
      left: -2%;
      width: 98%;
      height: 20%;
      z-index: -1;
      opacity: 0.3;
      position: absolute;
      background-color: ${theme.colors.primary};
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    padding: ${theme.spacings.large} 25rem;

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      padding: 0 5rem;
    }
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    float: left;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-right: ${theme.spacings.small};
    background-image: url(/img/euPedro.jpg);

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      float: none;
      margin: 0 auto;
    }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    width: 100%;
    line-height: 3.2rem;
    font-size: ${theme.font.sizes.large};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      padding-top: 2rem;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const Habilities = styled.h4`
  ${({ theme }) => css`
    text-align: center;
    text-transform: uppercase;
    font-size: ${theme.font.sizes.large};
    margin: ${theme.spacings.small} auto;
    padding-top: ${theme.spacings.medium};
  `}
`;

export const DivIcons = styled.div`
  ${({ theme }) => css`
    height: auto;
    display: flex;
    column-gap: 5rem;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      column-gap: 4rem;
    }
  `}
`;
