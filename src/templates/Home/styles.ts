import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: calc(100vh - 6rem);
  grid-template-columns: 1fr 0.8fr;
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.primary};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 7rem;
    position: relative;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: ${theme.colors.text};
    font-weight: ${theme.font.bold};
    text-shadow: 0px 2px 1px ${theme.colors.white};

    ::after {
      content: '';
      width: 100%;
      height: 0.2rem;
      display: block;
      position: absolute;
      background-color: white;
      box-shadow: 5px 3px 1px rgba(0, 0, 0, 0.6);
    }
  `}
`;

export const Subtitle = styled.h4`
  padding-top: 0.6rem;
  padding-bottom: 5rem;
  text-transform: uppercase;
`;

export const Article = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.text};
  > button {
    width: 25rem;
    height: 8rem;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.font.extraBold};
    ::before {
      border: 1.2rem solid ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Seta = styled.img`
  height: 6rem;
  width: 6rem;
  animation: is-bouncing 1.75s ease-in alternate infinite;

  @keyframes is-bouncing {
    to {
      transform: translateY(40px);
    }
  }
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
    text-shadow: -1px 1px 1px ${theme.colors.black};
    > span {
      color: ${theme.colors.primary};
    }
  `}
`;
