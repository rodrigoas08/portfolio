import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100vw;
    height: auto;
    background: rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};
    animation: headerAnimation 5s ease-in-out;

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
  border-radius: 50%;
  animation: inherit;
  background-size: cover;
  background-image: url(${process.env.PUBLIC_URL}/img/profile.jpeg);
  animation: profileAnimation 5s ease-in-out;

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
