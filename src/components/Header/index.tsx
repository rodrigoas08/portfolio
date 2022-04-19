import * as S from './styles';
import { useState, memo } from 'react';
import { Button, Modal } from 'components';
import { MenuLinks } from './mock';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <S.Wrapper>
      {showModal && <Modal handleClose={() => setShowModal(false)} />}

      <a href="#home">
        <S.ImgLogo />
      </a>
      <S.NavWrapper>
        {MenuLinks.map((link, index) => {
          return (
            <a href={link.ref || undefined} key={index}>
              <Button
                secondary
                onClick={() => {
                  link.title === 'Contato' && setShowModal(!showModal);
                }}
              >
                {link.title}
              </Button>
            </a>
          );
        })}
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
