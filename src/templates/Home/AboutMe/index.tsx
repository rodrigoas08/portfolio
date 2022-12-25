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

export const AboutMe = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Title text="Quem sou..." />
        <S.About
          data-aos="zoom-in"
          data-aos-offset="2"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <S.Image
            src={EuPedro}
            alt="Foto minha segurando meu filho na praia"
          />
          <p>
            Então, ai nesta foto está minha razão de viver, meu filho.
            <br />
            Eu sou uma pessoa comunicativa, proativa, tenho bom relacionamento
            interpessoal. Tenho bastante conhecimento na área de tecnologia
            voltado para área de Suporte Técnico (Help-Desk), trabalhei por
            quase 8 anos nessa área e recentemente estou migrando para área de
            programação como desenvolvedor frontend. Venho me aprimorando, me
            atualizando para poder desenvolver sistemas web com alta
            performance, boa acessibilidade, responsivos e também aplicando SEO.
            Atualmente estou trabalhando na{' '}
            <a onClick={() => openLinkInNewTab('https://www.usabit.com.br')}>
              <S.Span>Usabit</S.Span>
            </a>{' '}
            como desenvolvedor estagiário e sou quase formado em Análise e
            Desenvolvimento de Sistema. <br />
            Abaixo você irá ver um pouco com o que já trabalhei e algumas
            habilidades como desenvolvedor frontend.
          </p>
        </S.About>
        <S.Section>
          <S.Card
            data-aos="fade-right"
            data-aos-offset="2"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <S.TitleCard>Experiência profissional</S.TitleCard>
            <ul>
              <li>
                2010/2011 - Analista Auxiliar Industrial <br />
                <S.Span>Rio de Janeiro Refrescos (Coca-Cola)</S.Span>
              </li>
              <li>
                2012/2020 - Analista de Suporte Técnico N2
                <br />
                <a onClick={() => openLinkInNewTab('https://www.sonda.com/pt')}>
                  <S.Span>Sonda IT</S.Span>
                </a>
              </li>
              <li>
                2021/atualmente - Desenvolvedor Front End <br />
                <a
                  onClick={() => openLinkInNewTab('https://www.usabit.com.br')}
                >
                  <S.Span>Usabit</S.Span>
                </a>
              </li>
            </ul>
          </S.Card>
          <S.Card
            data-aos="fade-left"
            data-aos-offset="2"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
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
          </S.Card>
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
};

export default AboutMe;
AOS.init();
AOS.refresh();
