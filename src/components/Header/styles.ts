import styled, { css } from "styled-components";
import * as ButtonStyles from "components/Button/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 8rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    animation: headerAnimation 4s ease-in-out;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};

    @keyframes headerAnimation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}
`;

export const ProfileWrapper = styled.div``;

export const ImageProfile = styled.div`
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  animation: inherit;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${process.env.PUBLIC_URL}/img/eu.jpg);
`;

export const Nome = styled.h4`
  ${({ theme }) => css`
    font-size: 3rem;
    font-weight: ${theme.font.light};
    padding-left: ${theme.spacings.small};
    text-shadow: -4px 1px 1px ${theme.colors.black};
    font-family: ${({ theme }) => theme.font.family.roboto};
  `}
`;

export const NavWrapper = styled.div`
  display: flex;

  ${ButtonStyles.Wrapper} {
    margin-left: 1rem;

    :first-child {
      margin-left: 0rem;
    }
  }
`;
