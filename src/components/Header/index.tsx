import paths from './path';
import * as S from './styles';
import { useState, memo } from 'react';
import { Button, Modal } from 'components';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Wrapper>
      {showModal && <Modal handleClose={() => setShowModal(false)} />}

      <a href="#home">
        <S.ImgLogo />
      </a>
      <S.NavWrapper>
        {paths.map((path) => {
          return (
            <a href={path.ref || undefined}>
              <Button
                secondary
                onClick={() => {
                  path.title === 'Contato' && setShowModal(!showModal);
                }}
              >
                {path.title}
              </Button>
            </a>
          );
        })}
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
