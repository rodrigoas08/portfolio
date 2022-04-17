import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'servicos' })`
  height: 100vh;
  display: flex;
  padding-top: 8rem;
  align-items: start;
  justify-content: center;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid yellowgreen;
    padding: 5rem 0;
    width: 100%;

    > ul {
      padding: 0 ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.xxlarge};
      list-style: inside url(${process.env.PUBLIC_URL}/img/check.svg);

      > li {
        color: ${theme.colors.white};
        padding: ${theme.spacings.small};
      }
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 4rem;
    position: relative;
    /* text-transform: uppercase; */
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
