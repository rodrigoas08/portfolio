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
    z-index: 2;
    display: inline;
    position: relative;
    text-transform: uppercase;
    color: ${theme.colors.white};
    padding: ${theme.spacings.xlarge} 0;
    font-size: ${theme.font.sizes.xxxlarge};
    letter-spacing: ${theme.spacings.xxxsmall};

    &:before {
      content: '';
      top: 30%;
      left: -1.5%;
      z-index: -1;
      display: block;
      position: absolute;
      border-radius: 50%;
      background: transparent;
      border: 3px solid transparent;
      width: ${theme.spacings.xlarge};
      height: ${theme.spacings.xlarge};
      border-top-color: ${theme.colors.white};
      border-bottom-color: ${theme.colors.black};
      animation: rotating 2s 2s ease-in-out alternate-reverse infinite;
    }
    @keyframes rotating {
      to {
        transform: rotate(1turn);
        border-top-color: ${theme.colors.black};
        border-bottom-color: ${theme.colors.white};
      }
    }
  `}
`;
