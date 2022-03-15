import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: calc(100vh - 16rem);
    background-color: rgba(0, 0, 0, 0.03);

    > ul {
      padding: 0 ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.xxlarge};
      list-style: inside url(${process.env.PUBLIC_URL}/img/check.svg);

      > li {
        padding: ${theme.spacings.small};
      }
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 5.5rem;
    position: relative;
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    padding: ${theme.spacings.xlarge} 0;
    letter-spacing: ${theme.spacings.xxxsmall};
    text-shadow: -1px 1px 1px ${theme.colors.black};

    :after {
      content: '';
      width: 100%;
      height: 1px;
      display: block;
      position: absolute;
      background: ${theme.colors.primary};
    }
  `}
`;
