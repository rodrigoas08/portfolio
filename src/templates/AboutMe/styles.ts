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
    opacity: 0.9;
    display: flex;
    flex-wrap: wrap;
    background: #b4b4b4;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xlarge} 0;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    z-index: 1;
    font-size: 4rem;
    position: relative;
    color: ${theme.colors.text};
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
    backdrop-filter: blur(1.5rem);
    background-color: rgba(0, 0, 0 0.1);
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
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.large};
  `}
`;