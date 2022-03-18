import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 16rem);
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 5rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-weight: ${theme.font.extraBold};
    text-shadow: -1px 1px 1px ${theme.colors.black};
    > span {
      letter-spacing: 0.5rem;
      color: ${theme.colors.error};
    }
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 5rem;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-weight: ${theme.font.extraBold};
    text-shadow: -1px 1px 1px ${theme.colors.black};
    > span {
      letter-spacing: 0.5rem;
      color: ${theme.colors.success};
    }
  `}
`;

export const Paragraph = styled.h2`
  ${({ theme }) => css`
    font-size: 3rem;
    position: relative;
    font-weight: ${theme.font.light};
    margin: ${theme.spacings.small} ${theme.spacings.small};
    }

    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;
