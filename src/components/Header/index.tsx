import paths from './path';
import * as S from './styles';
import { Link } from 'react-scroll';
import { useState, memo } from 'react';
import { Button, Modal } from 'components';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

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
      >
        <S.ImgLogo />
      </Link>
      <S.NavWrapper>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
        >
          <Button secondary>Home</Button>
        </Link>
        <Link
          activeClass="active"
          to="servicos"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
        >
          <Button secondary>Serviços</Button>
        </Link>
        <Link
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
        >
          <Button secondary onClick={() => setShowModal(!showModal)}>
            Contato
          </Button>
        </Link>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
