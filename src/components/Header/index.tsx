/* eslint-disable */
import * as S from './styles';
import { Link } from 'react-scroll';
import { useState, memo, useEffect } from 'react';
import { IColorProps, ITitleName } from 'interfaces/header';
import { changeTitleOfPage, scrollPosition } from './functions';

export const Header = () => {
  const [title, setTitle] = useState<ITitleName>({ name: 'HOME' });
  const [colorHeader, setColorHeader] = useState<IColorProps>({
    color: 'transparent'
  });

  useEffect(() => {
    changeTitleOfPage(title);
    scrollPosition(setColorHeader);
  }, [title]);

  return (
    <S.Wrapper id="header" color={colorHeader.color}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={600}
        onClick={() => setTitle({ name: 'HOME' })}
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
          onClick={() => setTitle({ name: 'SOBRE' })}
        >
          <S.LinkMenu activeLink={title.name === 'SOBRE'}>Sobre</S.LinkMenu>
        </Link>
        <Link
          activeClass="active"
          to="servicos"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => setTitle({ name: 'SERVIÇOS' })}
        >
          <S.LinkMenu activeLink={title.name === 'SERVIÇOS'}>
            Serviços
          </S.LinkMenu>
        </Link>
        <Link
          activeClass="active"
          to="contato"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => setTitle({ name: 'CONTATO' })}
        >
          <S.LinkMenu activeLink={title.name === 'CONTATO'}>Contato</S.LinkMenu>
        </Link>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
