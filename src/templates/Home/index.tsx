import * as S from './styles';
import { Works } from 'templates';
import { Division } from 'components'

const Home = () => {
  return (
    <>
      <S.Wrapper>
        <S.Section>
          <S.Title>Rodrigo Sobral</S.Title>
          <S.Subtitle>
            Técnico em informática | estagiário desenvolvedor front-end
          </S.Subtitle>
        </S.Section>
        <a href="#servicos">
          Avançar
          <S.Arrow src={process.env.PUBLIC_URL + '/img/seta.svg'} />
        </a>
      </S.Wrapper>
      <Division />
      <Works />
    </>
  );
};

export default Home;
