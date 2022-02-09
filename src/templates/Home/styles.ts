import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    position: absolute;
    height: calc(100% - 160px);
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 15rem;
    font-weight: 800;
    /* border: 5px solid; */
    text-align: center;
    position: relative;
    letter-spacing: 1.7rem;
    text-transform: capitalize;
    font-style: ${theme.font.normal};
    animation: titleAnimation 2.5s ease-out;
    font-family: ${theme.font.family.josefin};
    text-shadow: -4px 1px 1px ${theme.colors.black};
    padding: ${theme.spacings.small} ${theme.spacings.small};
    margin: ${theme.spacings.small} ${theme.spacings.small};
    /* border-image: linear-gradient(
        360deg,
        #ccc 50%,
        transparent 50%,
        transparent 70%,
        transparent 90%,
        transparent 90%,
        #ccc 5%
      )
      1; */

    @keyframes titleAnimation {
      0% {
        letter-spacing: 2rem;
      }
      100% {
        letter-spacing: 1.7rem;
      }
    }

    > span {
      color: ${theme.colors.black};
      text-shadow: -4px 1px 1px ${theme.colors.white};
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
