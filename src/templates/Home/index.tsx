import * as S from './styles';
import { Portfolio, AboutMe, Contact } from 'templates';
import { GitHublIcon, LinkedInIcon } from 'components/Icons';
import { openLinkInNewTab } from 'utils/functions';

const Home = () => {
  return (
    <>
      <S.Wrapper>
        <S.WrapperText>
          <S.Welcome>Seja bem-vindo(a), eu sou</S.Welcome>
          <S.Name>Rodrigo Sobral</S.Name>
          <S.Text>desenvolvedor front end.</S.Text>
        </S.WrapperText>
        <S.NavIcons>
          <GitHublIcon
            text="GitHub"
            handleClick={() =>
              openLinkInNewTab('https://github.com/rodrigoas08')
            }
          />
          <LinkedInIcon
            text="LinkedIn"
            handleClick={() =>
              openLinkInNewTab(
                'https://www.linkedin.com/in/rodrigo-sobral-302012aa/'
              )
            }
          />
        </S.NavIcons>
      </S.Wrapper>
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  );
};
export default Home;
