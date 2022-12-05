import styled, { css } from 'styled-components';
// import * as ButtonStyles from 'components/Button/styles';

export const Card = styled.div`
  ${({ theme }) => css`
    width: 25%;
    cursor: pointer;
    min-height: 30rem;
    backdrop-filter: blur(1.5rem);
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};
    background-color: rgba(255, 255, 255, 0.1);
    border-top: 0.3rem solid ${theme.colors.primary};
    background-image: url(/img/portfolios/ecbporto.png);
    background-size: cover;

    :hover {
      ${CardInfo} {
        height: 50%;
        transition: all 0.5s ease-in-out;
      }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      width: 80%;
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
      width: 100%;
    }
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    bottom: 0;
    width: 100%;
    height: 20%;
    position: absolute;
    border-radius: 15px 15px 0 0;
    backdrop-filter: blur(1.5rem);
    transition: height 1.2s ease-out;
    background: ${theme.colors.primary};
  `}
`;

export const Cardtext = styled.p`
  ${({ theme }) => css`
    text-align: center;
    padding: 2rem 0;
    color: ${theme.colors.text};
    > a {
      text-decoration: none;
    }
  `}
`;
