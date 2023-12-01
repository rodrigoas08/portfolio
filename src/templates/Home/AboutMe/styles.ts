import styled, { css } from 'styled-components';
import EuPedro from 'assets/euPedro.webp';

export const Wrapper = styled.section.attrs({ id: 'sobre' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding: 8rem 8rem 0;
    flex-direction: column;

    @media (max-width: ${theme.breakpoints.largeDestkop}) {
      ${Content} {
        width: 100%;
      }
    }

    @media (max-width: ${theme.breakpoints.desktop}) {
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      ${Content} {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: ${theme.spacings.medium};
      }

      ${Text} {
        text-align: center;
      }
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      padding-inline: 2.4rem;

      ${Content} {
        display: flex;
        justify-content: center;
      }
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      padding-inline: 0;
      ${Text} {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 75%;
    height: auto;
    padding: ${theme.spacings.small};
    margin-top: ${theme.spacings.large};
  `}
`;

export const AboutImage = styled.div`
  float: left;
  width: 30rem;
  height: 30rem;
  position: relative;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.4rem 0.9rem rgba(0, 0, 0, 0.9);
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.6)),
    url(${EuPedro});
`;

export const Aside = styled.aside`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-inline: ${theme.spacings.small};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    letter-spacing: 0.1rem;
    font-size: ${theme.font.sizes.xlarge};

    a {
      cursor: pointer;
      text-decoration: none;
      color: ${theme.colors.primary};
      font-weight: ${theme.font.medium};
    }

    strong {
      font-weight: ${theme.font.medium};
      :not(:first-of-type) {
        color: ${theme.colors.primary};
      }
    }
  `}
`;

// export const WrapperAboutIcons = styled.div`
//   ${({ theme }) => css`
//     display: flex;
//     justify-content: center;
//     column-gap: ${theme.spacings.xxsmall};

//     span:nth-of-type(2) {
//       transform: rotateY(180deg);
//     }
//   `}
// `;
