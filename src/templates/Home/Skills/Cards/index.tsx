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

    @media (max-width: ${theme.breakpoints.mobile}) {
      padding-inline: ${theme.spacings.medium};
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
    border: 0.1rem solid transparent;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.black};

    :after {
      content: '';
      bottom: 0;
      left: 0rem;
      width: 100%;
      height: 0.1rem;
      position: absolute;
      background-image: linear-gradient(
        to right,
        ${theme.colors.black},
        ${theme.colors.primary},
        ${theme.colors.secondary},
        ${theme.colors.primary},
        ${theme.colors.black}
      );
    }

    :before {
      content: '';
      top: 0;
      left: 0rem;
      width: 100%;
      height: 0.1rem;
      position: absolute;
      border-radius: 0.5rem;
      background-image: linear-gradient(
        to right,
        ${theme.colors.black},
        ${theme.colors.primary},
        ${theme.colors.secondary},
        ${theme.colors.primary},
        ${theme.colors.black}
      );
    }

    svg {
      filter: drop-shadow(0 0.4rem 0.2rem ${theme.colors.black});
    }

    h3,
    strong {
      text-transform: capitalize;
      font-weight: ${theme.font.medium};
      font-size: ${theme.font.sizes.small};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    p {
      line-height: 130%;
      font-weight: ${theme.font.light};
      font-size: ${theme.font.sizes.small};
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      width: 100%;
    }
  `}
`;

const SkillCard = () => {
  return (
    <Wrapper>
      {ListSkillCards.sort(() => Math.random() - 0.5).map((item) => {
        return (
          <Card
            key={crypto.randomUUID()}
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            {item.icon}
            <h3>
              <strong>{item.title}</strong>
            </h3>
            <p>{item.description}</p>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export default SkillCard;
