import styled, { css } from 'styled-components';

export const Content = styled.section`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-rows: 0.2fr 1fr;
  height: calc(100vh - 180px);

  > div {
    border: 1px solid black;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 4rem;
    text-align: center;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    text-shadow: -4px 10px 1px ${theme.colors.primary};
  `}
`;

export const Icon = styled.img`
  border: 1px solid black;
`;

export const Ul = styled.ul`
  width: 100%;
  padding: 1rem;
  font-size: 2.3rem;
  border: 1px solid black;
  list-style: inside url(${process.env.PUBLIC_URL}/img/check.svg);
`;

export const Li = styled.li`
  padding: 2rem;
`;
