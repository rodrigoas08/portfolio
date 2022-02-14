import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: auto;
    padding: 2rem 10rem 0 10rem;
    color: ${theme.colors.lightGray};
    font-family: "Inter", sans-serif;
  `}
`;
