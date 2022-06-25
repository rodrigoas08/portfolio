import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      padding: 1rem;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;
