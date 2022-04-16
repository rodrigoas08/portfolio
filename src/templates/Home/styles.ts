import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: calc(100vh - 16rem);
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 7rem;
    cursor: default;
    position: relative;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-family: ${theme.font.family.montserrat};
    /* text-shadow: 0px 2px 1px ${theme.colors.white}; */

    &:hover {
      :after {
        content: '';
        width: 100%;
        opacity: 0.5;
        display: block;
        height: 0.1rem;
        position: absolute;
        background-color: ${theme.colors.primary};
        box-shadow: 5px 3px 1px rgba(0, 0, 0, 0.6);
      }

      ::before {
        content: '';
        top: 1.1rem;
        opacity: 0.4;
        left: 12.45rem;
        display: block;
        width: 0.57rem;
        height: 0.57rem;
        border-radius: 50%;
        position: absolute;
        background-color: ${theme.colors.primary};
      }
    }
  `}
`;

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    cursor: default;
    padding-top: 0.6rem;
    padding-bottom: 5rem;
    text-transform: uppercase;
    color: ${theme.colors.primary};
  `}
`;

export const Article = styled.article`
  display: none;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
`;

export const Seta = styled.img`
  display: none;
  height: 2rem;
  width: 2rem;
  animation: is-bouncing 1.75s ease-in alternate infinite;

  @keyframes is-bouncing {
    to {
      transform: translateY(30px);
    }
  }
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    display: none;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xxlarge};
    > span {
      color: ${theme.colors.primary};
    }
  `}
`;
