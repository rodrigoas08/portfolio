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
  VSCodeIcon
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
      <Title text="Quem sou..." />
      <S.Section>
        <ProfileCard
          name="Rodrigo Sobral"
          githubName="@rodrigoas08"
          localization="Rio de janeiro, Brasil"
          occupation="Desenvolvedor Front end"
          skills="HTML | CSS | JavaScript | ReactJs | Typescript | Styled Components"
          image={EuPedro}
          icons={ProfilecardIcons}
        />
        <div
          style={{
            background: 'pink',
            gridArea: 'aboutText',
            width: '100%',
            height: '100%'
          }}
        >
          {/* <p>
            Então, ai nesta foto está eu e minha razão de viver, meu filho.
            <br />
            Sou uma pessoa comunicativa, proativa, tenho bom relacionamento
            interpessoal. Tenho bastante conhecimento na área de tecnologia
            voltado para área de Suporte Técnico (Help-Desk), atuei por 8 anos
            nessa área e recentemente estou migrando para área de programação
            como desenvolvedor front end e venho me aprimorando, me atualizando
            para desenvolver sistemas web com alta performance, boa
            acessibilidade, responsivos e também aplicando SEO.
            <br />
            Atualmente atuo na{' '}
            <a onClick={() => openLinkInNewTab('https://www.usabit.com.br')}>
              <S.Span>Usabit</S.Span>
            </a>{' '}
            como desenvolvedor front end e estou me formando em Análise e
            Desenvolvimento de Sistema. <br />
            Abaixo mostro um pouco de algumas habilidades que venho adquirindo
            como desenvolvedor front end.
          </p> */}
        </div>
        <div
          style={{
            background: 'tomato',
            gridArea: 'skills',
            width: '100%',
            height: '100%'
          }}
        >
          <S.TitleCard>Habilidades</S.TitleCard>
          <S.Div>
            <HtmlIcon text="HTML" />
            <CssIcon text="CSS" />
            <JSIcon text="JS" />
            <ReactIcon text="React.js" />
            <TSIcon text="TS" />
            <GitIcon text="Git" />
            <VSCodeIcon text="Vscode" />
            <VueIcon text="Vue.js" />
          </S.Div>
        </div>
      </S.Section>
    </S.Wrapper>
  );
};

export default AboutMe;
AOS.init();
AOS.refresh();
