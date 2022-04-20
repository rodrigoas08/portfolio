import * as S from './styles';
import { ServiceList } from './mock';

export const Works = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Principais Serviços</S.Title>
        <S.Section>
          {ServiceList.map((item, index) => {
            return (
              <S.Card>
                {index + 1} - {item.description}
              </S.Card>
            );
          })}
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
};

export default Works;
