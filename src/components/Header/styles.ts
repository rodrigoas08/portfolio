import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 8rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};
  `}
`;

export const ProfileWrapper = styled.div``;

export const ImageProfile = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    animation: inherit;
    border-radius: 50%;
    background-size: cover;
    width: ${theme.spacings.xxlarge};
    height: ${theme.spacings.xxlarge};
    background-image: url(${process.env.PUBLIC_URL}/img/eu.jpg);
  `}
`;

export const NavWrapper = styled.div`
  display: flex;

  ${ButtonStyles.Wrapper} {
    border: none;
    color: ${({ theme }) => theme.colors.white};

    :first-child {
      margin-left: 0rem;
    }

    &:after {
      content: '';
      width: 0%;
      height: 1px;
      display: block;
      transition: 1s ease-in-out;
      background: ${({ theme }) => theme.colors.white};
    }

    &:before {
      content: '';
      width: 100%;
      height: 1px;
      display: block;
      background: transparent;
      transition: 1s ease-in-out;
    }

    &:hover {
      &:after {
        width: 100%;
      }
      :before {
        width: 0%;
        height: 1px;
        background: ${({ theme }) => theme.colors.white};
      }
      background-color: transparent;
    }
  }
`;
