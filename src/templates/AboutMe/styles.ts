import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'aboutme' })`
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
      width: 98%;
      height: 10%;
      display: block;
      position: absolute;
      background-color: white;
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    padding: 4rem 10rem;
    backdrop-filter: blur(1.5rem);
    background-color: rgba(0, 0, 0 0.1);
  `}
`;

export const Image = styled.div`
  float: left;
  width: 15rem;
  height: 15rem;
  margin-right: 2rem;
  background-size: 90% 100%;
  background-repeat: no-repeat;
  background-image: url(/img/eu.jpg);
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    width: 60%;
    line-height: 3.2rem;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
  `}
`;
