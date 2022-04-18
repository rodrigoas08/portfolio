import * as S from './styles';
import { useState, memo } from 'react';
import { Button, Modal } from 'components';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Wrapper>
      {/* se showModal for verdadeiro, exibe o modal ( o modal só aparecerá após ser clicado no botão "contact") */}
      {showModal && <Modal handleClose={() => setShowModal(false)} />}

      <a href="#home">
        <S.ImgLogo />
      </a>
      <S.NavWrapper>
        <a href="#home">
          <Button secondary>Home</Button>
        </a>

        <a href="#servicos">
          <Button secondary>Serviços</Button>
        </a>

        <Button secondary>Brechó</Button>
        <Button secondary onClick={() => setShowModal(true)}>
          Contato
        </Button>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
