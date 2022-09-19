/* eslint-disable */
import * as S from './styles';
import { Link } from 'react-scroll';
import { useState, memo, useLayoutEffect } from 'react';
import { IColorProps, ITitleName } from 'interfaces/header';
import { changeTitleOfPage, scrollPosition } from './functions';

export const Header = () => {
  const [title, setTitle] = useState<ITitleName>({ name: 'HOME' });
  const [colorHeader, setColorHeader] = useState<IColorProps>({
    color: 'transparent'
  });

  useLayoutEffect(() => {
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
        <S.ImgProfile />
      </Link>
      <S.NavWrapper>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            onClick={() => setTitle({ name: 'HOME' })}
          >
            <S.LinkMenu activeLink={title.name === 'HOME'}>Início</S.LinkMenu>
          </Link>
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
          <Link
            activeClass="active"
            to="contato"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            onClick={() => setTitle({ name: 'CONTATO' })}
          >
            <S.LinkMenu activeLink={title.name === 'CONTATO'}>
              Contato
            </S.LinkMenu>
          </Link>
        </li>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
