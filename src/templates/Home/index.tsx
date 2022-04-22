import * as S from './styles';
import { Works, AboutMe } from 'templates';
import { Link } from 'react-scroll';
import { HtmlIcon, CssIcon, JSIcon, ReactIcon, TSIcon } from 'components/Icons';

const Home = () => {
  return (
    <>
      <S.Wrapper>
        <S.Section>
          <S.Title>
            Rodrigo Sobral<span>.</span>
          </S.Title>
          <S.Subtitle>
            Técnico em informática | estagiário desenvolvedor front-end
          </S.Subtitle>
          <S.DivIcons>
            <HtmlIcon />
            <CssIcon />
            <JSIcon />
            <ReactIcon />
            <TSIcon />
          </S.DivIcons>
        </S.Section>
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={0}
          duration={2000}
        >
          Avançar
          <S.Arrow src={process.env.PUBLIC_URL + '/img/seta.svg'} />
        </Link>
      </S.Wrapper>
      <AboutMe />
      <Works />
    </>
  );
};

export default Home;
