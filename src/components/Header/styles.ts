import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: auto;
    display: flex;
    background: rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    animation: headerAnimation 4s ease-in-out;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};

    @keyframes headerAnimation {
      0% {
        background: rgba(0, 0, 0, 0);
      }
      100% {
        background: rgba(0, 0, 0, 0) 0.1;
      }
    }
  `}
`;

export const ProfileWrapper = styled.div`
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  border-radius: 50%;
  animation: inherit;
  background-size: cover;
  animation: profileAnimation 5s ease-in-out;
  background-image: url(${process.env.PUBLIC_URL}/img/profile.jpeg);

  @keyframes profileAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
`;
