import styled, { css } from "styled-components";

export const Wrapper = styled.div`
${({theme}) => css`
    position: fixed;
    top: 0rem;
    width: 30rem;
    right: 0rem;
    height: 60rem;
    background-color: ${theme.colors.white};
    border: 1px solid red;
    z-index: 2;
    color: black;
`}
`