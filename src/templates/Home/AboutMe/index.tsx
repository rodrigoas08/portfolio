import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';
import { Title } from 'components';
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
        <S.Image
          data-aos="flip-up"
          data-aos-offset="2"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        />
        <S.Section>
          <S.Article
            data-aos="zoom-in"
            data-aos-offset="2"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <S.TitleCard>sobre</S.TitleCard>
            <p>
              Comecei como estagiário desenvolvedor front-end em novembro de
              2021 na{' '}
              <a onClick={() => openLinkInNewTab('https://www.usabit.com.br')}>
                <S.Span>Usabit</S.Span>
              </a>
              . Estou focado em aprender as tecnologias mais usadas no mercado
              para poder desenvolver sistemas web com alta performance,
              responsivos e SEO. Atualmente estou buscando conhecimento em
              vue.js e depois react native para construir aplicações mobile.
            </p>
          </S.Article>
          <S.Article
            data-aos="zoom-in"
            data-aos-offset="2"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <S.TitleCard>experiência</S.TitleCard>
            <ul>
              <li>
                2010-2011 - Analista Auxiliar Industrial <br />
                <S.Span>Rio de Janeiro Refrescos (Coca-Cola)</S.Span>
              </li>
              <li>
                2012-2020 - Analista de Suporte Técnico N2
                <br />
                <S.Span>Sonda IT</S.Span>
              </li>
              <li>
                2021 - Desenvolvedor frontend <br />
                <S.Span>Usabit</S.Span>
              </li>
            </ul>
          </S.Article>
          <S.Article
            data-aos="zoom-in"
            data-aos-offset="2"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <S.TitleCard>habilidades</S.TitleCard>
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
          </S.Article>
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
};

export default AboutMe;
AOS.init();
AOS.refresh();
