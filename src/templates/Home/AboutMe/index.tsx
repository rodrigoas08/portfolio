import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';
import { calculateYear, openInNewTab } from 'utils/functions';
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
        <S.Title>Quem sou...</S.Title>
        <S.Section>
          <S.Image
            data-aos="flip-up"
            data-aos-offset="2"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
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
              Desenvolvedor front-end desde novembro de 2021 na{' '}
              <a onClick={() => openInNewTab('https://www.usabit.com.br')}>
                <S.Span>Usabit</S.Span>
              </a>
              . Estou focado em aprender as tecnologias mais usadas no mercado
              para desenvolver sistemas web modernos, com alta performance,
              responsivas e SEO. <br />
              Atualmente estou buscando aprender vue.js e depois começar a
              estudar react native para construir aplicações mobile.
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
                1 ano - Analista Aux. Industrial <br />
                <S.Span>Rio de Janeiro Refrescos (Coca-Cola)</S.Span>
              </li>
              <li>
                7 anos e 8 meses - Analista de Suporte
                <br />
                <S.Span>Sonda IT</S.Span>
              </li>
              <li>
                {calculateYear(11, 2021)} - Desenvolvedor frontend <br />
                <S.Span>Usabit</S.Span>
              </li>
            </ul>
          </S.Article>
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
};

export default AboutMe;
AOS.init();
AOS.refresh();
