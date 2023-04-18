import * as S from './styles';
import { Portfolio, AboutMe, Contact, Skills } from 'templates';
import { GitHubIcon, LinkedInIcon } from 'components/Icons';
import { openLinkInNewTab } from 'utils/functions';

const Home = () => {
  return (
    <>
      <S.Wrapper>
        <S.WrapperText>
          <S.Name>Rodrigo Sobral</S.Name>
          <S.CarrerName>desenvolvedor front-end.</S.CarrerName>
        </S.WrapperText>
        <S.NavIcons>
          <GitHubIcon
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
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};
export default Home;
