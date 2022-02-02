import styled, { css } from "styled-components";

type LogoProps = {
  photo: string;
};

export const Wrapper = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  background-image: linear-gradient(to left, #3178c6, white);
  padding: ${({ theme }) => theme.spacings.xxsmall};
    ${({ theme }) => theme.spacings.small};
`

export const Logo = styled.div<LogoProps>`
  ${({ photo }) => css`
    box-sizing: border-box;
    background-image: url(${photo});
  `}
`;
