import * as S from './styles';
import { Works, AboutMe, Contact } from 'templates';
import { HtmlIcon, CssIcon, JSIcon, ReactIcon, TSIcon } from 'components/Icons';

const Home = () => {
  return (
    <>
      <S.Wrapper>
        <S.Section>
          <S.Title>
            <span>{'<'}</span>Rodrigo Sobral<span>{'/>'}</span>
          </S.Title>
          <S.Subtitle>
            Técnico em informática | Estagiário desenvolvedor front-end
          </S.Subtitle>
          <S.DivIcons>
            <HtmlIcon />
            <CssIcon />
            <JSIcon />
            <ReactIcon />
            <TSIcon />
          </S.DivIcons>
        </S.Section>
      </S.Wrapper>
      <AboutMe />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
