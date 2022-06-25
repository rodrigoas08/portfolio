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

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 4rem;
    position: relative;
    color: ${theme.colors.primary};
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
      background-color: ${theme.colors.white};
    }
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
  `}
`;
