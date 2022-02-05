import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: auto;
    height: auto;
    margin: 3rem auto;
    justify-content: center;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxsmall};
  `}
`;
