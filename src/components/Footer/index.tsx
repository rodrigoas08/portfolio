import * as S from './styles';
import { memo } from 'react';

const Footer = () => {
  return (
    <S.Footer>
      <S.TextCopyright>
        &copy; Copyright 2022 Rodrigo Sobral - Todos os direitos reservados.
      </S.TextCopyright>
      <S.IconsWrapper></S.IconsWrapper>
    </S.Footer>
  );
};

export default memo(Footer);
