import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';
import { Card, Title } from 'components';
import { CardList } from './mock';

export const Works = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Title text="Serviços" />
        <S.Section>
          {CardList.map((item, index) => {
            return <Card key={index}>{item.description.toUpperCase()}</Card>;
          })}
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
};

export default Works;
AOS.init();
AOS.refresh();
