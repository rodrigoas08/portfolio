import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';

export const AboutMe = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Quem sou...</S.Title>
        <S.Section>
          <S.Image
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
          <S.Paragraph>
            Eu sou Rodrigo, natural do Rio de Janeiro, Brasil. <br />
            Solteiro, tenho um filho de 4 anos que é a coisa mais linda do
            mundo.
            <br />
            Gosto de praia, futebol, games fps, surfar, jiu-jitsu, e ultimamente
            meu hobbie principal esta sendo aprender a codar, estou há 5 meses
            como estagiário desenvolvedor front-end na Usabit, uma Software
            House fantástica e posso garantir que está sendo uma experiência
            incrível e meu objetivo é me tornar um desenvolvedor qualificado
            capaz de tonar a experiência do usuário a melhor possível.
          </S.Paragraph>
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
};

export default AboutMe;
AOS.init();
AOS.refresh();
