import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';

export const Card = styled.div`
  ${({ theme }) => css`
    width: 25%;
    display: flex;
    flex-wrap: wrap;
    min-height: 15rem;
    break-inside: auto;
    align-items: center;
    word-wrap: break-word;
    justify-content: center;
    color: ${theme.colors.white};
    backdrop-filter: blur(1.5rem);
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    background-color: rgba(255, 255, 255, 0.1);
    border-top: 0.1rem solid ${theme.colors.primary};

    /* :nth-child(2n) {
    align-self: end;
    justify-content: start;
  } */

    ${ButtonStyles.Wrapper} {
      width: 10rem;
      font-size: 1rem;
      letter-spacing: 0.1rem;
      align-self: flex-end;
      color: white;
    }
  `}
`;

export const Cardtext = styled.p`
  color: white;
  text-align: center;
`;
