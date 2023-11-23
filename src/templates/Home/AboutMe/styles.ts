import styled, { css } from 'styled-components';

export const Wrapper = styled.section.attrs({ id: 'sobre' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    padding: 15rem 0;
    align-items: center;
    flex-direction: column;

    @media (max-width: ${theme.breakpoints.desktop}) {
      ${DivIcons} h2 {
        font-size: ${theme.font.sizes.large};
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      ${Content} {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: ${theme.spacings.medium};
      }

      ${DivIcons} h2 {
        font-size: ${theme.font.sizes.xlarge};
      }
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      padding-inline: 2.4rem;

      ${Content} {
        display: flex;
        justify-content: center;
      }

      ${DivIcons} {
        flex-wrap: wrap;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 68rem;
    height: auto;
    position: relative;
    padding: ${theme.spacings.small};
    margin-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.black};

    :after {
      content: '';
      bottom: 0;
      left: 0rem;
      width: 100%;
      height: 0.1rem;
      position: absolute;
      background-image: linear-gradient(
        to right,
        ${theme.colors.black},
        ${theme.colors.primary},
        ${theme.colors.secondary},
        ${theme.colors.primary},
        ${theme.colors.black}
      );
    }

    :before {
      content: '';
      top: 0;
      left: 0rem;
      width: 100%;
      height: 0.1rem;
      position: absolute;
      border-radius: 0.5rem;
      background-image: linear-gradient(
        to right,
        ${theme.colors.black},
        ${theme.colors.primary},
        ${theme.colors.secondary},
        ${theme.colors.primary},
        ${theme.colors.black}
      );
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    float: left;
    width: 15rem;
    height: 15rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small}
      ${theme.spacings.small} 0;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    line-height: 3rem;
    font-size: ${theme.font.sizes.large};

    a {
      cursor: pointer;
      text-decoration: none;
      color: ${theme.colors.primary};
    }

    strong {
      font-weight: ${theme.font.light};

      :not(:first-of-type) {
        color: ${theme.colors.primary};
        font-weight: ${theme.font.medium};
      }
    }
  `}
`;

export const DivIcons = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.small};

    svg {
      fill: url('#gradient');
      transition: 1s linear;
      filter: drop-shadow(0.1rem 0.3rem 0.2rem ${theme.colors.black});
    }

    svg:hover {
      opacity: 0.3;
      transition: 1s linear;
    }
  `}
`;
