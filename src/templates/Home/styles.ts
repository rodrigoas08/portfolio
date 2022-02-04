import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    color: ${theme.colors.white};
    font-family: "Azonix", sans-serif;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    top: 20rem;
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
        top: 25rem;
      }
      100% {
        top: 20rem;
      }
    }
  `}
`;

export const Paragraph = styled.h2`
  ${({ theme }) => css`
    top: 40rem;
    font-size: 5rem;
    position: absolute;
    text-align: left;
    font-weight: ${theme.font.light};
    font-family: ${theme.font.family.josefin};

    animation: paragraphAnimation ease-out;
    animation-duration: 2.4s;

    @keyframes paragraphAnimation {
      0% {
        top: 40rem;
      }
      80% {
        top: 40rem;
      }
      95% {
        top: 41rem;
      }
      100% {
        top: 40rem;
      }
    }

    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;
