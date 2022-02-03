import styled, { css } from "styled-components";

type LogoProps = {
  photo: string;
};

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100px;
    border-bottom: 3px solid;
    justify-content: space-between;
    padding: ${theme.spacings.small} ${theme.spacings.xxsmall};
    background-image: linear-gradient(
      120deg,
      #a1c4fd 0%,
      ${theme.colors.primary} 100%
    );
    border-image: linear-gradient(to left, ${theme.colors.secondary} 90%, white)
      1;
  `}
`;

export const Logo = styled.div<LogoProps>`
  ${({ photo }) => css`
    background-image: url(${photo});
  `}
`;
