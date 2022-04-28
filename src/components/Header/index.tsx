/* eslint-disable */
import * as S from './styles';
import * as T from 'types/home';
import { Link } from 'react-scroll';
import { useState, memo, useEffect } from 'react';
import { Button, Modal } from 'components';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState<T.TitleName>('HOME');
  const [colorHeader, setColorHeader] = useState<T.ColorProps>('transparent');

  useEffect(() => {
    document.title = `${title} | Rodrigo Sobral - Montagem e manutenção de
    computadores e desenvolvedor de sites`;

    document.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      scrollPosition >= 280
        ? setColorHeader('black')
        : setColorHeader('transparent');
    });
    document.removeEventListener('scroll', function () {});
  }, [title]);

  return (
    <S.Wrapper id="header" color={colorHeader}>
      {showModal && <Modal handleClose={() => setShowModal(false)} />}

      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={600}
        onClick={() => setTitle('HOME')}
      >
        <S.ImgLogo />
      </Link>
      <S.NavWrapper>
        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => setTitle('SOBRE')}
        >
          <Button secondary>Sobre</Button>
        </Link>
        <Link
          activeClass="active"
          to="servicos"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => setTitle('SERVIÇOS')}
        >
          <Button secondary>Serviços</Button>
        </Link>
        <Link
          activeClass="active"
          to="contato"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => setTitle('CONTATO')}
        >
          <Button secondary>Contato</Button>
        </Link>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
