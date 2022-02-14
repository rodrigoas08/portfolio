import styled, { css } from "styled-components";

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 180px);
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 12rem;
    text-align: center;
    position: relative;
    text-transform: capitalize;
    animation: titleAnimation 2.5s ease-out;
    font-family: ${theme.font.family.roboto};
    padding: ${theme.spacings.small} ${theme.spacings.small};
    /* text-shadow: -4px 1px 1px ${theme.colors.black}; */

    @keyframes titleAnimation {
      0% {
        letter-spacing: 2rem;
      }
      100% {
        letter-spacing: 0rem;
      }
    }

    > span {
      background: -webkit-linear-gradient(
        109deg,
        rgba(35, 66, 164, 1) 11.3%,
        rgba(61, 121, 176, 1) 91.1%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(0, 0, 0, 0.1);
      /* text-shadow: -4px 1px 1px ${theme.colors.white}; */
    }
  `}
`;

export const Paragraph = styled.h2`
  ${({ theme }) => css`
    font-size: 5rem;
    position: relative;
    text-align: center;
    font-weight: ${theme.font.light};
    font-family: ${theme.font.family.josefin};
    animation: paragraphAnimation 2.4s ease-out;
    padding: ${theme.spacings.small} ${theme.spacings.small};
    margin: ${theme.spacings.small} ${theme.spacings.small};

    @keyframes paragraphAnimation {
      0% {
        letter-spacing: 0.7rem;
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
