import * as S from './styles';
import { Title } from 'components';
import { openLinkInNewTab } from 'utils/functions';
// import { MdDevices } from 'react-icons/md';
// import { IoMdSpeedometer } from 'react-icons/io';
// import { FaHandsAslInterpreting } from 'react-icons/fa6';
// import { FaGlobe } from 'react-icons/fa';
// import { PolygonIcon } from 'assets/Icons';

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
        <S.Aside>
          <S.Text>
            Olá, me chamo Rodrigo, papai do Pedro e sou do Rio de Janeiro.{' '}
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
            priorizando performance, acessibilidade, responsividade e a
            semântica do código.
          </S.Text>
          {/* <S.WrapperAboutIcons>
            <PolygonIcon
              size={8}
              children={<MdDevices title="Responsividade" />}
              key={crypto.randomUUID()}
            />
            <PolygonIcon
              size={8}
              children={<IoMdSpeedometer title="Performance" />}
              key={crypto.randomUUID()}
            />
            <PolygonIcon
              size={8}
              children={<FaHandsAslInterpreting title="Acessibilidade" />}
              key={crypto.randomUUID()}
            />
            <PolygonIcon
              size={8}
              children={<FaGlobe title="SEO" />}
              key={crypto.randomUUID()}
            />
          </S.WrapperAboutIcons> */}
        </S.Aside>
      </S.Content>
    </S.Wrapper>
  );
};

export default AboutMe;
