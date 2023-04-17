import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';
import { Title } from 'components';
import EuPedro from 'img/euPedro.jpg';
import { openLinkInNewTab } from 'utils/functions';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';
import {
  HtmlIcon,
  CssIcon,
  JSIcon,
  ReactIcon,
  TSIcon,
  GitIcon,
  VueIcon,
  VSCodeIcon,
  NpmIcon,
  VuetifyIcon
} from 'components/Icons';
import ProfileCard from './ProfileCard';

const AboutMe = () => {
  const ProfilecardIcons = [
    <FaGithub
      onClick={() => openLinkInNewTab('https://github.com/rodrigoas08')}
      size={20}
      cursor="pointer"
      title="Github"
    />,
    <FaLinkedin
      onClick={() =>
        openLinkInNewTab('https://www.linkedin.com/in/rodrigo-sobral-302012aa/')
      }
      size={20}
      cursor="pointer"
      title="LinkedIn"
    />,
    <FaInstagram
      onClick={() =>
        openLinkInNewTab('https://www.instagram.com/orodrigosobral/')
      }
      size={20}
      cursor="pointer"
      title="Instagram"
    />,
    <FaWhatsapp
      onClick={() =>
        openLinkInNewTab('https://api.whatsapp.com/send?phone=5521985141580')
      }
      size={20}
      cursor="pointer"
      title="Whatsapp"
    />
  ];

  return (
    <S.Wrapper>
      <Title text="Sobre mim" />
      <S.Section>
        <ProfileCard
          name="Rodrigo Sobral"
          githubName="@rodrigoas08"
          localization="Rio de janeiro, Brasil"
          occupation="Desenvolvedor Front-end"
          skills="HTML | CSS | JavaScript | ReactJs | Typescript | Styled Components"
          image={EuPedro}
          icons={ProfilecardIcons}
        />
        <S.AboutText
          data-aos="fade-left"
          data-aos-offset="2"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <S.Text>
            Meu nome é Rodrigo Sobral, sou natural do Rio de janeiro. Em
            dezembro de 2021 saí da área de help-desk e começei a estudar
            programação e atualmente sou desenvolvedor front-end na
            <a onClick={() => openLinkInNewTab('https://www.usabit.com.br')}>
              <S.Span> Usabit</S.Span>
            </a>{' '}
            e estou cursando Análise e Desenvolvimento de Sistema.
            <br />
            <br />
            Gosto de trabalhar em equipe mas tem momentos que também gosto de
            trabalhar sozinho e as vezes de madrugada, sou proativo e bem
            comunicativo. <br />
            Venho me atualizando, me aprimorando para desenvolver sistemas web
            aplicando técnicas SEO (Search Engine Optimization), tudo isso
            visando sites responsivos, alta performance e boa acessibilidade
            web. As tecnologias que tenho um conhecimento mais sólido para
            criação de sites é React.js, Typescript e Styled Component. Hoje
            venho me aventurando no mundo do Vue.js e busco aprender outras
            tecnologias para ampliar meus conhecimentos.
            <br />
            <br />
            Além de trabalhar hoje com programação eu também faço montagem de
            computador, faço uma consultoria para ajudar pessoas a escolherem as
            melhores peças para cada tipo de uso.
          </S.Text>
        </S.AboutText>
        <S.SkillsCard>
          <S.Div>
            <HtmlIcon />
            <CssIcon />
            <JSIcon />
            <ReactIcon />
            <TSIcon />
            <VueIcon />
            <VuetifyIcon />
            <VSCodeIcon />
            <GitIcon />
            <NpmIcon />
          </S.Div>
        </S.SkillsCard>
      </S.Section>
    </S.Wrapper>
  );
};

export default AboutMe;
AOS.init();
AOS.refresh();
