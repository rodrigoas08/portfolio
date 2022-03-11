import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 16rem);
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 7rem;
    position: relative;
    text-align: center;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    padding: ${theme.spacings.xlarge} 0;
    text-shadow: -1px 4px 1px ${theme.colors.primary};

    > span {
      font-weight: ${theme.font.extraBold};
      background: -webkit-linear-gradient(
        109deg,
        rgba(255, 255, 255, 0.9),
        rgba(123, 23, 203, 0.9)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(29, 48, 255, 1);
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
