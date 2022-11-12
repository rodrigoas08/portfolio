/* eslint-disable */
import * as S from './styles';
import { Link } from 'react-scroll';
import { changeTitleOfPage, handleScrollPosition } from './functions';
import { useState, memo, useLayoutEffect } from 'react';
import { IColorProps, ITitleName } from 'interfaces/header';

export const Header = () => {
  const [title, setTitle] = useState<ITitleName>({ name: 'Início' });
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
              setTitle({ name: 'Início' });
              changeTitleOfPage({ name: 'Início' });
            }}
          >
            <S.LinkMenu
              activeLink={title.name === 'Início'}
              onClick={() => {
                setTitle({ name: 'Início' });
                changeTitleOfPage({ name: 'Início' });
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
              setTitle({ name: 'Sobre' });
              changeTitleOfPage({ name: 'Sobre' });
            }}
          >
            <S.LinkMenu
              activeLink={title.name === 'Sobre'}
              onClick={() => {
                setTitle({ name: 'Sobre' });
                changeTitleOfPage({ name: 'Sobre' });
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
              setTitle({ name: 'Serviços' });
              changeTitleOfPage({ name: 'Serviços' });
            }}
          >
            <S.LinkMenu
              activeLink={title.name === 'Serviços'}
              onClick={() => {
                setTitle({ name: 'Serviços' });
                changeTitleOfPage({ name: 'Serviços' });
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
              setTitle({ name: 'Contato' });
              changeTitleOfPage({ name: 'Contato' });
            }}
          >
            <S.LinkMenu
              activeLink={title.name === 'Contato'}
              onClick={() => {
                setTitle({ name: 'Contato' });
                changeTitleOfPage({ name: 'Contato' });
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
