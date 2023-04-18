import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'habilidades' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    padding: 9rem 0;
    align-items: center;
    row-gap: 4rem;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.ipad}) {
      ${Div} {
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(3, 1fr);
      }
    } ;
  `}
`;

export const SkillsCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  grid-area: skills;
  justify-content: center;
`;

export const Div = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: end;
    justify-content: center;
    row-gap: ${theme.spacings.medium};
    column-gap: ${theme.spacings.small};
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);

    div svg {
      opacity: 0.4;
    }

    div:hover svg {
      opacity: 1;
      transform: scale(1.1);
    }
  `}
`;
