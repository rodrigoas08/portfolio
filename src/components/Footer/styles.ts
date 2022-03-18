import styled, { css } from 'styled-components';

export const Footer = styled.div`
  ${({ theme }) => css`
    height: 8rem;
    bottom: 0rem;
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    justify-content: space-between;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};
  `}
`;

export const Paragraph = styled.p``;

export const SocialText = styled.p``;

export const IconsWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
