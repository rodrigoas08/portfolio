import styled, { css } from 'styled-components';

export const Container = styled.div.attrs({ id: 'servicos' })`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

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
      box-shadow: 5px 3px 1px rgba(0, 0, 0, 0.6);
    }
  `}
`;
