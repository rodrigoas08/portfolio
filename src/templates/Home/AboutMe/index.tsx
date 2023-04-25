import * as S from './styles';
import { Title } from 'components';
import EuPedro from 'img/euPedro.jpg';
import ProfileCard from './ProfileCard';
import { openLinkInNewTab } from 'utils/functions';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';

const AboutMe = () => {
  const ProfilecardIcons = [
    <FaGithub
      onClick={() => openLinkInNewTab('https://github.com/rodrigoas08')}
      size={30}
      cursor="pointer"
      title="Github"
      key={0}
    />,
    <FaLinkedin
      onClick={() =>
        openLinkInNewTab('https://www.linkedin.com/in/rodrigo-sobral-302012aa/')
      }
      size={30}
      cursor="pointer"
      title="LinkedIn"
      key={1}
    />,
    <FaInstagram
      onClick={() =>
        openLinkInNewTab('https://www.instagram.com/orodrigosobral/')
      }
      size={30}
      cursor="pointer"
      title="Instagram"
      key={2}
    />,
    <FaWhatsapp
      onClick={() =>
        openLinkInNewTab('https://api.whatsapp.com/send?phone=5521985141580')
      }
      size={30}
      cursor="pointer"
      title="Whatsapp"
      key={3}
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
        />
        <S.AboutText
          data-aos="fade-left"
          data-aos-offset="2"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <S.Text>
            Meu nome é Rodrigo Sobral, sou natural do Rio de janeiro. <br />
            Atualmente sou Desenvolvedor Front-end Jr na{' '}
            <a onClick={() => openLinkInNewTab('https://www.usabit.com.br')}>
              <S.Span>Usabit</S.Span>
            </a>{' '}
            onde comecei como estágiário em dezembro de 2021.
            <br />
            Meu foco é desenvolver interfaces modernas de alta performance,
            responsivas e SEO. <br />
            As tecnologias que tenho um conhecimento mais sólido para criação de
            sites é React.js, Typescript e Styled Component. Hoje venho me
            aventurando no mundo do Vue.js e busco aprender outras tecnologias
            para ampliar meus conhecimentos.
          </S.Text>
          <S.DivIcons>
            <h2>Conheça minhas redes sociais:</h2>
            {ProfilecardIcons}
          </S.DivIcons>
        </S.AboutText>
      </S.Section>
    </S.Wrapper>
  );
};

export default AboutMe;
