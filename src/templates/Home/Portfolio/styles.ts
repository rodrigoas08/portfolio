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

export const TextSearch = styled.p`
  ${({ theme }) => css`
    text-align: center;
    padding-top: ${theme.spacings.large};
    font-size: ${theme.font.sizes.medium};
    text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};
  `}
`;

export const TextAlert = styled(TextSearch)``;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.large};

    @media (max-width: ${theme.breakpoints.desktop}) {
      align-items: center;
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      flex-direction: column;
    }
  `}
`;
