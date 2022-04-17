import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';

export const Wrapper = styled.div.attrs({ id: 'home' })`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 8rem);
`;

export const Section = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;

  ${ButtonStyles.Wrapper} {
    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 7rem;
    cursor: default;
    position: relative;
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-family: ${theme.font.family.montserrat};

    :after {
      content: '';
      width: 0%;
      opacity: 0.5;
      display: block;
      height: 0.1rem;
      position: absolute;
      transition: 1s ease-in-out;
      background-color: transparent;
    }

    &:hover {
      :after {
        content: '';
        width: 100%;
        opacity: 0.5;
        display: block;
        height: 0.1rem;
        position: absolute;
        background-color: ${theme.colors.primary};
      }

      ::before {
        content: '';
        top: 1.5rem;
        opacity: 0.7;
        left: 17.4rem;
        display: block;
        width: 0.86rem;
        height: 0.86rem;
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

export const Seta = styled.img`
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
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xxlarge};
    > span {
      color: ${theme.colors.primary};
    }
  `}
`;
