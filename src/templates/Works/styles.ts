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
    width: 50%;
    color: white;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: end;
    backdrop-filter: blur(1.5rem);
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    background-color: rgba(255, 255, 255, 0.1);
    border-right: 1rem solid ${theme.colors.primary};
    box-shadow: 0 0.1rem 0.5rem rgba(255, 255, 255, 0.25);

    :nth-child(2n) {
      align-self: end;
      justify-content: start;
      border-right: 0;
      /* border-left: 1rem solid ${theme.colors.primary}; */

      :before {
        content: '';
        height: 100%;
        width: 1rem;
        left: -1.01rem;
        position: absolute;
        background-color: ${theme.colors.primary};
      }
    }
  `}
`;
