import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';
import { Title } from 'components';
import EuPedro from 'img/euPedro.jpg';
import { openLinkInNewTab } from 'utils/functions';
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

const AboutMe = () => {
  return (
    <S.Wrapper>
      <Title text="Quem sou..." />
      <S.Section>
        <S.AboutCard>
          <S.TopInfo>
            <S.Image
              data-aos="flip-left"
              data-aos-offset="2"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              loading="lazy"
              src={EuPedro}
              alt="Eu segurando meu filho na praia"
            />

            <h1>Rodrigo Sobral</h1>
            <p>@rodrigoas08</p>
            <p>Rio de janeiro, Brazil</p>
            <S.DivIcons>
              <HtmlIcon text="HTML" />
              <CssIcon text="CSS" />
              <JSIcon text="JS" />
            </S.DivIcons>
          </S.TopInfo>
        </S.AboutCard>
        <div
          style={{
            background: 'pink',
            gridArea: 'aboutText',
            width: '100%',
            height: '100%'
          }}
        >
          <p>
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
          </p>
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
          <S.DivIcons>
            <HtmlIcon text="HTML" />
            <CssIcon text="CSS" />
            <JSIcon text="JS" />
            <ReactIcon text="React.js" />
            <TSIcon text="TS" />
            <GitIcon text="Git" />
            <VSCodeIcon text="Vscode" />
            <VueIcon text="Vue.js" />
          </S.DivIcons>
        </div>
      </S.Section>
    </S.Wrapper>
  );
};

export default AboutMe;
AOS.init();
AOS.refresh();
