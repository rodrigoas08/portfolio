import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'portfolio' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    padding: 14rem 0;
    align-items: start;

    @media (max-width: ${theme.breakpoints.ipad}) {
      ${SubTitle} {
        text-align: center;
        padding: ${theme.spacings.large} ${theme.spacings.small} 0
          ${theme.spacings.small};
        font-size: ${theme.font.sizes.small};
      }
    } ;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: ${theme.spacings.xlarge};

    @media (max-width: ${theme.breakpoints.ipad}) {
      align-items: center;
      flex-direction: column;
    }
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-weight: lighter;
    padding-top: ${theme.spacings.large};
    font-size: ${theme.font.sizes.medium};
    text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.large};

    @media (max-width: ${theme.breakpoints.desktop}) {
      align-items: center;
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      flex-direction: column;
    }
  `}
`;
