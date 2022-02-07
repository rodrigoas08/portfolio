import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    top: 22rem;
    font-size: 8rem;
    border: 5px solid;
    position: absolute;
    text-align: center;
    letter-spacing: 1.7rem;
    background: rgba(0, 0, 0, 0.1);
    font-style: ${theme.font.italic};
    animation: titleAnimation 2.5s ease-out;
    font-family: ${theme.font.family.azonix};
    text-shadow: -4px 1px 1px ${theme.colors.black};
    padding: ${theme.spacings.small} ${theme.spacings.small};
    border-image: linear-gradient(
        157deg,
        #ccc 10%,
        transparent 55%,
        transparent 45%,
        transparent 45%,
        transparent 55%,
        #ccc 90%
      )1;

    @keyframes titleAnimation {
      0% {
        left: -0rem;
        letter-spacing: 4rem;
      }
      100% {
        left: 38.25%;
        letter-spacing: 1.7rem;
      }
    }
  `}
`;

export const Paragraph = styled.h2`
  ${({ theme }) => css`
    top: 47rem;
    font-size: 5rem;
    text-align: left;
    position: absolute;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-family: ${theme.font.family.josefin};
    animation: paragraphAnimation 2.4s ease-out;

    @keyframes paragraphAnimation {
      0% {
        right: -0rem;
        letter-spacing: 2rem;
      }
      100% {
        right: 41.65%;
      }
    }
    }

    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;
