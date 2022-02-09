import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    /* display: flex;
    align-items: center;
    flex-direction: column; */
    color: ${theme.colors.lightGray};
    font-family: "Inter", sans-serif;
  `}
`;
