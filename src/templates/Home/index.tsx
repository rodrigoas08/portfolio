import * as S from './styles';
import { Works, AboutMe, Contact } from 'templates';
import { GitHublIcon, LinkedInIcon } from 'components/Icons';

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
        <S.NavIcons>
          <a
            href="https://github.com/rodrigoas08"
            target="blank"
            rel="noopener noreferrer"
          >
            <GitHublIcon text="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-sobral-302012aa/"
            target="blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon text="LinkedIn" />
          </a>
        </S.NavIcons>
      </S.Wrapper>
      <AboutMe />
      <Works />
      <Contact />
    </>
  );
};
export default Home;
