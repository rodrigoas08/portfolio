import * as S from './styles';
import { memo } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch } from 'react-icons/fa';

export const Footer = () => {
  return (
    <S.Footer>
      <S.DivCopyright>
        <p>
          &copy; Copyright 2022 Rodrigo Sobral - Todos os direitos reservados.
        </p>
      </S.DivCopyright>
      <S.IconsWrapper>
        <p>Siga minhas redes sociais:</p>
        <FaLinkedin cursor="pointer" title="LinkedIn" />
        <FaFacebook cursor="pointer" title="Facebook" />
        <FaInstagram cursor="pointer" title="Instagram" />
        <FaTwitch cursor="pointer" title="Twitch" />
      </S.IconsWrapper>
    </S.Footer>
  );
};

export default memo(Footer);
