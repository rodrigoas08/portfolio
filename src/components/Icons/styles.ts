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

    ${sideText &&
    css`
      width: 15rem;
      cursor: pointer;
      flex-direction: row;
      padding: 0 ${theme.spacings.small};
      border-radius: ${theme.border.radius};
      font-size: ${theme.font.sizes.medium};
      background-color: rgba(255, 255, 255, 0.1);
      border-top: 0.1rem solid ${theme.colors.primary};
    `}

    > p {
      padding: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;
