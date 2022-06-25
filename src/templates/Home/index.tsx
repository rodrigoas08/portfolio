import * as S from './styles';
import { Works, AboutMe, Contact } from 'templates';

const Home = () => {
  return (
    <>
      <S.Wrapper>
        <S.Title>
          <span>{'<'}</span>Rodrigo Sobral<span>{'/>'}</span>
        </S.Title>
        <S.Subtitle>
          Técnico em informática | Estagiário desenvolvedor front-end
        </S.Subtitle>
      </S.Wrapper>
      <AboutMe />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
