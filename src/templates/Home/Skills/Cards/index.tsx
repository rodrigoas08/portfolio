import styled, { css } from 'styled-components';
import { ListSkillCards } from 'interfaces/skillCard';

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: end;
    justify-content: center;
    row-gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};
    column-gap: ${theme.spacings.small};
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: ${theme.breakpoints.desktop}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      grid-template-columns: 1fr;
    }
  `}
`;

const Card = styled.div`
  ${({ theme }) => css`
    width: 25rem;
    height: 25rem;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.grayIce};

    svg {
      filter: drop-shadow(0 0.4rem 0.2rem ${theme.colors.black});
    }

    :hover {
      transform: scale(1.1);
      border: 0.1rem solid ${theme.colors.primary};
    }

    h2 {
      text-transform: capitalize;
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.xxsmall};
      text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};
    }

    p {
      line-height: 130%;
      font-size: ${theme.font.sizes.small};
      text-shadow: 0 0.2rem 0.2rem ${theme.colors.black};
    }
  `}
`;

const SkillCard = () => {
  return (
    <Wrapper>
      {ListSkillCards.map((item, index) => {
        return (
          <Card
            data-aos="zoom-in"
            data-aos-offset="2"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            key={index}
          >
            {item.icon}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export default SkillCard;
