import * as S from './styles';
import { Title } from 'components';
import EuPedro from 'assets/euPedro.webp';
import { openLinkInNewTab } from 'utils/functions';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';

const AboutMe = () => {
  const ProfilecardIcons = [
    <FaGithub
      onClick={() => openLinkInNewTab('https://github.com/rodrigoas08')}
      size={25}
      cursor="pointer"
      title="Github"
      key={crypto.randomUUID()}
    />,
    <FaLinkedin
      onClick={() =>
        openLinkInNewTab('https://www.linkedin.com/in/rodrigo-sobral-302012aa/')
      }
      size={25}
      cursor="pointer"
      title="LinkedIn"
      key={crypto.randomUUID()}
    />,
    <FaInstagram
      onClick={() =>
        openLinkInNewTab('https://www.instagram.com/orodrigosobral/')
      }
      size={25}
      cursor="pointer"
      title="Instagram"
      key={crypto.randomUUID()}
    />,
    <FaWhatsapp
      onClick={() =>
        openLinkInNewTab('https://api.whatsapp.com/send?phone=5521985141580')
      }
      size={25}
      cursor="pointer"
      title="Whatsapp"
      key={crypto.randomUUID()}
    />
  ];

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
        <S.Image
          loading="lazy"
          src={EuPedro}
          alt="Eu segurando meu filho na praia"
        />
        <S.Text>
          Olá, meu nome é Rodrigo e sou do Rio de Janeiro. <br />
          Minha jornada começou como estagiário na{' '}
          <a
            href="#"
            aria-label="Abre uma nova aba direcionando para o site da Usabit"
            onClick={() => openLinkInNewTab('https://www.usabit.com.br')}
          >
            Usabit
          </a>
          , onde mergulhei de cabeça no mundo da <strong>programação</strong> e
          hoje sou <strong>desenvolvedor front-end</strong>.
          <br />
          <br />
          Possuo domínio sólido em <strong>HTML</strong>, <strong>CSS</strong> e{' '}
          <strong>JavaScript</strong>, enriquecido com{' '}
          <strong>TypeScript</strong> e incluindo poderosos frameworks como{' '}
          <strong>React</strong> e <strong>Vue.js</strong>. Meu comprometimento
          é em entregar soluções de alta qualidade, com interfaces modernas,
          responsivas e aplicando SEO.
          <br />
          <br />
          Meu trabalho é focado em <strong>Aplicações Web</strong> e estou
          sempre pronto para enfrentar novos desafios e elevar o padrão do meu
          trabalho.
        </S.Text>
        <S.DivIcons>{ProfilecardIcons}</S.DivIcons>
      </S.Content>
    </S.Wrapper>
  );
};

export default AboutMe;
