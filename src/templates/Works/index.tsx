import * as S from './styles';
import { ServiceList } from './mock';

export const Works = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Principais Serviços</S.Title>
        <ul>
          {ServiceList.map((item, index) => {
            return <li key={index}>{item.description}</li>;
          })}
        </ul>
      </S.Container>
    </S.Wrapper>
  );
};

export default Works;
