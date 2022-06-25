import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';
import { HtmlIcon, CssIcon, JSIcon, ReactIcon, TSIcon } from 'components/Icons';

export const AboutMe = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Quem sou...</S.Title>
        <S.Section>
          <S.Image
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-delay="10"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
          <S.Paragraph>
            Oi! Me chamo Rodrigo, sou um carioca apaixonado por praia, carnaval,
            futebol e também por tecnologia. <br />
            Trabalho com TI desde 2012, iniciei na área de Suporte Técnico em
            Informática e no final de 2021 finalmente migrei pra área de
            Programação graças ao meu irmão.
            <br />
            Atualmente sou estagiário de front-end na Usabit, uma Software House
            fantástica e posso garantir que está sendo uma experiência incrível,
            pois estou tendo oportunidade de fazer cursos para aprender e
            aperfeiçoar minhas habilidades e aplicar em alguns projetos dentro
            da empresa.
          </S.Paragraph>
          <S.Habilities>Algumas das tecnologias usadas:</S.Habilities>
          <S.DivIcons>
            <HtmlIcon text="HTML 5" />
            <CssIcon text="CSS 3" />
            <JSIcon text="Javascript" />
            <ReactIcon text="ReactJS" />
            <TSIcon text="Typescript" />
          </S.DivIcons>
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
};

export default AboutMe;
AOS.init();
AOS.refresh();
