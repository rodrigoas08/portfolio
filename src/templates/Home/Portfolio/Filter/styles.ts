import styled, { css } from 'styled-components';
import { IFilterProps } from '.';

export const Button = styled.button<Pick<IFilterProps, 'active'>>`
  ${({ active }) => css`
    background: #00aace;
    padding: 10px;
    cursor: pointer;

    ${active &&
    css`
      background: red;
    `}
  `}
`;
