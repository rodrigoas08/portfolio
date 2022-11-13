import * as S from './styles';
import { Works, AboutMe, Contact } from 'templates';
import { GitHublIcon, LinkedInIcon } from 'components/Icons';

const Home = () => {
  function openInNewTab(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return (
    <>
      <S.Wrapper>
        <S.WrapperText>
          <S.Welcome>seja bem-vindo(a),</S.Welcome>
          <S.Text>eu sou</S.Text>
          <S.Name>Rodrigo Sobral</S.Name>
          <S.Text>desenvolvedor front end.</S.Text>
        </S.WrapperText>
        {/* <CodingImage /> */}
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
