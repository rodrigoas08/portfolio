import { memo } from 'react';
import styled, { css } from 'styled-components';

const H1 = styled.h1`
  ${({ theme }) => css`
    z-index: 1;
    font-size: 3rem;
    position: relative;
    font-family: 'Gotham';
    text-transform: uppercase;

    :before {
      content: '';
      top: 50%;
      left: 50%;
      width: 110%;
      z-index: -1;
      height: 100%;
      opacity: 0.5;
      position: absolute;
      border-radius: 1rem 4rem;
      transform: translate(-50%, -50%);
      background-color: ${theme.colors.primary};
    }
  `}
`;

type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  return <H1>{text}</H1>;
};
export default memo(Title);
