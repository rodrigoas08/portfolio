import * as S from './styles';
import { Works, AboutMe, Contact } from 'templates';
import { GitHublIcon, LinkedInIcon, CodingImage } from 'components/Icons';

const Home = () => {
  function openInNewTab(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <S.Wrapper>
        <S.Title>
          <span>{'<'}</span>Rodrigo Sobral<span>{'/>'}</span>
        </S.Title>
        <S.Subtitle>
          Técnico em informática | Estagiário desenvolvedor front-end
        </S.Subtitle>
        <CodingImage />
        <S.NavIcons>
          <GitHublIcon
            text="GitHub"
            handleClick={() => openInNewTab('https://github.com/rodrigoas08')}
          />
          <LinkedInIcon
            text="LinkedIn"
            handleClick={() =>
              openInNewTab(
                'https://www.linkedin.com/in/rodrigo-sobral-302012aa/'
              )
            }
          />
        </S.NavIcons>
      </S.Wrapper>
      <AboutMe />
      <Works />
      <Contact />
    </>
  );
};
export default Home;
