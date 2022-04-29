/* eslint-disable */
import * as S from './styles';
import { Link } from 'react-scroll';
import { Button, Modal } from 'components';
import { useState, memo, useEffect } from 'react';
import { IColorProps, ITitleName } from 'interfaces/header';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState<ITitleName>({ title: 'HOME' });
  const [colorHeader, setColorHeader] = useState<IColorProps>({
    color: 'transparent'
  });

  useEffect(() => {
    document.title = `${title.title} | Rodrigo Sobral - Montagem e manutenção de
    computadores e desenvolvedor de sites`;

    document.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      scrollPosition >= 280
        ? setColorHeader({ color: 'black' })
        : setColorHeader({ color: 'transparent' });
      console.log(scrollPosition);
    });
    return () => {
      document.removeEventListener('scroll', function () {});
    };
  }, [title]);
  return (
    <S.Wrapper id="header" color={colorHeader.color}>
      {showModal && <Modal handleClose={() => setShowModal(false)} />}

      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={600}
        onClick={() => setTitle({ title: 'HOME' })}
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
          onClick={() => setTitle({ title: 'SOBRE' })}
        >
          <Button navMenuHeader>Sobre</Button>
        </Link>
        <Link
          activeClass="active"
          to="servicos"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => setTitle({ title: 'SERVIÇOS' })}
        >
          <Button navMenuHeader>Serviços</Button>
        </Link>
        <Link
          activeClass="active"
          to="contato"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => setTitle({ title: 'CONTATO' })}
        >
          <Button navMenuHeader>Contato</Button>
        </Link>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
