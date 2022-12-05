import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';
import { Card, Title } from 'components';
import { CardList } from './mock';

export const Portfolio = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Title text="Portfólio" />
        <S.Section>
          {CardList.map((card, index) => {
            return (
              <Card key={index} title={`${card.description.toUpperCase()}`} />
            );
          })}
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
};

export default Portfolio;
AOS.init();
AOS.refresh();
