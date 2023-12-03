import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './styles';
import theme from 'styles/theme';
import { HomeIllustration } from 'assets/Illustration';
import { openLinkInNewTab } from 'utils/functions';
import { Portfolio, AboutMe, Contact, Skills } from 'templates';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { useLayoutEffect, useState } from 'react';
import { PolygonIcon } from 'components/Icons';

const Home = () => {
  const [sizeIllustration, setSizeIllustration] = useState('30rem');

  useLayoutEffect(() => {
    if (window.innerWidth <= parseInt(theme.breakpoints.ipad))
      setSizeIllustration('20rem');

    window.addEventListener('resize', function () {
      window.innerWidth > parseInt(theme.breakpoints.ipad)
        ? setSizeIllustration('30rem')
        : setSizeIllustration('20rem');
    });
  }, []);

  return (
    <>
      <S.Wrapper
        data-aos="fade-down"
        data-aos-offset="2"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <S.WrapperText>
          <S.Name>Rodrigo Sobral</S.Name>
          <HomeIllustration
            width={sizeIllustration}
            height={sizeIllustration}
          />
          <S.CarrerName>desenvolvedor front-end</S.CarrerName>
          <S.NavIcons>
            <PolygonIcon
              isShaded
              isHover
              children={
                <FaGithub
                  onClick={() =>
                    openLinkInNewTab('https://github.com/rodrigoas08')
                  }
                  size={30}
                  cursor="pointer"
                  title="Github"
                  key={crypto.randomUUID()}
                />
              }
            />
            <PolygonIcon
              isShaded
              isHover
              children={
                <FaLinkedin
                  onClick={() =>
                    openLinkInNewTab(
                      'https://www.linkedin.com/in/rodrigo-sobral-302012aa/'
                    )
                  }
                  size={30}
                  cursor="pointer"
                  title="LinkedIn"
                  key={crypto.randomUUID()}
                />
              }
            />
            <PolygonIcon
              isShaded
              isHover
              children={
                <FaWhatsapp
                  onClick={() =>
                    openLinkInNewTab(
                      'https://api.whatsapp.com/send?phone=5521985141580'
                    )
                  }
                  size={30}
                  cursor="pointer"
                  title="Whatsapp"
                  key={crypto.randomUUID()}
                />
              }
            />
          </S.NavIcons>
        </S.WrapperText>
      </S.Wrapper>
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};
export default Home;
AOS.init();
AOS.refresh();
