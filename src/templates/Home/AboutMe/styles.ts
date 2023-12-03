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
        align-items: center;
        justify-content: center;
        gap: ${theme.spacings.medium};
      }

      ${Text} {
        text-align: center;
      }
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      padding-inline: 2.4rem;

      ${AboutImage} {
        margin: 0;
      }

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
  ${({ theme }) => css`
    float: left;
    width: 30rem;
    height: 30rem;
    border-radius: 1rem;
    box-shadow: 0.3rem 0.4rem 0.9rem rgba(0, 0, 0, 0.9);
    margin: 0 ${theme.spacings.small} ${theme.spacings.small} 0;
    background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.6)),
      url(${EuPedro});
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    letter-spacing: 0.1rem;
    font-size: ${theme.font.sizes.xlarge};
    text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};

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

export const WrapperCertificates = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CertificatesText = styled(Text)`
  ${({ theme }) => css`
    letter-spacing: normal;
    font-weight: ${theme.font.medium};
    padding-top: ${theme.spacings.medium};
  `}
`;
