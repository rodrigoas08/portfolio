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

export const Section = styled.section`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
/* 
  :before{
    content: '';
    height: 63.1%;
    width: 0.3rem;
    background-color: white;
    position: absolute;
    left: 50%;
  } */
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 4rem;
    position: relative;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.light};
    padding-bottom: ${theme.spacings.xlarge};

    &:hover:after {
      content: '';
      width: 100%;
      opacity: 0.5;
      display: block;
      height: 0.1rem;
      position: absolute;
      background-color: ${theme.colors.primary};
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 49%;
    color: white;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: end;
    backdrop-filter: blur(1.5rem);
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    background-color: rgba(255, 255, 255, 0.1);
    border-top: 0.3rem solid ${theme.colors.primary};

    :nth-child(2n) {
      align-self: end;
      border-right: 0;
      justify-content: start;
    }
  `}
`;
