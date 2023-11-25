import { memo } from 'react';
import styled, { css } from 'styled-components';

const H2 = styled.h2`
  ${({ theme }) => css`
    z-index: 1;
    cursor: default;
    font-size: 3rem;
    position: relative;
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    text-shadow: 0 0.2rem 0.2rem ${theme.colors.black};

    :before {
      content: '';
      top: 50%;
      left: 50%;
      width: 110%;
      z-index: -1;
      height: 10%;
      position: absolute;
      border-radius: 50rem;
      transform: translate(-50%, -50%);
      background-image: linear-gradient(
        to right,
        ${theme.colors.black},
        ${theme.colors.primary},
        ${theme.colors.secondary},
        ${theme.colors.primary},
        ${theme.colors.black}
      );
    }
  `}
`;

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <H2>{text}</H2>;
};
export default memo(Title);
