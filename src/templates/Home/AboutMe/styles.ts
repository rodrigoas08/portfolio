import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'aboutme' })`
  width: 100%;
  height: 100vh;
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
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    width: 100%;
    line-height: 3.2rem;
    font-size: ${theme.font.sizes.large};
  `}
`;

export const Habilities = styled.h4`
  font-size: 1.8rem;
  text-align: center;
  margin: 2rem auto;
  text-transform: uppercase;
`;

export const DivIcons = styled.div`
  height: auto;
  display: flex;
  column-gap: 5rem;
  justify-content: center;
`;
