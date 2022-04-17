import * as S from './styles';
import { ServiceList } from './mock';

export const Works = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Principais Serviços</S.Title>
        <S.Ul>
          {ServiceList.map((item, index) => {
            return <li key={index}>{item.description}</li>;
          })}
        </S.Ul>
      </S.Container>
    </S.Wrapper>
  );
};

export default Works;
