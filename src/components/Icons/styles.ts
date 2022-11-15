import styled, { css } from 'styled-components';

type IconProps = {
  sideText?: boolean;
};

export const Wrapper = styled.div<IconProps>`
  ${({ theme, sideText }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    column-gap: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};

    > p {
      color: ${theme.colors.text};
      padding: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }

    ${sideText &&
    css`
      width: 15rem;
      cursor: pointer;
      flex-direction: row;
      padding: 0 ${theme.spacings.small};
      font-size: ${theme.font.sizes.medium};
      border-radius: ${theme.border.radius};
      background-color: rgba(255, 255, 255, 0.1);
      border-top: 0.1rem solid ${theme.colors.primary};

      p {
        color: ${theme.colors.white};
      }
    `}
  `}
`;
