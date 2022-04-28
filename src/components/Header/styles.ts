import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';

export const Wrapper = styled.header`
  ${({ theme, color }) => css`
    z-index: 2;
    width: 100%;
    height: 8rem;
    display: flex;
    position: fixed;
    align-items: center;
    background-color: ${color};
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};
    box-shadow: ${color === 'black'
      ? '0 0.1rem 0.5rem rgba(255, 255, 255, 0.25)'
      : 'transparent'};

    @media (max-width: ${theme.breakpoints.mobile}) {
      justify-content: center;
    }
  `}
`;

export const ImgLogo = styled.div`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  border-radius: 50%;
  background-size: 100% 100%;
  background-image: url(${process.env.PUBLIC_URL}/img/profile.jpeg);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  gap: 5rem;

  ${ButtonStyles.Wrapper} {
    ${({ theme }) => css`
      padding: 0;
      border: none;
      text-transform: uppercase;
      color: ${theme.colors.white};
      background-color: transparent;
      font-size: ${theme.font.sizes.small};
      > a {
        text-decoration: none;
        color: ${theme.colors.white};
      }

      :first-child {
        margin-left: 0rem;
      }

      :after {
        content: '';
        width: 0%;
        opacity: 0.5;
        height: 0.1rem;
        display: block;
        transition: 1s all ease-in-out;
        background-color: ${theme.colors.primary};
      }

      :before {
        content: '';
        width: 100%;
        opacity: 0.5;
        height: 0.1rem;
        display: block;
        transition: 1s all ease-in-out;
      }

      :hover {
        :after {
          width: 100%;
        }
        :before {
          width: 0%;
          background-color: ${theme.colors.primary};
        }
      }
    `}
  }
`;
