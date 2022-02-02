import styled, { css } from "styled-components";

export const Container = styled.button`
  ${({ theme }) => css`
    width: 20rem;
    height: 50px;
    border-style: none;
    border-radius: .5rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};

    :hover {
      background-color: ${theme.colors.black};
    }
  `}
`;
