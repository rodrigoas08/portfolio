import styled, { css } from 'styled-components';
import { IconProps } from '.';

export const Wrapper = styled.div<IconProps>`
  ${({ theme, isShaded }) => css`
    ${isShaded &&
    css`
      filter: drop-shadow(0rem 0rem 0.1rem ${theme.colors.primary});
    `}
  `}
`;

export const Icon = styled.div<IconProps>`
  ${({ theme, size, isHover }) => css`
    min-width: 5rem;
    min-height: 5rem;
    display: flex;
    align-items: center;
    border-radius: 35%;
    justify-content: center;
    background-color: ${theme.colors.background};
    clip-path: polygon(
      25% 0%,
      75% 0%,
      100% 25%,
      100% 75%,
      75% 100%,
      75% 75%,
      75% 100%,
      25% 100%,
      0% 75%,
      0% 25%
    );

    svg {
      padding: 1rem;
      width: ${size}rem;
      height: ${size}rem;
      fill: url('#gradient');
      transition: 0.2s linear;
      filter: drop-shadow(0 0.3rem 0.2rem ${theme.colors.black});

      :hover {
        transform: ${isHover ? 'scale(1.1)' : 'scale(1)'};
      }
    }
  `}
`;
