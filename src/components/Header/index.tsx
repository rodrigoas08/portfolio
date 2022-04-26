import * as S from './styles';
import { Link } from 'react-scroll';
import { useState, memo, useEffect } from 'react';
import { Button, Modal } from 'components';

type TitleName = 'HOME' | 'SOBRE' | 'SERVIÇOS' | 'CONTATO';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState<TitleName>('HOME');

  useEffect(() => {
    document.title = `${title} | Rodrigo Sobral - Montagem e manutenção de
    computadores e desenvolvedor de sites`;
  }, [title]);

  return (
    <S.Wrapper>
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
