import Card from './Card';
import * as S from './styles';
import { CardList } from './mock';
import { Title } from 'components';

const Portfolio = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Title text="Portfólio" />
        <S.SubTitle>
          Aqui você vai encontrar alguns trabalhos feitos por mim.
        </S.SubTitle>
        <S.Section>
          {CardList.map((card, index) => {
            return (
              <Card
                key={index}
                link={card.link}
                repository={card.repository}
                background={card.background}
                title={card.projectName.toUpperCase()}
              />
            );
          })}
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
};

export default Portfolio;
