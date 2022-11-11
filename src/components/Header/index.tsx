/* eslint-disable */
import * as S from './styles';
import { Link } from 'react-scroll';
import { changeTitleOfPage, handleScrollPosition } from './functions';
import { useState, memo, useLayoutEffect } from 'react';
import { IColorProps, ITitleName } from 'interfaces/header';

export const Header = () => {
  const [title, setTitle] = useState<ITitleName>({ name: 'INICIO' });
  const [colorHeader, setColorHeader] = useState<IColorProps>({
    color: 'transparent'
  });

  useLayoutEffect(() => {
    handleScrollPosition(setColorHeader);
  }, []);

  return (
    <S.Wrapper color={colorHeader.color}>
      <Link to="inicio" spy={true} smooth={true}>
        <S.ImgProfile />
      </Link>
      <S.NavWrapper>
        <li>
          <Link
            to="inicio"
            spy={true}
            smooth={true}
            onSetActive={() => {
              setTitle({ name: 'INICIO' });
              changeTitleOfPage({ name: 'INICIO' });
            }}
          >
            <S.LinkMenu
              activeLink={title.name === 'INICIO'}
              onClick={() => {
                setTitle({ name: 'INICIO' });
                changeTitleOfPage({ name: 'INICIO' });
              }}
            >
              Início
            </S.LinkMenu>
          </Link>
        </li>
        <li>
          <Link
            to="sobre"
            spy={true}
            smooth={true}
            onSetActive={() => {
              setTitle({ name: 'SOBRE' });
              changeTitleOfPage({ name: 'SOBRE' });
            }}
          >
            <S.LinkMenu
              activeLink={title.name === 'SOBRE'}
              onClick={() => {
                setTitle({ name: 'SOBRE' });
                changeTitleOfPage({ name: 'SOBRE' });
              }}
            >
              Sobre
            </S.LinkMenu>
          </Link>
        </li>
        <li>
          <Link
            to="servicos"
            spy={true}
            smooth={true}
            onSetActive={() => {
              setTitle({ name: 'SERVIÇOS' });
              changeTitleOfPage({ name: 'SERVIÇOS' });
            }}
          >
            <S.LinkMenu
              activeLink={title.name === 'SERVIÇOS'}
              onClick={() => {
                setTitle({ name: 'SERVIÇOS' });
                changeTitleOfPage({ name: 'SERVIÇOS' });
              }}
            >
              Serviços
            </S.LinkMenu>
          </Link>
        </li>
        <li>
          <Link
            to="contato"
            spy={true}
            smooth={true}
            onSetActive={() => {
              setTitle({ name: 'CONTATO' });
              changeTitleOfPage({ name: 'CONTATO' });
            }}
          >
            <S.LinkMenu
              activeLink={title.name === 'CONTATO'}
              onClick={() => {
                setTitle({ name: 'CONTATO' });
                changeTitleOfPage({ name: 'CONTATO' });
              }}
            >
              Contato
            </S.LinkMenu>
          </Link>
        </li>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default memo(Header);
