import styled, { css } from "styled-components";

type LogoProps = {
  photo: string;
};

export const Wrapper = styled.div`
  ${({ theme }) => css`
    opacity: 60%;
    display: flex;
    height: 100px;
    border-bottom: 3px solid;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small} ${theme.spacings.xxsmall};
    border-image: linear-gradient(to left, ${theme.colors.secondary} 90%, white)
      1;
  `}
`;

export const Logo = styled.div<LogoProps>`
  ${({ photo }) => css`
    background-image: url(${photo});
  `}
`;
