import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';

export const Card = styled.div`
  ${({ theme }) => css`
    width: 25%;
    gap: 1rem;
    display: flex;
    min-height: 15rem;
    break-inside: auto;
    align-items: center;
    flex-direction: column;
    color: ${theme.colors.white};
    backdrop-filter: blur(1.5rem);
    justify-content: space-between;
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    background-color: rgba(255, 255, 255, 0.1);
    border-top: 0.1rem solid ${theme.colors.primary};

    ${ButtonStyles.Wrapper} {
      width: 10rem;
      letter-spacing: 0.1rem;
      font-size: ${theme.font.sizes.xxsmall};

      :hover{
        opacity: 0.8;
      }
    }
  `}
`;

export const Cardtext = styled.p`
  text-align: center;
`;
