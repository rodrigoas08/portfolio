import styled, { css } from "styled-components";


export const Title = styled.h1`
  ${({ theme }) => css`
    top: 22rem;
    font-size: 8rem;
    position: absolute;
    text-align: center;
    letter-spacing: 1.7rem;
    animation: titleAnimation ease-out;
    animation-duration: 2.5s;
    font-style: ${theme.font.italic};
    text-shadow: 2px 2px 2px ${theme.colors.black};

    @keyframes titleAnimation {
      0% {
        top: -20rem;
      }
      80% {
        top: 27rem;
      }
      100% {
        top: 22rem;
      }
    }
  `}
`;

export const Paragraph = styled.h2`
  ${({ theme }) => css`
    top: 42rem;
    font-size: 5rem;
    position: absolute;
    text-align: left;
    font-weight: ${theme.font.light};
    font-family: ${theme.font.family.josefin};

    animation: paragraphAnimation ease-out;
    animation-duration: 2.4s;

    @keyframes paragraphAnimation {
      0% {
        top: 42rem;
      }
      80% {
        top: 42rem;
      }
      95% {
        top: 43rem;
      }
      100% {
        top: 42rem;
      }
    }

    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;
