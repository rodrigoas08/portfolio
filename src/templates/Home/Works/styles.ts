import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'servicos' })`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 8rem;
  align-items: start;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.xlarge} 0;
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 80%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.spacings.small};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      align-items: center;
      flex-direction: column;
    }
  `}
`;
