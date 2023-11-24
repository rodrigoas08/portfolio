import styled, { css } from 'styled-components';

export const Wrapper = styled.section.attrs({ id: 'habilidades' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    padding: 15rem 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    row-gap: ${theme.spacings.large};

    @media (max-width: ${theme.breakpoints.ipad}) {
      ${SkillsContent} {
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(3, 1fr);
      }

      ${Subtitle} {
        text-align: center;
        font-size: ${theme.font.sizes.small};
        padding-inline: ${theme.spacings.medium};
      }
    } ;
  `}
`;

export const SkillsContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.thin};
    font-size: ${theme.font.sizes.xlarge};
    text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};
  `}
`;
