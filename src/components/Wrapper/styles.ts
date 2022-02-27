import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: 0 10rem;
    color: ${theme.colors.white};
  `}
`;
