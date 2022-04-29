import styled, { css } from 'styled-components';

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
  ${({ theme }) => css`
    cursor: pointer;
    border-radius: 50%;
    background-size: 100% 100%;
    width: ${theme.spacings.xlarge};
    height: ${theme.spacings.xlarge};
    background-image: url(${process.env.PUBLIC_URL}/img/profile.jpeg);

    @media (max-width: ${theme.breakpoints.mobile}) {
      display: none;
    }
  `}
`;

export const NavWrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xlarge};
  `}
`;
