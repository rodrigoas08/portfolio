import styled from 'styled-components';
import theme from 'styles/theme';

export const Wrapper = styled.main`
  padding-inline: 10rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-inline: ${theme.spacings.small};
  }

  @media (max-width: ${theme.breakpoints.ipad}) {
    padding-inline: ${theme.spacings.xxsmall};
  }
`;
