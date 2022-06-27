import * as S from './styles';
import { memo } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch } from 'react-icons/fa';

export const Footer = () => {
  return (
    <S.Footer>
      <S.TextCopyright>
        &copy; Copyright 2022 Rodrigo Sobral - Todos os direitos reservados.
      </S.TextCopyright>
      <S.IconsWrapper>
        <p>Siga minhas redes sociais:</p>
        <a href="#" target="blank" rel="noopener noreferrer">
          <FaLinkedin cursor="pointer" title="LinkedIn" />
        </a>
        <a href="#" target="blank" rel="noopener noreferrer">
          <FaFacebook cursor="pointer" title="Facebook" />
        </a>
        <a href="#" target="blank" rel="noopener noreferrer">
          <FaInstagram cursor="pointer" title="Instagram" />
        </a>
        <a href="#" target="blank" rel="noopener noreferrer">
          <FaTwitch cursor="pointer" title="Twitch" />
        </a>
      </S.IconsWrapper>
    </S.Footer>
  );
};

export default memo(Footer);
