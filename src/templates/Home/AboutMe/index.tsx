import * as S from './styles';
import { Title } from 'components';
import { openLinkInNewTab } from 'utils/functions';
import Carousel from './Swiper';

const AboutMe = () => {
  return (
    <S.Wrapper>
      <Title text="Sobre mim" />
      <S.Content
        data-aos="fade-up"
        data-aos-offset="2"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <S.AboutImage />
        <S.Text>
          Olá, me chamo Rodrigo, sou papai do Pedro e moro no Rio de Janeiro.{' '}
          <br />
          Minha jornada começou como estagiário na{' '}
          <a
            href="#"
            aria-label="Abre uma nova aba direcionando para o site da Usabit"
            onClick={() => openLinkInNewTab('https://www.usabit.com.br')}
          >
            Usabit
          </a>{' '}
          em novembro de 2021, onde mergulhei de cabeça no mundo da{' '}
          <strong>programação</strong> e me tornei{' '}
          <strong>desenvolvedor front-end</strong> e hoje sou apaixonado pelo
          que faço, desenvolvendo aplicações com interfaces atraentes,
          priorizando performance, acessibilidade, responsividade e a semântica
          do código.
        </S.Text>
        <Carousel />
      </S.Content>
    </S.Wrapper>
  );
};

export default AboutMe;
