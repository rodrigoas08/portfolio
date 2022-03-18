import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  margin: 0 20rem;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 16rem);
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 5rem;
    text-align: start;
    position: relative;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    padding: ${theme.spacings.xlarge} 0 0;
    text-shadow: -1px 1px 1px ${theme.colors.black};
    > span {
      letter-spacing: 0.5rem;
      color: ${theme.colors.error};
      font-weight: ${theme.font.extraBold};
    }
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 5rem;
    text-align: start;
    position: relative;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    padding: ${theme.spacings.xlarge} 0;
    text-shadow: -1px 1px 1px ${theme.colors.black};
    > span {
      letter-spacing: 0.5rem;
      color: ${theme.colors.success};
      font-weight: ${theme.font.extraBold};
    }
  `}
`;

export const Paragraph = styled.h2`
  ${({ theme }) => css`
  	display: none;
    font-size: 3rem;
    position: relative;
    text-align: center;
    font-weight: ${theme.font.light};
    font-family: ${theme.font.family.josefin};
    animation: paragraphAnimation 2.4s ease-out;
    padding: ${theme.spacings.small} ${theme.spacings.small};
    margin: ${theme.spacings.small} ${theme.spacings.small};

    @keyframes paragraphAnimation {
      0% {
        letter-spacing: 0.4rem;
      }
      100% {
      }
    }
    }

    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;
