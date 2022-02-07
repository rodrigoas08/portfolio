import * as S from "./styles";
import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa";

export const Footer = () => {
  return (
    <S.Footer>
      &copy; Copyright 2022 Rodrigo Sobral - Todos os direitos reservados.
      <S.IconsWrapper>
        <FaFacebook cursor="pointer" title="Facebook" />
        <FaInstagram cursor="pointer" title="Instagram" />
        <FaTwitch cursor="pointer" title="Twitch" />
      </S.IconsWrapper>
    </S.Footer>
  );
};

export default Footer;
