import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'servicos' })`
  width: 100%;
  height: auto;
  display: flex;
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
      background-color: white;
    }
  `}
`;

export const Section = styled.section`
  width: 80%;
  gap: 2rem;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 25%;
    display: flex;
    min-height: 15rem;
    break-inside: auto;
    align-items: center;
    word-wrap: break-word;
    justify-content: center;
    color: ${theme.colors.white};
    backdrop-filter: blur(1.5rem);
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    background-color: rgba(255, 255, 255, 0.1);
    border-top: 0.1rem solid ${theme.colors.primary};

    /* :nth-child(2n) {
      align-self: end;
      justify-content: start;
    } */
  `}
`;
