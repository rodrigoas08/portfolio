import styled, { css } from 'styled-components';

export const Wrapper = styled.section.attrs({ id: 'projetos' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    padding: 15rem 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.ipad}) {
      ${TextAlert} {
        font-size: ${theme.font.sizes.small};
      }
    } ;
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    font-weight: ${theme.font.thin};
    padding-top: ${theme.spacings.large};
    font-size: ${theme.font.sizes.xlarge};
    text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};
  `}
`;

export const TextAlert = styled(Subtitle)``;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    justify-content: center;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.small};
    margin-top: ${theme.spacings.large};

    @media (max-width: ${theme.breakpoints.desktop}) {
      align-items: center;
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      flex-direction: column;
    }
  `}
`;
