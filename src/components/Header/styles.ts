import styled, { css } from "styled-components";

// type LogoProps = {
//   photo: string;
// };

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100vw;
    height: auto;
    justify-content: center;
    border-bottom: 3px solid;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
    border-image: linear-gradient(to left, ${theme.colors.secondary} 90%, white)
      1;
  `}
`;
