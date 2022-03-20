import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: calc(100vh - 16rem);
`;

export const Article = styled.article``;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 5rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    text-shadow: -1px 1px 1px ${theme.colors.black};
    > span {
      color: ${theme.colors.error};
    }
    }
  `}
`;

export const Title2 = styled.h1`
  ${({ theme }) => css`
    font-size: 5rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    text-shadow: -1px 1px 1px ${theme.colors.black};
    > span {
      color: ${theme.colors.barberry};
    }
  `}
`;

export const Title3 = styled.h1`
  ${({ theme }) => css`
    font-size: 5rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    text-shadow: -1px 1px 1px ${theme.colors.black};
    > span {
      color: ${theme.colors.success};
    }
  `}
`;

export const Paragraph = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    position: relative;
    text-align: center;
    color: ${theme.colors.text};
    font-weight: ${theme.font.bold};
    margin: ${theme.spacings.small} ${theme.spacings.small};
    }

    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;
